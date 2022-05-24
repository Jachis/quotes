
const QuoteItem = ({quote, colors}) => {

    return (
        <div>
            <span className="colors">{quote.quote}</span>
            <div className="author colors">{quote.author}</div>
        </div>
    );
};


export default QuoteItem;