import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Header from './components/Header';
import Facts from './components/FactsComponent';
import Jokes from './components/JokesPage';

require('dotenv').config();

function App() {
  return (
    <div className='main'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='jokes' element={<Jokes />}>
            {/* <Route path='blondes' element= {<Plavuse/>}/>
            <Route path='bosnians' element= {<Mujo i Haso/>}/>
            <Route path='cops' element= {<Policajci/>}/> */}
          </Route>
          <Route path='facts' element={<Facts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
