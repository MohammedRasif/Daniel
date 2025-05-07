"use client";

import React, { useState, useRef } from "react";
import { SketchPicker } from "react-color";

// Custom Card Component
const Card = ({ children, className }) => (
    <div className={` ${className}`}>
        {children}
    </div>
);

// Custom CardHeader Component
const CardHeader = ({ children }) => (
    <div className="px-6 py-4 border-b border-gray-300">{children}</div>
);

// Custom CardTitle Component
const CardTitle = ({ children }) => (
    <h2 className="text-xl font-semibold text-gray-800">{children}</h2>
);

// Custom CardContent Component
const CardContent = ({ children, className }) => (
    <div className={`p-6 ${className}`}>{children}</div>
);

// Custom Input Component
const Input = ({ id, placeholder, value, onChange, className }) => (
    <input
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-[#20325A] ${className}`}
    />
);

// Custom Label Component
const Label = ({ htmlFor, children }) => (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700">
        {children}
    </label>
);

// Custom Button Component
const Button = ({ children, onClick, className, variant = "default" }) => {
    const baseStyles = "px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2";
    const variantStyles =
        variant === "outline"
            ? "border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-[#20325A]"
            : "bg-[#EB5A8E] text-white hover:bg-[#EB5A8E] focus:ring-[#EB5A8E] cursor-pointer";

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variantStyles} ${className}`}
        >
            {children}
        </button>
    );
};

const BrandSetUp = () => {
    // State for form inputs
    const [companyName, setCompanyName] = useState("");
    const [profileName, setProfileName] = useState("");
    const [hotelLocation, setHotelLocation] = useState("");

    // State for social media links
    const [facebookLink, setFacebookLink] = useState("");
    const [instagramLink, setInstagramLink] = useState("");
    const [twitterLink, setTwitterLink] = useState("");
    const [linkedinLink, setLinkedinLink] = useState("");
    const [websiteLink, setWebsiteLink] = useState("");

    // State for file uploads
    const [companyLogo, setCompanyLogo] = useState(null);
    const [companyLogoPreview, setCompanyLogoPreview] = useState("");
    const [profilePicture, setProfilePicture] = useState(null);
    const [profilePicturePreview, setProfilePicturePreview] = useState("");

    // State for colors
    const [mainColor, setMainColor] = useState("#ff0000");
    const [backgroundColor, setBackgroundColor] = useState("#ffffff");
    const [headingTextColor, setHeadingTextColor] = useState("#000000");
    const [textColor, setTextColor] = useState("#000000");

    // State for color picker visibility
    const [showMainColorPicker, setShowMainColorPicker] = useState(false);
    const [showBackgroundColorPicker, setShowBackgroundColorPicker] = useState(false);
    const [showHeadingTextColorPicker, setShowHeadingTextColorPicker] = useState(false);
    const [showTextColorPicker, setShowTextColorPicker] = useState(false);

    // Refs for file inputs
    const companyLogoInputRef = useRef(null);
    const profilePictureInputRef = useRef(null);

    // Handle file uploads
    const handleCompanyLogoChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setCompanyLogo(file);
            setCompanyLogoPreview(URL.createObjectURL(file));
        }
    };

    const handleProfilePictureChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setProfilePicture(file);
            setProfilePicturePreview(URL.createObjectURL(file));
        }
    };

    return (
        <div className=" ">
            <h1 className="text-3xl font-semibold mb-8 text-gray-800">Brand Set Up</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Basic Information Section */}
                <Card>
                    <CardHeader>
                        <CardTitle>Basic information's</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="companyName">Company name</Label>
                            <Input
                                id="companyName"
                                placeholder="Enter here"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                                className="bg-white"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="companyLogo">Upload company logo</Label>
                            <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-md h-11">
                                <Button
                                    variant="outline"
                                    onClick={() => companyLogoInputRef.current?.click()}
                                    className="w-32 bg-gray-200 h-8 ml-2 cursor-pointer"
                                >
                                    <h1 className="-mt-[5px]">Choose file</h1>
                                </Button>
                                <span className="text-sm text-gray-500 truncate">
                                    {companyLogo ? companyLogo.name : ""}
                                </span>
                                <input
                                    ref={companyLogoInputRef}
                                    type="file"
                                    id="companyLogo"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleCompanyLogoChange}
                                />
                            </div>
                           
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="profileName">Profile name</Label>
                            <Input
                                id="profileName"
                                placeholder="Enter here"
                                value={profileName}
                                onChange={(e) => setProfileName(e.target.value)}
                                className="bg-white"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="profilePicture">Upload Profile picture</Label>
                            <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-md h-11">
                                <Button
                                    variant="outline"
                                    onClick={() => profilePictureInputRef.current?.click()}
                                    className="w-32 bg-gray-200 h-8 ml-2 cursor-pointer"
                                >
                                    <h1 className="-mt-[5px]">Choose file</h1>
                                </Button>
                                <span className="text-sm text-gray-500 truncate">
                                    {profilePicture ? profilePicture.name : ""}
                                </span>
                                <input
                                    ref={profilePictureInputRef}
                                    type="file"
                                    id="profilePicture"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleProfilePictureChange}
                                />
                            </div>
                            
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="hotelLocation">Hotel Location</Label>
                            <Input
                                id="hotelLocation"
                                placeholder="Enter here"
                                value={hotelLocation}
                                onChange={(e) => setHotelLocation(e.target.value)}
                                className="bg-white"
                            />
                        </div>
                    </CardContent>
                </Card>

                {/* Media Links Section */}
                <Card>
                    <CardHeader>
                        <CardTitle>Media links</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="facebookLink">Enter facebook link</Label>
                            <Input
                                id="facebookLink"
                                placeholder="Enter here"
                                value={facebookLink}
                                onChange={(e) => setFacebookLink(e.target.value)}
                                className="bg-white"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="instagramLink">Enter instagram link</Label>
                            <Input
                                id="instagramLink"
                                placeholder="Enter here"
                                value={instagramLink}
                                onChange={(e) => setInstagramLink(e.target.value)}
                                className="bg-white"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="twitterLink">Enter Twitter link</Label>
                            <Input
                                id="twitterLink"
                                placeholder="Enter here"
                                value={twitterLink}
                                onChange={(e) => setTwitterLink(e.target.value)}
                                className="bg-white"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="linkedinLink">Enter LinkedIn link</Label>
                            <Input
                                id="linkedinLink"
                                placeholder="Enter here"
                                value={linkedinLink}
                                onChange={(e) => setLinkedinLink(e.target.value)}
                                className="bg-white"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="websiteLink">Hotel Website link</Label>
                            <Input
                                id="websiteLink"
                                placeholder="Ex: www.domain.com"
                                value={websiteLink}
                                onChange={(e) => setWebsiteLink(e.target.value)}
                                className="bg-white"
                            />
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Brand Color Section */}
            <Card className="mt-8">
                <CardHeader>
                    <CardTitle>Brand Colour Set up</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Main Color */}
                        <div className="space-y-2">
                            <Label>Main Colour :</Label>
                            <div className="relative">
                                <div
                                    className="w-full h-10 bg-white border border-gray-300 rounded cursor-pointer flex items-center justify-between px-3"
                                    onClick={() => setShowMainColorPicker(!showMainColorPicker)}
                                >
                                    <span className="text-sm">Click to choose</span>
                                    <div
                                        className="w-6 h-6 rounded-full border border-gray-300"
                                        style={{ backgroundColor: mainColor }}
                                    ></div>
                                </div>
                                {showMainColorPicker && (
                                    <div className="absolute z-10 mt-2">
                                        <SketchPicker
                                            color={mainColor}
                                            onChange={(color) => setMainColor(color.hex)}
                                            disableAlpha={false}
                                        />
                                        <div
                                            className="fixed inset-0 z-[-1]"
                                            onClick={() => setShowMainColorPicker(false)}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Background Color */}
                        <div className="space-y-2">
                            <Label>Background Colour :</Label>
                            <div className="relative">
                                <div
                                    className="w-full h-10 bg-white border border-gray-300 rounded cursor-pointer flex items-center justify-between px-3"
                                    onClick={() =>
                                        setShowBackgroundColorPicker(!showBackgroundColorPicker)
                                    }
                                >
                                    <span className="text-sm">Click to choose</span>
                                    <div
                                        className="w-6 h-6 rounded-full border border-gray-300"
                                        style={{ backgroundColor: backgroundColor }}
                                    ></div>
                                </div>
                                {showBackgroundColorPicker && (
                                    <div className="absolute z-10 mt-2">
                                        <SketchPicker
                                            color={backgroundColor}
                                            onChange={(color) => setBackgroundColor(color.hex)}
                                            disableAlpha={false}
                                        />
                                        <div
                                            className="fixed inset-0 z-[-1]"
                                            onClick={() => setShowBackgroundColorPicker(false)}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Heading Text Color */}
                        <div className="space-y-2">
                            <Label>Heading Text Colour :</Label>
                            <div className="relative">
                                <div
                                    className="w-full h-10 bg-white border border-gray-300 rounded cursor-pointer flex items-center justify-between px-3"
                                    onClick={() =>
                                        setShowHeadingTextColorPicker(!showHeadingTextColorPicker)
                                    }
                                >
                                    <span className="text-sm">Click to choose</span>
                                    <div
                                        className="w-6 h-6 rounded-full border border-gray-300"
                                        style={{ backgroundColor: headingTextColor }}
                                    ></div>
                                </div>
                                {showHeadingTextColorPicker && (
                                    <div className="absolute z-10 mt-2">
                                        <SketchPicker
                                            color={headingTextColor}
                                            onChange={(color) => setHeadingTextColor(color.hex)}
                                            disableAlpha={false}
                                        />
                                        <div
                                            className="fixed inset-0 z-[-1]"
                                            onClick={() => setShowHeadingTextColorPicker(false)}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Text Color */}
                        <div className="space-y-2">
                            <Label>Text colour :</Label>
                            <div className="relative">
                                <div
                                    className="w-full h-10 bg-white border border-gray-300 rounded cursor-pointer flex items-center justify-between px-3"
                                    onClick={() => setShowTextColorPicker(!showTextColorPicker)}
                                >
                                    <span className="text-sm">Click to choose</span>
                                    <div
                                        className="w-6 h-6 rounded-full border border-gray-300"
                                        style={{ backgroundColor: textColor }}
                                    ></div>
                                </div>
                                {showTextColorPicker && (
                                    <div className="absolute z-10 mt-2">
                                        <SketchPicker
                                            color={textColor}
                                            onChange={(color) => setTextColor(color.hex)}
                                            disableAlpha={false}
                                        />
                                        <div
                                            className="fixed inset-0 z-[-1]"
                                            onClick={() => setShowTextColorPicker(false)}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="mt-8 flex justify-center ">
                <Button className="px-8">Save</Button>
            </div>
        </div>
    );
};

export default BrandSetUp;