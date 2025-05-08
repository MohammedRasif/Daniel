import img from "../../image/umbrella-pool-chair.png";
import img1 from "../../image/logo.png";
import { useState, useEffect, useRef } from "react";

export default function VerificationForget() {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [countdown, setCountdown] = useState(60);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const inputs = useRef([]);

    // Countdown effect
    useEffect(() => {
        if (countdown > 0) {
            const timer = setInterval(() => {
                setCountdown((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(timer);
        } else {
            setIsButtonDisabled(false);
        }
    }, [countdown]);

    // Start countdown and disable button
    const startCountdown = () => {
        setCountdown(60);
        setIsButtonDisabled(true);
    };

    // Handle resend OTP
    const handleResendOtp = () => {
        if (countdown === 0) {
            setOtp(["", "", "", ""]); // Reset OTP
            localStorage.removeItem("otp"); // Clear stored OTP
            startCountdown(); // Restart countdown
            // Simulate sending new OTP (you can replace this with actual API call)
            console.log("New OTP sent");
        }
    };

    // Handle input change for OTP fields
    const handleInputChange = (e, index) => {
        const value = e.target.value;
        if (!/^\d?$/.test(value)) return; // Only allow digits

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Save OTP to localStorage whenever the user enters a value
        localStorage.setItem("otp", newOtp.join(""));

        // Move to next input field if filled
        if (value && index < 3) {
            inputs.current[index + 1].focus();
        }
    };

    // Handle backspace (moving to previous input)
    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputs.current[index - 1].focus();
        }
    };

    // Handle paste event
    const handlePaste = (e) => {
        const pasteData = e.clipboardData.getData("text").slice(0, 4).split(""); // Take first 4 digits
        if (!/^\d{1,4}$/.test(pasteData.join(""))) return; // Validate only digits

        const newOtp = [...otp];
        pasteData.forEach((digit, i) => {
            newOtp[i] = digit;
        });
        setOtp(newOtp);
    };

    // Handle confirm button click
    const handleConfirm = () => {
        if (!isButtonDisabled) {
            startCountdown();
            // Add your confirmation logic here (e.g., API call to verify OTP)
            console.log("OTP Confirmed:", otp.join(""));
        }
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

            {/* Right side - Verification Form */}
            <div className="w-full md:w-1/2 flex items-center justify-center">
                <div className="w-full max-w-2xl">
                    <div className="flex justify-center mb-6">
                        <div className="flex items-center">
                            <img src={img1} alt="WePro Logo" className="h-[80px]" />
                        </div>
                    </div>

                    <h1 className="text-3xl font-semibold text-center text-gray-600 mb-4">
                        Verify your email address
                    </h1>

                    <p className="text-center text-gray-500 mb-6">
                        We’ve sent a verification code to <span className="font-semibold">example@gmail.com</span>
                    </p>

                    <div className="flex justify-center space-x-4 mb-6">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength="1"
                                value={digit}
                                onChange={(e) => handleInputChange(e, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                onPaste={handlePaste}
                                ref={(el) => (inputs.current[index] = el)}
                                className="w-12 h-12 text-center text-2xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                            />
                        ))}
                    </div>

                    <button
                        onClick={handleConfirm}
                        disabled={isButtonDisabled || countdown > 0}
                        className={`w-full py-[10px] px-4 rounded-md transition duration-200  mb-4 ${
                            (isButtonDisabled || countdown > 0)
                                ? " bg-[#E8457F] hover:bg-pink-600 text-white cursor-pointer"
                                : "bg-gray-400 text-white cursor-not-allowed"
                        }`}
                    >
                        Confirm
                    </button>

                    <p className="text-center text-gray-500 text-sm">
                        Didn’t receive an email? Please check your spam folder or{" "}
                        <span
                            onClick={handleResendOtp}
                            className={`${
                                countdown === 0
                                    ? "text-blue-500 hover:underline cursor-pointer"
                                    : "text-gray-400 cursor-not-allowed"
                            }`}
                        >
                            request another code
                        </span>{" "}
                        {countdown > 0 && (
                            <span>in {countdown} seconds</span>
                        )}
                    </p>
                </div>
            </div>
        </div>
    );
}