import logo from './logo.svg';
import './App.css';
import Books from './Components/books';

function App() {
  return (
    
    <div className="container">
      <h1 style={{color: 'gold', textAlign:'center'}}>New York Times Best-Selling Books</h1>
      <Books/> 
      
    </div>

  );
}

export default App;
