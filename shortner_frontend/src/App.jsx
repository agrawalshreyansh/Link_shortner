
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './components/home';
import Linkpage from './components/linkage';

function App() {

 



  return (
   <>

    <Router>
      <Routes>
        <Route path='/:id' element={<Linkpage/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
   </>

  )
};

export default App;
