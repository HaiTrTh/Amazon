import './App.css';
import Header from './Componenets/Header/Header';
import Home from './Componenets/Home/Home';
import Checkout from './Componenets/Checkout/Checkout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Componenets/Login/Login';
function App() {
  return (



    <div className="App">


      <Router>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
        <Routes>
          <Route path='/' element={<><Header /><Home /></>}> </Route>
        </Routes>
        <Routes>
          <Route path='/checkout' element={<><Header /><Checkout /></>} />
        </Routes>
        <Routes>

        </Routes>


      </Router >
    </div >


  );
}

export default App;
