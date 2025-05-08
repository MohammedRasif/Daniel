
import { Link } from "react-router-dom";
import img from "../../image/image.png";
import img1 from "../../image/logo.png";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex h-screen">
            {/* Left side - Image */}
            <div className="hidden md:block md:w-1/2 h-screen relative">
                <img
                    src={img}
                    className="h-full w-full object-cover object-center"
                    alt="Background"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-8 text-white rounded-t-4xl text-center">
                    <h2 className="text-3xl font-bold mb-2">
                        Welcome to We<span className="text-pink-500">pro</span>!
                    </h2>
                    <p className="text-base leading-relaxed ">
                        Empowering hotels and restaurants with AI-driven solutions to enhance
                        guest experiences and streamline digital services. Sign in to manage
                        your business and connect with customers effortlessly.
                    </p>
                </div>
            </div>

            {/* Right side - Login Form */}
            <div className="w-full md:w-1/2 flex items-center justify-center ">
                <div className="w-full max-w-2xl">
                    <div className="flex justify-center mb-6">
                        <div className="flex items-center">
                            <img src={img1} alt="" className="h-[80px]" />
                        </div>
                    </div>

                    <h1 className="text-3xl font-semibold text-center text-gray-600 mb-8">
                        Welcome back!
                    </h1>

                    <div className="space-y-6">
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm text-gray-600 mb-1"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="example@gmail.com"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm text-gray-600 mb-1"
                            >
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent pr-10"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                                >
                                    {showPassword ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                                            <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                                            <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                                            <line x1="2" x2="22" y1="2" y2="22" />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                            <circle cx="12" cy="12" r="3" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    id="remember"
                                    className="h-4 w-4 text-pink-500 focus:ring-pink-500 border-gray-300 rounded"
                                />
                                <label
                                    htmlFor="remember"
                                    className="text-sm font-medium text-gray-700"
                                >
                                    Remember me
                                </label>
                            </div>
                            <Link
                                to="/forgot-password"
                                className="text-sm text-pink-500 hover:text-pink-600"
                            >
                                Forgot Password?
                            </Link>
                        </div>

                        <button className="w-full bg-[#E8457F] hover:bg-pink-600 text-white py-[10px] px-4 rounded-md transition duration-200 cursor-pointer">
                            Sign in
                        </button>

                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">OR</span>
                            </div>
                        </div>

                        <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 transition duration-200 cursor-pointer">
                            <FcGoogle size={28} />

                            Continue with Google
                        </button>

                        <p className="text-center text-sm text-gray-600">
                            Don't have an account?{" "}
                            <Link
                                to="/signup"
                                className="text-pink-500 hover:text-pink-600"
                            >
                                Create now
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}