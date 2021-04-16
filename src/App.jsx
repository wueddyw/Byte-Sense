import React, { useEffect } from 'react';

import "aos/dist/aos.css"
import { getFromStorage, getInStorage } from "./utils/storage";


import ExtraStep from './ExtraStep';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      apiResponse: "",
      isLoading: true,
    };
    
  }

  callAPI(){
    fetch("http://localhost:9000/testAPI")
    .then(res=>res.text())
    .then(res=>this.setState({apiResponse:res}))
  }

  componentWillMount(){
    this.callAPI();
    // const token = getFromStorage("the_main_app") // ???
    
    // // Verify token
    // if (token) {
    //   fetch("/api/account/verify?token=" + token)
    //     .then(res => res.json())
    //     .then(json => {
    //       if (json.success) {
    //         this.setState({
    //           token,
    //           isLoading: false
    //         });
    //       } else {
    //         this.setState({
    //           isLoading: false
    //         });
    //       }
    //     })
    // } else {
    //   this.setState({
    //     isLoading: false
    //   });
    // }
  }







  render(){
    // const {
    //   isLoading,
    //   token,
    //   signInError,
    //   signInEmail,
    //   signInPassword,
    //   signUpFirstName,
    //   signUpLastName,
    //   signUpEmail,
    //   signUpPassword
    // } = this.state;

    // if (isLoading) {
    //   return (<div><p>Loading...</p></div>);
    // }

    // if (!token) {
    //   return (
    //     <div>
    //       <p>Sign In</p>
    //       <p>Sign Up</p>
    //     </div>
    //   );
    // }

    return (
        <div>
               <ExtraStep></ExtraStep>
          {/* <p>
            {this.state.apiResponse}
          </p> */}
        </div>
    );
  }


}




export default App;