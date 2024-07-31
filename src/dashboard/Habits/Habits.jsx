import React, { useState, useEffect } from 'react';
import Modal from './Modal';

const Habits = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [habitName, setHabitName] = useState('');
    const [habitGoal, setHabitGoal] = useState(3);
    const [habitFrequency, setHabitFrequency] = useState('Daily');
    const [habitDays, setHabitDays] = useState([]);
    const [habits, setHabits] = useState([]);
    const [completedHabits, setCompletedHabits] = useState([]);
    const [progress, setProgress] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const [currentHabitId, setCurrentHabitId] = useState(null);

    // New states for streaks and progress
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
            const updatedHabits = habits.map(habit => 
                habit.id === currentHabitId ? { ...habit, name: habitName, goal: habitGoal, frequency: habitFrequency, days: habitDays } : habit
            );
            setHabits(updatedHabits);
            setProgress({ ...progress, [currentHabitId]: 100 });
        } else {
            const newHabit = {
                id: habits.length + 1,
                name: habitName,
                goal: habitGoal,
                frequency: habitFrequency,
                days: habitDays
            };
            setHabits([...habits, newHabit]);
            setProgress({ ...progress, [newHabit.id]: 100 });
        }
        setHabitName('');
        setHabitGoal(3);
        setHabitFrequency('Daily');
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
        setHabits(habits.filter(habit => habit.id !== id));
        setProgress((prev) => {
            const newProgress = { ...prev };
            delete newProgress[id];
            return newProgress;
        });
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                const newProgress = { ...prevProgress };
                for (let id in newProgress) {
                    newProgress[id] = Math.max(0, newProgress[id] - 1);
                }
                return newProgress;
            });
        }, 1000); // Decrease progress every second

        return () => clearInterval(interval);
    }, []);

    const handleMarkAsDone = (id) => {
        const completedHabit = habits.find(habit => habit.id === id);
        setCompletedHabits([...completedHabits, completedHabit]);
        setHabits(habits.filter(habit => habit.id !== id));
        setProgress((prev) => {
            const newProgress = { ...prev };
            delete newProgress[id];
            return newProgress;
        });

        // Update streaks
        setCurrentStreak(prevStreak => prevStreak + 1);
        setBestStreak(prevBestStreak => Math.max(prevBestStreak, currentStreak + 1));
    };

    useEffect(() => {
        // Update daily completion percentage
        const totalHabits = habits.length + completedHabits.length;
        if (totalHabits > 0) {
            const completed = completedHabits.length;
            setDailyCompletionPercentage((completed / totalHabits) * 100);
        }
    }, [completedHabits, habits]);

    useEffect(() => {
        const now = new Date();
        const lastCompletedDate = new Date(); // You might want to store this information somewhere

        if (now.getDate() !== lastCompletedDate.getDate()) {
            // Reset current streak if day has changed
            setCurrentStreak(0);
        }
    }, []);

    return (
        <div className="flex">
            <div className="flex-1 p-8 bg-gray-100">
                <h1 className="text-3xl font-bold mb-6">Salut, {"{username}"}</h1>
                <div className="flex items-center mb-6">
                    <div className="w-24 h-24 border-4 border-gray-300 rounded-full flex items-center justify-center">
                        <div className="text-lg font-semibold">
                            Day's Progress
                            <div className="text-xl font-bold">{Math.round(dailyCompletionPercentage)}%</div>
                        </div>
                    </div>
                    <div className="ml-6">
                        <div className="text-lg font-semibold">Current Streak: {currentStreak}</div>
                        <div className="text-lg font-semibold">Best Streak: {bestStreak}</div>
                    </div>
                </div>
                <button onClick={openModal} className="bg-gray-600 text-white px-4 py-2 rounded-md mb-6">
                    Add Habit
                </button>
                <div className="flex flex-col gap-4">
                    {habits.map((habit) => (
                        <div key={habit.id} className="flex justify-between items-center p-4 bg-gray-600 rounded-md text-white relative">
                            <div>
                                <span>{habit.name}</span>
                                <div className="text-sm text-gray-300">{habit.frequency}</div>
                                <div className="flex space-x-1">
                                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                                        <div
                                            key={index}
                                            className={`w-6 h-6 rounded-full border text-center ${habit.days.includes(index) || habit.frequency === 'Daily' ? 'bg-gray-300' : 'bg-transparent'}`}
                                        >
                                            {day}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex space-x-2">
                                <button 
                                    className="bg-gray-800 px-4 py-2 rounded-md"
                                    onClick={() => handleMarkAsDone(habit.id)}
                                >
                                    Mark as Done
                                </button>
                                <button 
                                    className="bg-blue-600 px-4 py-2 rounded-md"
                                    onClick={() => handleEdit(habit)}
                                >
                                    Edit
                                </button>
                                <button 
                                    className="bg-red-600 px-4 py-2 rounded-md"
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
                <h2 className="text-2xl font-bold mt-6">Completed Habits</h2>
                {completedHabits.length > 0 ? (
                    <div className="flex flex-col gap-4">
                        {completedHabits.map((habit) => (
                            <div key={habit.id} className="flex justify-between items-center p-4 bg-gray-400 rounded-md text-white line-through">
                                <div>
                                    <span>{habit.name}</span>
                                    <div className="text-sm text-gray-300">{habit.frequency}</div>
                                    <div className="flex space-x-1">
                                        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                                            <div
                                                key={index}
                                                className={`w-6 h-6 rounded-full border text-center ${habit.days.includes(index) || habit.frequency === 'Daily' ? 'bg-gray-300' : 'bg-transparent'}`}
                                            >
                                                {day}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <button className="bg-gray-600 px-4 py-2 rounded-md" disabled>
                                    Completed
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No completed habits yet.</p>
                )}
           
           </div>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2 className="text-2xl font-bold mb-4">{isEditing ? 'Edit Habit' : 'Create a Habit'}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="habitName" className="block text-sm font-medium mb-2">Name</label>
                        <input 
                            type="text" 
                            id="habitName" 
                            className="w-full border rounded-md p-2" 
                            placeholder="Enter habit name" 
                            value={habitName} 
                            onChange={(e) => setHabitName(e.target.value)} 
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="habitGoal" className="block text-sm font-medium mb-2">Goal</label>
                        <div className="flex items-center border rounded-md">
                            <button type="button" className="p-2" onClick={() => handleGoalChange(-1)}>-</button>
                            <input 
                                type="number" 
                                id="habitGoal" 
                                className="w-full text-center p-2" 
                                value={habitGoal} 
                                onChange={(e) => setHabitGoal(Number(e.target.value))} 
                            />
                            <button type="button" className="p-2" onClick={() => handleGoalChange(1)}>+</button>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="habitFrequency" className="block text-sm font-medium mb-2">Frequency</label>
                        <select 
                            id="habitFrequency" 
                            className="w-full border rounded-md p-2" 
                            value={habitFrequency} 
                            onChange={(e) => {
                                setHabitFrequency(e.target.value);
                                setHabitDays([]); // Reset days selection when frequency changes
                            }}
                        >
                            <option>Daily</option>
                            <option>Weekly</option>
                            <option>Monthly</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Days</label>
                        <div className="flex justify-between">
                            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                                <button 
                                    key={index} 
                                    type="button" 
                                    className={`w-8 h-8 rounded-full border text-center ${habitDays.includes(index) || habitFrequency === 'Daily' ? 'bg-blue-500 text-customWhite' : 'bg-transparent'}`}
                                    onClick={() => {
                                        if (habitFrequency !== 'Daily') {
                                            setHabitDays((prev) => prev.includes(index) ? prev.filter(d => d !== index) : [...prev, index]);
                                        }
                                    }}
                                >
                                    {day}
                                </button>
                            ))}
                        </div>
                    </div>
                    <button type="submit" className="w-full bg-gray-600 text-white p-2 rounded-md">{isEditing ? 'Update' : 'Create'}</button>
                </form>
            </Modal>
        </div>
    );
};

export default Habits;
