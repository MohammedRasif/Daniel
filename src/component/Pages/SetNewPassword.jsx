import { Link } from "react-router-dom";
import img from "../../image/umbrella-pool-chair.png";
import img1 from "../../image/logo.png";
import { useState } from "react";

export default function SetNewPassword() {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const handlePasswordChange = () => {
        setPasswordsMatch(newPassword === confirmPassword);
    };

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
                    <p className="text-base leading-relaxed">
                        Empowering hotels and restaurants with AI-driven solutions to enhance
                        guest experiences and streamline digital services. Sign in to manage
                        your business and connect with customers effortlessly.
                    </p>
                </div>
            </div>

            {/* Right side - Set New Password Form */}
            <div className="w-full md:w-1/2 flex items-center justify-center">
                <div className="w-full max-w-2xl">
                    <div className="flex justify-center mb-6">
                        <div className="flex items-center">
                            <img src={img1} alt="WePro Logo" className="h-[80px]" />
                        </div>
                    </div>

                    <h1 className="text-3xl font-semibold text-center text-gray-600 mb-8">
                        Set New Password
                    </h1>

                    <div className="space-y-6">
                        <div>
                            <label
                                htmlFor="newPassword"
                                className="block text-sm text-gray-600 mb-1"
                            >
                                New Password
                            </label>
                            <div className="relative">
                                <input
                                    id="newPassword"
                                    type={showNewPassword ? "text" : "password"}
                                    value={newPassword}
                                    onChange={(e) => {
                                        setNewPassword(e.target.value);
                                        handlePasswordChange();
                                    }}
                                    placeholder="Enter new password"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowNewPassword(!showNewPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                >
                                    {showNewPassword ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-gray-500"
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
                                            className="h-5 w-5 text-gray-500"
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

                        <div>
                            <label
                                htmlFor="confirmPassword"
                                className="block text-sm text-gray-600 mb-1"
                            >
                                Confirm Password
                            </label>
                            <div className="relative">
                                <input
                                    id="confirmPassword"
                                    type={showConfirmPassword ? "text" : "password"}
                                    value={confirmPassword}
                                    onChange={(e) => {
                                        setConfirmPassword(e.target.value);
                                        handlePasswordChange();
                                    }}
                                    placeholder="Confirm new password"
                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent ${!passwordsMatch && confirmPassword
                                            ? "border-red-500"
                                            : "border-gray-300"
                                        }`}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                >
                                    {showConfirmPassword ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-gray-500"
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
                                            className="h-5 w-5 text-gray-500"
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
                            {!passwordsMatch && confirmPassword && (
                                <p className="text-red-500 text-sm mt-1">
                                    Passwords do not match
                                </p>
                            )}
                        </div>

                        <button
                            disabled={!passwordsMatch || !newPassword || !confirmPassword}
                            className={`w-full py-[10px] px-4 rounded-md transition duration-200 cursor-pointer bg-[#E8457F] hover:bg-pink-600 text-white`}
                        >
                            Confirm
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}