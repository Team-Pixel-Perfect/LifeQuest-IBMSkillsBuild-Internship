import React from "react";

function About() {
  return (
    <section className="z-11 overflow-hidden pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px] bg-customWhite dark:bg-customBlack">
      <div className="container mx-auto px-4 pt-5 flex flex-col items-center">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            What LifeQuest Does?
          </h2>
        </div>
        <div className="w-4/5 flex flex-wrap items-center">
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="flex flex-col items-center p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl mb-5">Habit Tracking</h3>
              <img className="w-[300px] rounded-lg" src="/images/1.jpeg" alt="Habit Tracking" />
              <p className="text-gray-500 w-4/6 py-4">
                Monitor habits with customizable categories like reducing plastic use, conserving energy, and practising mindfulness.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="flex flex-col items-center p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl mb-5">Personalised Dashboard</h3>
              <img className="w-[300px] rounded-lg" src="/images/2.jpeg" alt="Personalised Dashboard" />
              <p className="text-gray-500 w-4/6 py-4">
                View progress statistics and insights tailored to your goals, helping you stay on track and motivated.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="flex flex-col items-center p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl mb-5">Goal-Setting</h3>
              <img className="w-[300px] rounded-lg" src="/images/3.jpeg" alt="Goal-Setting" />
              <p className="text-gray-500 w-4/6 py-4">
                Establish incremental targets to achieve your habit objectives and foster sustainable change.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="flex flex-col items-center p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl mb-5">Reminders</h3>
              <img className="w-[300px] rounded-lg" src="/images/4.jpeg" alt="Reminders" />
              <p className="text-gray-500 w-5/6 py-4">
                Receive timely reminders to help build and maintain consistent habits effortlessly for a sustainable future.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="flex flex-col items-center p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl mb-5">Journaling</h3>
              <img className="w-[300px] rounded-lg" src="/images/5.jpeg" alt="Journaling" />
              <p className="text-gray-500 w-5/6 py-4">
                Reflect on your journey and track progress with a built-in journaling tool for deeper insights.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="flex flex-col items-center p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl mb-5">Gamification</h3>
              <img className="w-[300px] rounded-lg" src="/images/6.jpeg" alt="Gamification" />
              <p className="text-gray-500 w-5/6 py-4">
                Earn points, achieve badges, and compete on leaderboards to make habit tracking engaging and fun.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
