import './App.css';
import Header from './components/Header';
import Media from './components/Media';
import SearchContainer from './components/SearchContainer';

function App() {
  return (
    <div className="app">
      <div className="main">
        <Header/>
        <SearchContainer/>
        <Media/>
      </div>
    </div>
  );
}

export default App;
