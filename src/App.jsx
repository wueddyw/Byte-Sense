import React, { useEffect } from 'react';
import "aos/dist/aos.css"


import ExtraStep from './ExtraStep';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      apiResponse: "",
      isLoading: true,
    };
    
  }

  render(){

    return (
        <div>
          <ExtraStep></ExtraStep>
        </div>
    );
  }
}

export default App;
