import './App.css';
import { BrowserRouter ,Route, Routes, Link } from 'react-router-dom';
import { HookUseContext } from './components/HookUseContext';

//pages
import Home from './pages/Home';
import About from './pages/About';


function App() {
  return (
    <div className="App">
     <HookUseContext>

     <h1>Seção 11- React hooks</h1>

    <BrowserRouter>

    <ul>
      <li>
      <Link to="/">Início</Link>
      </li>
      <li>
      <Link to="/about">Sobre</Link>
      </li>
    </ul>

    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    </Routes>

    </BrowserRouter>

    </HookUseContext>
   </div>
  );
}

export default App;
