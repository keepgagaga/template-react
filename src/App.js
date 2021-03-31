import './App.css';
import Header from './components/header';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <Header></Header>
        <Home></Home>
      </header>
    </div>
  );
}

export default App;
