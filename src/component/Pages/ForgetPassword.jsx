
import { Link } from "react-router-dom";
import img from "../../image/image.png";
import img1 from "../../image/logo.png";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function ForgetPassword() {
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
                        Confirm email
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
                        <button className="w-full bg-[#E8457F] hover:bg-pink-600 text-white py-[10px] px-4 rounded-md transition duration-200 cursor-pointer">
                            Confirm
                        </button>  
                    </div>
                </div>
            </div>
        </div>
    );
}