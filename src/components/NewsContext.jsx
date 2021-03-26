//NEED npm install axios
import React, {createContext, useEffect, useState} from "react";
import axios from 'axios'

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
    const apiKey = "a41f2ffe759a467783cdb7fee9522a6a";

    const [data,setData] = useState();
//language=en&category=technology&
//axios.get(`http://newsapi.org/v2/top-headlines?language=en&category=technology&q=security&pageSize=6&apiKey=${apiKey}`)
//axios.get(`http://newsapi.org/v2/top-headlines?language=en&category=technology&q=security&pageSize=6&apiKey=${apiKey}`)
    useEffect(()=>{
        axios.get(`http://newsapi.org/v2/top-headlines?language=en&category=technology&q=security&pageSize=6`
        , {headers: {'X-Api-Key': `${apiKey}`}})
        .then(response=> setData(response.data))
        .catch(error=>console.log(error));
    }, []);

    return(
        <>
            <NewsContext.Provider value={{data}}>
                {props.children}
            </NewsContext.Provider>

        </>
    )
}


export const NewsContextProviderHome = (props) => {
    const apiKey = "a41f2ffe759a467783cdb7fee9522a6a";

    const [data,setData] = useState();
//language=en&category=technology&
//axios.get(`http://newsapi.org/v2/top-headlines?language=en&category=technology&q=security&pageSize=6&apiKey=${apiKey}`)
//axios.get(`http://newsapi.org/v2/top-headlines?language=en&category=technology&q=security&pageSize=6&apiKey=${apiKey}`)
    useEffect(()=>{
        axios.get(`http://newsapi.org/v2/top-headlines?language=en&category=technology&q=security&pageSize=1`
        , {headers: {'X-Api-Key': `${apiKey}`}})
        .then(response=> setData(response.data))
        .catch(error=>console.log(error));
    }, []);

    return(
        <>
            <NewsContext.Provider value={{data}}>
                {props.children}
            </NewsContext.Provider>

        </>
    )
}