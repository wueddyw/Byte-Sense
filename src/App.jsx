
import React, { useEffect } from 'react';

import "aos/dist/aos.css"


import ExtraStep from './ExtraStep';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={apiResponse:""}
  }

  callAPI(){
    fetch("http://localhost:9000/testAPI")
    .then(res=>res.text())
    .then(res=>this.setState({apiResponse:res}))
  }

  componentWillMount(){
    this.callAPI();
  }







  render(){


    return (
        <div>
               <ExtraStep></ExtraStep>
          <p>
            {this.state.apiResponse}
          </p>
        </div>
    );
  }


}




export default App;
