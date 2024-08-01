import React, { useState } from "react";

const StatsPage = () => {
  const [selected, setSelected] = useState("D");

  const weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const goals = ["Goal_1", "Goal_2", "Goal_3"];
  const selector = ["D", "W", "M", "Q", "Y"];
  const habits = {
    D: {
      Habit_1: 32,
      Habit_2: 5,
      Habit_3: 40,
      Habit_4: 24,
      Habit_5: 0,
      Habit_6: 40,
      Habit_7: 8,
    },
    W: {
      Habit_1: 8,
      Habit_2: 40,
      Habit_3: 24,
      Habit_4: 40,
      Habit_5: 5,
      Habit_6: 32,
      Habit_7: 0,
    },
    M: {
      Habit_1: 40,
      Habit_2: 24,
      Habit_3: 32,
      Habit_4: 8,
      Habit_5: 40,
      Habit_6: 5,
      Habit_7: 0,
    },
    Q: {
      Habit_1: 5,
      Habit_2: 0,
      Habit_3: 32,
      Habit_4: 40,
      Habit_5: 24,
      Habit_6: 8,
      Habit_7: 40,
    },
    Y: {
      Habit_1: 0,
      Habit_2: 8,
      Habit_3: 40,
      Habit_4: 5,
      Habit_5: 32,
      Habit_6: 24,
      Habit_7: 40,
    },
  };
  const habitsData = habits[selected];

  return (
    <div className="flex overflow-y-auto">
      <div className="flex-1 p-8 bg-gray-100">
        <h3 className="text-2xl mb-4">Your week at a glance!</h3>
        <div className="flex justify-between">
          {weekdays.map((day, index) => (
            <div key={index} className="flex flex-col items-center space-y-4">
              <div className="w-32 h-36 bg-gray-300 rounded-xl flex flex-col items-center justify-center">
                <p className="text-md">{day}</p>
                <p className="text-6xl">{index + 1}</p>
              </div>
              <div className="w-14 h-14 bg-customBlack rounded-full hover:w-32 transition-all duration-300"></div>
            </div>
          ))}
        </div>
        <div className="flex flex-col mt-8">
          <h3 className="text-2xl mb-4">Stats</h3>
          <div className="flex justify-between w-1/3 h-14 bg-gray-300 rounded-full">
            {selector.map((label) => (
              <button
                key={label}
                onClick={() => setSelected(label)}
                className={`w-14 h-14 text-white text-xl rounded-full flex items-center justify-center 
                    transition-all duration-300 ease-in-out transform
                    ${
                      selected === label
                        ? "scale-125 bg-customGreen"
                        : "bg-gray-600"
                    }`}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="flex justify-around w-full h-64 mt-8 p-8 bg-gray-300 rounded-xl overflow-auto">
            {Object.entries(habitsData).map(([habit, fill], index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center space-y-2"
              >
                <div className="w-6 h-40 bg-customBlack rounded-full flex flex-col items-center justify-end overflow-hidden">
                  <div
                    className={`bg-customGreen rounded-full w-full transition-all duration-300 h-${fill}`}
                  ></div>
                </div>
                <p>{habit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 p-8 overflow-y-auto">
        {goals.map((goal, index) => (
          <div
            key={index}
            className="w-80 h-32 bg-gray-300 rounded-lg flex flex-col items-center justify-center"
          >
            <p className="text-3xl">{goal}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsPage;
