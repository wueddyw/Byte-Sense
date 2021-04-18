import React from 'react';
import Footer from "./Footer";
import './pages/News.css';
import  { useState } from 'react';
 
import { NewsContextProvider } from './NewsContext';
import { GetNews } from './GetNews';

import newsNoLoadImage from'./pages/News Components/Images/noLoad.jpg';


function NewsArticle({data,articleCount}){
    //create the bad word list
    //const badWordList = ["SDAFGADFGSDFG"];
    const badWordList = [""];
    //make sure the bad world list is all lowercase

    
    let i;
    for(i=0;i<badWordList.length;i++){
        badWordList[i]=badWordList[i].toLowerCase();
    }

    function containsInappropriateContent(title, body){
        //convert the title and body to lower case so they can be compared to the lowercaase bad words
        const lowercaseTitle = title.toLowerCase();
        const lowercaseBody = body.toLowerCase();
        const titleWordArray =lowercaseTitle.match(/\b(\w+)\b/g);
        const bodyWordArray =lowercaseBody.match(/\b(\w+)\b/g);

        //look for bad words in the title and body of the article
        let f;
        for(f=0;f<badWordList.length;f++){
            let g;
            for(g=0;g<titleWordArray.length;g++){
                if(badWordList[f]===titleWordArray[g]){
                    console.log("BAD WORD FOUND: " + badWordList[f]);
                    return true;
                }
            }
            for(g=0;g<bodyWordArray.length;g++){
                if(badWordList[f]===bodyWordArray[g]){
                    // console.log("BAD WORD FOUND: " + badWordList[f]);
                    return true;
                }
            
            }
        }

        return false;
    }


    return(
        <>

            <div className= {"news-article-container " + (articleCount%2==0?"":"news-article-container-hflip")}>
                <div className= "news-article-container-item">
                    <div className="news-page-item-header">
                        {data.title}
                    </div>
                    <div className="news-page-item-body">
                        {data.description}
                    </div>
                </div>
                <div className= "news-article-container-item">
                <div className="news-page-item-image-div">
                    <img className="news-page-item-image" src={data.image.url ? data.image.url : newsNoLoadImage} alt="news image not loaded"/>
                    </div>
                </div>
            </div>

        </>
    );
}

export default NewsArticle;