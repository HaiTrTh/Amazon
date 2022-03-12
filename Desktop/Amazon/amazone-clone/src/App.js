import './App.css';
import Header from './Componenets/Header/Header';
import Home from './Componenets/Home/Home';
import Checkout from './Componenets/Checkout/Checkout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (



    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}> </Route>
        </Routes>
        <Routes>
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </Router >
    </div >


  );
}

export default App;
