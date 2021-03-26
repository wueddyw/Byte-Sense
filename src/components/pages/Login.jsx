import { render } from "@testing-library/react";
import React from "react";
import LoginDiv from "../LoginDiv";
import Footer from "../Footer";

// class Login extends Component {
//     constructor() {
//         super();
//         this.state = {
//             token: "",
//             signUpError: "",
//             signInError: "",
//             signInEmail: "",
//             signInPassword: "",
//             signUpFirstName: "",
//             signUpLastName: "",
//             signUpEmail: "",
//             signUpPassword: ""
//         }
//     }
// }

export default function Login() {
    return (
        <div className="wrapper">
            <LoginDiv direction="fade-up" title="Login" fieldName1="email" fieldName2="Password" />
            <Footer />
        </div>
    );
}
