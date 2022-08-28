import { BrowserRouter,Routes,Route } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar';
import Description from './pages/Description';
import Home from './pages/home/Home';
import ProductsNav from './pages/products/ProductsNav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsNav />} />
          <Route path="/products/:id" element={<Description/>} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
