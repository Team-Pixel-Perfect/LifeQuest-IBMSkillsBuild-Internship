import React, { useState } from "react";

const StatsPage = () => {
  const today = new Date().getDate();
  const getCurrentWeek = () => {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const monday = new Date(now);

    const dayDiff = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    monday.setDate(now.getDate() + dayDiff);

    const week = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(monday);
      date.setDate(monday.getDate() + i);
      week.push(date);
    }

    return week;
  };
  const currentWeek = getCurrentWeek();
  console.log(currentWeek[0].getMonth());

  const [selected, setSelected] = useState("D");

  const weekdays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  const goals = ["Goal_1", "Goal_2", "Goal_3"];
  const selector = ["D", "W", "M", "Q", "Y"];

  const habits = {
    D: {
      Habit_1: 32,
      Habit_2: 12,
      Habit_3: 40,
      Habit_4: 64,
      Habit_5: 0,
      Habit_6: 56,
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
    <div className="flex bg-customWhite">
      <div className="flex-1 p-8">
        <h3 className="text-2xl mb-4">Your week at a glance!</h3>
        <div className="flex justify-between">
          {currentWeek.map((day, index) => (
            <div key={index} className="flex flex-col items-center space-y-4">
              <div
                className={`w-32 h-36 rounded-xl flex flex-col items-center justify-center ${
                  day.getDate() === today
                    ? "bg-customOrange text-customWhite"
                    : "bg-gray-200 border-4 border-customOrange"
                }`}
              >
                <p className="text-md">{weekdays[index]}</p>
                <p className="text-6xl font-bold">{day.getDate()}</p>
                <p className="text-xs">{months[day.getMonth()]}</p>
              </div>
              <div className="flex flex-col items-center justify-start pt-2 w-14 h-14 bg-customGreen rounded-full hover:w-32 hover:pl-1 hover:border-4 hover:border-customGreen hover:bg-customWhite transition-all duration-300"></div>
            </div>
          ))}
        </div>
        <div className="flex flex-col mt-8">
          <h3 className="text-2xl mb-4">Habit Hustle: How's It Going?</h3>
          <div className="flex justify-between w-1/3 h-14 bg-gray-300 rounded-full">
            {selector.map((label) => (
              <button
                key={label}
                onClick={() => setSelected(label)}
                className={`w-14 h-14 font-bold text-xl rounded-full flex items-center justify-center 
                    transition-all duration-300 ease-in-out transform
                    ${
                      selected === label
                        ? "scale-125 bg-customGreen text-white"
                        : "bg-[#328C3250] text-customBlack"
                    }`}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="flex justify-around w-full h-[380px] mt-8 p-8 border-[3px] border-customGreen rounded-3xl overflow-auto">
            {Object.entries(habitsData).map(([habit, fill], index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center space-y-2"
              >
                <div className="w-6 h-64 bg-[#328C3240] rounded-full flex flex-col items-center justify-end overflow-hidden">
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
      <div className="flex flex-col gap-6 p-8 pt-16 overflow-y-auto">
        {goals.map((goal, index) => (
          <div
            key={index}
            className="flex flex-col pt-2 items-center w-80 h-60 bg-gray-300 rounded-xl"
          >
            <p className="text-2xl">{goal}</p>
            <div className="flex p-4 gap-2">
              <div className="flex w-12 h-12 items-center justify-center rounded-xl border-4 border-customOrange" />
              <div className="flex w-12 h-12 items-center justify-center rounded-xl border-4 border-customOrange" />
              <div className="flex w-12 h-12 items-center justify-center rounded-xl border-4 border-customOrange" />
              <div className="flex w-12 h-12 items-center justify-center rounded-xl border-4 border-customOrange" />
              <div className="flex w-12 h-12 items-center justify-center rounded-xl border-4 border-customOrange" />
            </div>
            <div className="w-64 h-6 bg-[#328C3240] mt-10 rounded-full flex items-center justify-start overflow-hidden">
              <div
                className={`bg-customGreen rounded-full h-full transition-all duration-300 w-${Math.ceil(
                  Math.random() * 64
                )}`}
              />
            </div>
            <p className="text-lg">Progress</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsPage;
