import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useNavigate } from "react-router-dom";


const SignUpForm = ({ setIsLoggedIn }) => {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [accountType, setAccountType] = useState("student");

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }))
    }

    function submitHandler(event) {
        event.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not Match.");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created.");

        const finalData = {
            ...formData,
            accountType
        }
        console.log("Printing Final Data ");
        console.log(finalData);

        navigate('/dashboard');
    }

    return (
        <div >

            {/* Student-Instructor-Tab */}
            <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max">

                <button className={`${accountType === "student"
                    ?"bg-richblack-900 text-richblack-5"
                    :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`
                    }
                    onClick={() => setAccountType("student")}>
                    Student
                </button>
                <button className={`${accountType === "instructor"
                    ?"bg-richblack-900 text-richblack-5"
                    :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`
                    }
                    onClick={() => setAccountType("instructor")}>
                    Instructor
                </button>

            </div>

            <form onSubmit={submitHandler}>
                {/* first name & last name */}
                <div className="flex gap-x-4 mt-[20px]">
                    <label className="w-full">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                            First Name <sup className="text-pink-200">*</sup>
                        </p>
                        <input className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                            required
                            type="text"
                            name="firstName"
                            onChange={changeHandler}
                            placeholder="Enter First Name"
                            value={formData.firstName}
                        />
                    </label>

                    <label className="w-full">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                            Last Name <sup className="text-pink-200">*</sup>
                        </p>
                        <input className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                            required
                            type="text"
                            name="lastName"
                            onChange={changeHandler}
                            placeholder="Enter Last Name"
                            value={formData.lastName}
                        />
                    </label>
                </div>
                {/* Email Adress */}
                <div className="mt-[20px]">
                    <label className="w-full  mt-[20px]">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                            Enter Email Address<sup className="text-pink-200">*</sup>
                        </p>
                        <input className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                            required
                            type="email"
                            name="email"
                            onChange={changeHandler}
                            placeholder="Enter Email"
                            value={formData.email}
                        />
                    </label>
                </div>

                {/* createPassword & confirm password */}
                <div className=" w-full flex gap-x-4 mt-[20px]">

                    <label className="relative w-full">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                            Create Password <sup className="text-pink-200">*</sup>
                        </p>
                        <input className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                            required
                            type={showPassword ? ("text") : ("password")}
                            name="password"
                            onChange={changeHandler}
                            placeholder="Enter Password "
                            value={formData.password}
                        />
                        <span className="absolute right-3 top-[38px] cursor-pointer"
                            onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ?
                                (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />) :
                                (<AiOutlineEye fontSize={24} fill="#AFB2BF" />)}
                        </span>
                    </label>

                    <label className="relative w-full">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                            Confirm Password <sup className="text-pink-200">*</sup>
                        </p>
                        <input className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                            required
                            type={showConfirmPassword ? ("text") : ("password")}
                            name="confirmPassword"
                            onChange={changeHandler}
                            placeholder="Confirm Password "
                            value={formData.confirmPassword}
                        />
                        <span className="absolute right-3 top-[38px] cursor-pointer"
                            onClick={() => setShowConfirmPassword((prev) => !prev)}>
                            {showConfirmPassword ?
                                (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />) :
                                (<AiOutlineEye fontSize={24} fill="#AFB2BF" />)}
                        </span>
                    </label>

                </div>

                <button className="w-full mt-6  text-center bg-yellow-50 rounded-[8px] font-medium text-black px-[12px] py-[8px]">
                    Create Account
                </button>

            </form>

        </div>
    );
}

export default SignUpForm;