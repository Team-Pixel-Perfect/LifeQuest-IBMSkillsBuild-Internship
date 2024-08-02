import { Link, useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();

  const handleGetProClick = () => {
   navigate('#');
  };

  const handleStarOnGitHubClick = () => {
    navigate('#');
  };

  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px] bg-customWhite dark:bg-customBlack min-h-screen"
      >
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div
                className="mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl font-bold leading-tight text-customBlack dark:text-customWhite sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  LifeQuest: Cultivate a Better You, <br /> Sustainably!
                </h1>
                <p className="mb-12 text-base leading-relaxed text-customBlack dark:text-customWhite sm:text-lg md:text-xl">
                  Embark on a journey of personal growth and environmental
                  responsibility. Track your habits, set goals, and make a positive
                  impact on your life and the planet.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link to={"signin"}><button
                    onClick={handleGetProClick}
                    className="rounded-sm bg-customGreen px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-customGreen/80"
                  >
                    🔥 Get Started
                  </button></Link>
                  <button
                    onClick={handleStarOnGitHubClick}
                    className="rounded-sm border border-customOrange px-8 py-4 text-base font-semibold text-customOrange duration-300 ease-in-out hover:bg-customOrange hover:text-white"
                  >
                    🤔 Know More...
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="450"
            height="556"
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="277"
              cy="63"
              r="225"
              fill="url(#paint0_linear_25:217)"
            />
            <circle
              cx="17.9997"
              cy="182"
              r="18"
              fill="url(#paint1_radial_25:217)"
            />
            <circle
              cx="76.9997"
              cy="288"
              r="34"
              fill="url(#paint2_radial_25:217)"
            />
            <circle
              cx="325.486"
              cy="302.87"
              r="180"
              transform="rotate(-37.6852 325.486 302.87)"
              fill="url(#paint3_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="184.521"
              cy="315.521"
              r="132.862"
              transform="rotate(114.874 184.521 315.521)"
              stroke="url(#paint4_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="356"
              cy="290"
              r="179.5"
              transform="rotate(-30 356 290)"
              stroke="url(#paint5_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="191.659"
              cy="302.659"
              r="133.362"
              transform="rotate(133.319 191.659 302.659)"
              fill="url(#paint6_linear_25:217)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_25:217"
                x1="-54.5003"
                y1="-178"
                x2="222"
                y2="288"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#328C32" />
                <stop offset="1" stopColor="#328C32" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint1_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
              >
                <stop offset="0.145833" stopColor="#328C32" stopOpacity="0" />
                <stop offset="1" stopColor="#328C32" stopOpacity="0.08" />
              </radialGradient>
              <radialGradient
                id="paint2_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
              >
                <stop offset="0.145833" stopColor="#328C32" stopOpacity="0" />
                <stop offset="1" stopColor="#328C32" stopOpacity="0.08" />
              </radialGradient>
              <linearGradient
                id="paint3_linear_25:217"
                x1="226.775"
                y1="-66.1548"
                x2="292.157"
                y2="351.421"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#328C32" />
                <stop offset="1" stopColor="#328C32" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:217"
                x1="184.521"
                y1="182.159"
                x2="184.521"
                y2="448.882"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#328C32" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_25:217"
                x1="356"
                y1="110"
                x2="356"
                y2="470"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#328C32" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_25:217"
                x1="118.524"
                y1="29.2497"
                x2="166.965"
                y2="338.63"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#328C32" />
                <stop offset="1" stopColor="#328C32" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="364"
            height="201"
            viewBox="0 0 364 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
              stroke="url(#paint0_linear_25:218)"
            />
            <path
              d="M-22.1107 72.3303C5.65994 66.4798 73.397 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
              stroke="url(#paint1_linear_25:218)"
            />
            <path
              d="M-56.1107 72.3303C-28.3401 66.4798 39.3969 64.9086 88.178 105.427C149.155 156.076 167.59 162.093 202.333 166.607C237.076 171.12 275.718 183.657 300.889 212.24"
              stroke="url(#paint2_linear_25:218)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_25:218"
                x1="184.389"
                y1="-17.6976"
                x2="184.389"
                y2="214.009"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#328C32" />
                <stop offset="1" stopColor="#328C32" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_25:218"
                x1="156.389"
                y1="-17.6976"
                x2="156.389"
                y2="214.009"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#328C32" />
                <stop offset="1" stopColor="#328C32" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_25:218"
                x1="122.389"
                y1="-17.6976"
                x2="122.389"
                y2="214.009"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#328C32" />
                <stop offset="1" stopColor="#328C32" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;