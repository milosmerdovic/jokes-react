import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ResponsiveAppBar from './components/AppBar/AppBar';
import Facts from './components/FactsComponent';
import HomePage from './components/HomePage';
import Jokes from './components/JokesPage';
import SearchPageComponent from './components/SearchPageComponent/SearchPageComponent';

require('dotenv').config();

function App() {
  return (
    <div className='main'>
      <Router>
        <ResponsiveAppBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='jokes' element={<Jokes />} />
          {/* <Route path='blondes' element= {<Plavuse/>}/>
            <Route path='bosnians' element= {<Mujo i Haso/>}/>
            <Route path='cops' element= {<Policajci/>}/> */}
          <Route path='search' element={<SearchPageComponent />} />
          <Route path='facts' element={<Facts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
