import React from 'react';
import QuoteItem from './QuoteItem';
import quotes from '../quotes.json'

const QuoteBox = () => {
    const quotesRandom = Math.floor(Math.random() * quotes.length - 1)
    const refresh = () => { 
        quotes = quotes[quotesRandom]
    }
    return (
        <div>
            <div className="Card">
                <QuoteItem quote={quotes[quotesRandom]} refresh={refresh}/>        

            </div>
        </div>
    );
};

export default QuoteBox;