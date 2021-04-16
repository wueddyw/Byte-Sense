import { render } from "@testing-library/react";
import React from "react";
import Navbar from "../Navbar";
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
    <>
      <Navbar />
      <div className="wrapper">
        <LoginDiv
          direction="fade-up"
          title="Login"
          fieldName1="Email"
          fieldName2="Password"
        />
        <Footer />
      </div>
    </>
  );
}
