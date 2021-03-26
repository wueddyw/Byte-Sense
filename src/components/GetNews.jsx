import React , {useContext} from "react";
import {NewsContext} from  "./NewsContext";
import NewsArticle from "./NewsArticle";
import  { useState } from 'react';

export function GetNews(props){

    const {data} = useContext(NewsContext);
    console.log("data");
    console.log(data);

    const [articleCount, setArticleCount] = useState(0);

    return(
        <>

            <div>
                {data ? data.articles.map((news,index)=>  <NewsArticle data={news} articleCount={index} key={news.url}/>) : "Loading"}
            </div>

        </>
    );
}