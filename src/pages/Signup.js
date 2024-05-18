import React from "react";
import { Link } from "react-router-dom";
import signUpImg from "../assets/signup.png"
import Template from "../components/Template"

const Signup = ({setIsLoggedIn}) =>{
    return (
        <Template
            title="Join the millioms learning to code with StudyNotion for free."
            desc1="Build skills for today , tomorrow and beyond."
            desc2="Education to future-proof your carrer."
            image={signUpImg}
            formtype="signup"
            setIsLoggedIn={setIsLoggedIn}
       />
    );
}

export default Signup;