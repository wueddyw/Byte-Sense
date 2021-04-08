import { render } from "@testing-library/react";
import React from "react";
import RegisterDiv from "../RegisterDiv";
import Footer from "../Footer";

export default function Register() {
    return (
        <div>
            <RegisterDiv direction="fade-up" title="Register" fieldName1="First Name"
                fieldName2="Last Name" fieldName3="Email" fieldName4="Password" />
            <Footer />
        </div>
    );
}