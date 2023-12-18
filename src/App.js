import Navbar from './Components/Navbar';
import './App.css';
import Display from './Components/Display';
import Item from './Components/Item';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Display/>} />
          <Route exact path='/additem' element={<Item/>} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
