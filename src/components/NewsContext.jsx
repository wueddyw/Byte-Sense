//NEED npm install axios
import React, {createContext, useEffect, useState} from "react";
import axios from 'axios'

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
    const apiKey = "cef784c444msh3f05f0795666500p1ebc34jsnae2d4bce78e5";

    const [data,setData] = useState();
//language=en&category=technology&
//axios.get(`http://newsapi.org/v2/top-headlines?language=en&category=technology&q=security&pageSize=6&apiKey=${apiKey}`)
//axios.get(`http://newsapi.org/v2/top-headlines?language=en&category=technology&q=security&pageSize=6&apiKey=${apiKey}`)
    useEffect(()=>{
        axios.get(`https://rapidapi.p.rapidapi.com/api/search/NewsSearchAPI?q=cyber%20security&pageNumber=1&pageSize=10&autoCorrect=true&safeSearch=true&withThumbnails=true`
        , {headers: {'x-rapidapi-key': `${apiKey}`,
        "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
        "useQueryString": "true"}})
        .then(response=> {setData(response.data)})
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
    const apiKey = "cef784c444msh3f05f0795666500p1ebc34jsnae2d4bce78e5";

    const [data,setData] = useState();
//language=en&category=technology&
//axios.get(`http://newsapi.org/v2/top-headlines?language=en&category=technology&q=security&pageSize=6&apiKey=${apiKey}`)
//axios.get(`http://newsapi.org/v2/top-headlines?language=en&category=technology&q=security&pageSize=6&apiKey=${apiKey}`)
    useEffect(()=>{
        axios.get(`https://rapidapi.p.rapidapi.com/api/search/NewsSearchAPI?q=cyber%20security&pageNumber=1&pageSize=1&autoCorrect=true&safeSearch=true&withThumbnails=true`
        , {headers: {'x-rapidapi-key': `${apiKey}`,
        "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
        "useQueryString": "true"}})
        .then(response=> {setData(response.data)})
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