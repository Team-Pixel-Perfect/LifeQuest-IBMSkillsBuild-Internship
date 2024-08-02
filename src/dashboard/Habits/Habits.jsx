import React, { useState, useEffect } from "react";
import Modal from "./Modal";

const Habits = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [habitName, setHabitName] = useState("");
  const [habitGoal, setHabitGoal] = useState(1);
  const [habitFrequency, setHabitFrequency] = useState("Daily");
  const [habitDays, setHabitDays] = useState([]);
  const [habits, setHabits] = useState([]);
  const [completedHabits, setCompletedHabits] = useState([]);
  const [incompleteHabits, setIncompleteHabits] = useState([]);
  const [progress, setProgress] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [currentHabitId, setCurrentHabitId] = useState(null);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [dailyCompletionPercentage, setDailyCompletionPercentage] = useState(0);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setIsEditing(false);
    setCurrentHabitId(null);
  };

  const handleGoalChange = (increment) => {
    setHabitGoal((prev) => Math.max(1, prev + increment));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      const updatedHabits = habits.map((habit) =>
        habit.id === currentHabitId
          ? {
              ...habit,
              name: habitName,
              goal: habitGoal,
              frequency: habitFrequency,
              days: habitDays,
            }
          : habit
      );
      setHabits(updatedHabits);
      setProgress({ ...progress, [currentHabitId]: 100 });
    } else {
      const newHabit = {
        id: habits.length + 1,
        name: habitName,
        goal: habitGoal,
        frequency: habitFrequency,
        days: habitDays,
      };
      setHabits([...habits, newHabit]);
      setProgress({ ...progress, [newHabit.id]: 100 });
    }
    setHabitName("");
    setHabitGoal(1);
    setHabitFrequency("Daily");
    setHabitDays([]);
    closeModal();
  };

  const handleEdit = (habit) => {
    setHabitName(habit.name);
    setHabitGoal(habit.goal);
    setHabitFrequency(habit.frequency);
    setHabitDays(habit.days);
    setCurrentHabitId(habit.id);
    setIsEditing(true);
    openModal();
  };

  const handleDelete = (id) => {
    setHabits(habits.filter((habit) => habit.id !== id));
    setProgress((prev) => {
      const newProgress = { ...prev };
      delete newProgress[id];
      return newProgress;
    });
  };

  const handleMarkAsDone = (id) => {
    const habit = habits.find((habit) => habit.id === id);
  
    // Update habit completion count
    if (!habit.completions) {
      habit.completions = 0;
    }
    habit.completions += 1;
  
    if (habit.completions >= habit.goal) {
      setCompletedHabits([habit, ...completedHabits]); // Add to top
      setHabits(habits.filter((h) => h.id !== id));
      setProgress((prev) => {
        const newProgress = { ...prev };
        delete newProgress[id];
        return newProgress;
      });
  
      // Update streaks
      setCurrentStreak((prevStreak) => prevStreak + 1);
      setBestStreak((prevBestStreak) =>
        Math.max(prevBestStreak, currentStreak + 1)
      );
    } else {
      // Move a copy of the habit to completed habits with completions incremented by 1
      const completedHabit = { ...habit, completions: habit.completions };
      setCompletedHabits([completedHabit, ...completedHabits]); // Add to top
  
      // Update the habit in the habits list with updated completions
      const updatedHabits = habits.map((h) =>
        h.id === id ? { ...habit, completions: habit.completions } : h
      );
      setHabits(updatedHabits);
    }
  };
  
  

  useEffect(() => {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);

    const timeUntilMidnight = midnight.getTime() - now.getTime();

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = { ...prevProgress };
        for (let id in newProgress) {
          newProgress[id] = Math.max(0, newProgress[id] - 1);
        }
        return newProgress;
      });
    }, 1000); // Decrease progress every second

    const timeout = setTimeout(() => {
      // Move incomplete habits to incompleteHabits
      const incomplete = habits.filter(
        (habit) => !completedHabits.includes(habit)
      );
      setIncompleteHabits(incomplete);
      setHabits([]);
      setCompletedHabits([]);
      setProgress({});
      setCurrentStreak(0);
    }, timeUntilMidnight);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [habits, completedHabits]);

  useEffect(() => {
    // Update daily completion percentage
    const totalHabits = habits.length + completedHabits.length;
    if (totalHabits > 0) {
      const completed = completedHabits.length;
      setDailyCompletionPercentage((completed / totalHabits) * 100);
    }
  }, [completedHabits, habits]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-4">
      <div className="w-full p-4 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-center mb-6">
          Hello, Welcome to LifeQuest
        </h1>
        <div className="flex justify-between items-center mb-6">
          <div
            className={`w-32 h-32 border-4 rounded-full flex flex-col items-center justify-center text-center bg-gray-100 ${
              dailyCompletionPercentage === 100
                ? "border-blue-600"
                : dailyCompletionPercentage >= 75
                ? "border-blue-500"
                : dailyCompletionPercentage >= 50
                ? "border-blue-400"
                : dailyCompletionPercentage >= 25
                ? "border-blue-300"
                : "border-blue-200"
            }`}
          >
            <span className="text-lg font-semibold">Day's Progress</span>
            <span className="text-2xl font-bold">
              {Math.round(dailyCompletionPercentage)}%
            </span>
          </div>

          <div className="ml-6">
            <div className="text-lg font-semibold">
              Current Streak: {currentStreak}
            </div>
            <div className="text-lg font-semibold">
              Best Streak: {bestStreak}
            </div>
          </div>
        </div>
        <button
          onClick={openModal}
          className="bg-blue-600 text-white px-6 py-2 rounded-md mb-6 hover:bg-blue-700 transition"
        >
          Add Habit
        </button>
        <div className="space-y-4">
          {habits.map((habit) => (
            <div
              key={habit.id}
              className="flex justify-between items-center p-4 bg-gray-200 rounded-md shadow-sm relative"
            >
              <div>
                <span className="text-lg font-semibold">{habit.name}</span>
                <div className="text-sm text-gray-600">{habit.frequency}</div>
                <div className="flex space-x-1 mt-2">
                  {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
                    <div
                      key={index}
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-center text-sm font-medium border ${
                        habit.frequency === "Daily" ||
                        habit.days.includes(index)
                          ? "bg-blue-500 text-white"
                          : "bg-gray-100"
                      }`}
                    >
                      {day}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
                  onClick={() => handleMarkAsDone(habit.id)}
                >
                  Mark as Done
                </button>
                <button
                  className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition"
                  onClick={() => handleEdit(habit)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                  onClick={() => handleDelete(habit.id)}
                >
                  Delete
                </button>
              </div>
              <div
                className="absolute top-0 left-0 h-1 bg-blue-500"
                style={{ width: `${progress[habit.id]}%` }}
              />
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-bold mt-6 mb-4">Completed Habits</h2>
        {completedHabits.length > 0 ? (
          <div className="space-y-4">
            {completedHabits.map((habit) => (
              <div
                key={habit.id}
                className="flex justify-between items-center p-4 bg-gray-400 rounded-md text-white line-through"
              >
                <div>
                  <span className="text-lg font-semibold">{habit.name}</span>
                  <div className="text-sm text-gray-200">{habit.frequency}</div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No habits completed yet.</p>
        )}
        <h2 className="text-2xl font-bold mt-6 mb-4">Incomplete Habits</h2>
        {incompleteHabits.length > 0 ? (
          <div className="space-y-4">
            {incompleteHabits.map((habit) => (
              <div
                key={habit.id}
                className="flex justify-between items-center p-4 bg-red-200 rounded-md shadow-sm"
              >
                <div>
                  <span className="text-lg font-semibold">{habit.name}</span>
                  <div className="text-sm text-red-600">{habit.frequency}</div>
                </div>
                <div className="text-red-600 font-bold">Incomplete</div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No incomplete habits.</p>
        )}
      </div>
      {isModalOpen && (
        <Modal
          habitName={habitName}
          setHabitName={setHabitName}
          habitGoal={habitGoal}
          setHabitGoal={setHabitGoal}
          habitFrequency={habitFrequency}
          setHabitFrequency={setHabitFrequency}
          habitDays={habitDays}
          setHabitDays={setHabitDays}
          handleGoalChange={handleGoalChange}
          onSubmit={handleSubmit}
          onClose={closeModal}
          isEditing={isEditing}
        />
      )}
    </div>
  );
};

export default Habits;
