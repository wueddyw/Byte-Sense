import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD


ReactDOM.render(<App />, document.getElementById('root'));
=======
import {BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
        <Router>
            <App />
        </Router>, 
        document.getElementById('root')
);
>>>>>>> fd73128da5ff9ba83c8a231f7fc1938032a8fa57

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
