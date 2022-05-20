import './App.css';
import QuoteBox from './components/QuoteBox';


function App() {
  const colors = ["lightcoral", "lightblue", "lightgreen", "lightpurple", "lightpink", "lightyellow", "lightorange", "lightgrey"]
  const randomColors = Math.floor(Math.random() * colors.length - 1)

  return (
    <body>
      <header className={`App ${colors[randomColors]}`}>
        <QuoteBox />
      </header>  
    </body>

  );
}

export default App;
