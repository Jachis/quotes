
const QuoteItem = (quote, refresh) => {

    return (
        <div>
        
            <p><span className="quote">"</span>{quote.quote.quote}</p>
            <span>{quote.quote.author}</span>
            <button onClick={[refresh]} className="button">next</button>            
        </div>
    );
};


export default QuoteItem;