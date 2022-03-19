import './App.css';
import Dashboard from './components/dashboard';
import Navigation from './components/navigation';
import "./static/style.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dashboard />
        <Navigation />
      </header>
    </div>
  );
}

export default App;
