import { FaGoogle } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate  } from 'react-router-dom';

const SigninPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <section className="relative z-10 overflow-hidden pb-16 pt-10 md:pb-20 lg:pb-28 lg:pt-12 bg-gray-100 dark:bg-[#1A1A1A]">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div className="shadow-lg mx-auto max-w-[500px] rounded-lg bg-white dark:bg-[#292929] px-6 py-8">
                                <div className="flex items-center justify-between pb-5">
                                    <button onClick={() => navigate('/')} className="">
                                        <FaArrowLeftLong />
                                    </button>
                                    <img src="/logo.png" alt="logo" className="w-20 mx-auto" />
                                </div>

                                <h3 className="mb-3 text-center text-2xl font-bold text-customBlack dark:text-customWhite sm:text-3xl">
                                    Sign in to your account
                                </h3>
                                <p className="mb-11 text-center text-base font-medium text-customBlack dark:text-customWhite">
                                    Login to your account for a faster checkout.
                                </p>
                                {/* Google Sign In Button */}
                                <button className="border dark:text-customWhite dark:shadow-md mb-6 flex w-full items-center justify-center rounded-md border bg-[#f8f8f8] dark:bg-[#2C303B] px-6 py-3 text-base text-customBlack outline-none transition-all duration-300 hover:border-customBlack hover:bg-customBlack hover:text-customWhite dark:hover:border-customBlack dark:hover:bg-customBlack dark:hover:text-customWhite">
                                    <span className="mr-3">
                                        <FaGoogle />
                                    </span>
                                    Sign in with Google
                                </button>
                                {/* GitHub Sign In Button */}
                                <button className="border dark:text-customWhite dark:shadow-md mb-6 flex w-full items-center justify-center rounded-md border bg-[#f8f8f8] dark:bg-[#2C303B] px-6 py-3 text-base text-customBlack outline-none transition-all duration-300 hover:border-customBlack hover:bg-customBlack hover:text-customWhite dark:hover:border-customBlack dark:hover:bg-customBlack dark:hover:text-customWhite">
                                    <span className="mr-3">
                                        <IoLogoGithub />
                                    </span>
                                    Sign in with GitHub
                                </button>
                                {/* Divider */}
                                <div className="mb-8 flex items-center justify-center">
                                    <span className="hidden h-[1px] w-full max-w-[70px] bg-customBlack/50 sm:block"></span>
                                    <p className="w-full px-5 text-center text-base font-medium text-customBlack dark:text-customWhite">
                                        or sigin with your Email
                                    </p>
                                    <span className="hidden h-[1px] w-full max-w-[70px] bg-customBlack/50 sm:block"></span>
                                </div>
                                <form>
                                    <div className="mb-8">
                                        <label
                                            htmlFor="email"
                                            className="mb-3 block text-sm text-customBlack dark:text-customWhite"
                                        >
                                            Your Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Enter your Email"
                                            className="border w-full rounded-md border-customBlack bg-[#f8f8f8] dark:bg-[#2C303B] px-6 py-3 text-base text-customBlack dark:text-customWhite outline-none transition-all duration-300 focus:border-customGreen dark:focus:border-customGreen"
                                        />
                                    </div>
                                    <div className="mb-8">
                                        <label
                                            htmlFor="password"
                                            className="mb-3 block text-sm text-customBlack dark:text-customWhite"
                                        >
                                            Your Password
                                        </label>
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Enter your Password"
                                            className="border w-full rounded-md border-customBlack bg-[#f8f8f8] dark:bg-[#2C303B] px-6 py-3 text-base text-customBlack dark:text-customWhite outline-none transition-all duration-300 focus:border-customOrange dark:focus:border-customOrange"
                                        />
                                    </div>
                                    <div className="mb-8 flex flex-col justify-between sm:flex-row sm:items-center">
                                        <div className="mb-4 sm:mb-0">
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                name="checkbox"
                                                id="checkboxLabelOne"
                                                className="mr-3 h-5 w-5 accent-primary"
                                            />
                                            <label
                                                htmlFor="checkboxLabelOne"
                                                className="text-sm font-medium text-body-color"
                                            >
                                                Keep me signed in
                                            </label>
                                        </div>
                                        </div>
                                        <div>
                                            <a
                                                href="#0"
                                                className="text-sm font-medium text-customOrange hover:underline"
                                            >
                                                Forgot Password?
                                            </a>
                                        </div>
                                    </div>
                                    <div className="mb-6">
                                        <button className="flex w-full items-center justify-center rounded-md bg-customGreen px-9 py-4 text-base font-medium text-customWhite duration-300 hover:bg-customGreen/90">
                                            Sign in
                                        </button>
                                    </div>
                                </form>
                                <p className="text-center text-base font-medium text-customBlack dark:text-customWhite">
                                    Don’t you have an account?{' '}
                                    <Link to="/signup" className="text-customOrange hover:underline">
                                        Sign up
                                    </Link>
                                </p>
                                <p className="text-center text-base font-medium text-customBlack dark:text-customWhite">
                                    Back to{" "}
                                    <Link to="/" className="text-customOrange hover:underline">
                                        Home
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SigninPage;
