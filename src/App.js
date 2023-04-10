import './App.css';
import News from './components/News';
import Quotations from './components/Quotations';
import Advertising from './components/Advertising';
import SearchHeaders from './components/SearchHeaders';
import Search from './components/Search';
import SearchIcon from './components/SearchIcon';
import Widgets from './components/Widgets';

function App() {
  return (
    <div className="App">
      <div className='actual-inform-section'>
        <div className='actual-inform'>
          <News />
          <Quotations />
        </div>
        <Advertising />
      </div>
      <div className='search-section'>
        <SearchIcon />
        <div className='search'>
          <SearchHeaders />
          <Search />
        </div>
      </div>
      <div className='widgets-section'>
        <Advertising />
        <div className='widgets'>
          <Widgets />
        </div>
      </div>
    </div>
  );
}

export default App;
