import React from 'react';
import QuoteItem from './QuoteItem';
import quotes from '../quotes.json';
import {useState} from 'react'


const QuoteBox = ( ) => {
    const colors = ["lightcoral", "lightblue", "lightgreen", "lightpurple", "lightpink", "lightyellow", "lightorange", "lightgrey"]
    const randomColors = Math.floor(Math.random() * colors.length - 1)
    const quotesRandom = Math.floor(Math.random() * quotes.length)
    const [nextQuote, setNextQuote] = useState(quotesRandom)
    const changeQuote= () =>{
    const quotesRandom = Math.floor(Math.random() * quotes.length)    
        setNextQuote(quotesRandom)  
    } 

    return (
            <div className={`App ${colors[randomColors]}`}>
                <div className="Card">
                    <span className="quote"><i class="fa-solid fa-quote-left"></i></span>
                    <QuoteItem quote={quotes[nextQuote]} colors={`${colors[randomColors]}`}/>        
                    <button onClick={changeQuote} style={{color:"RGB(255,255,255)"}} className={colors[randomColors]}><strong><i className="fa-solid fa-circle-right"></i></strong></button>  
                </div>    
            </div>
         
    );
};

export default QuoteBox;