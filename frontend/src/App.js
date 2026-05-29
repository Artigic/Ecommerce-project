import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <BrowserRouter>
      <div className="navbar">
        <Link to="/">Home</Link>

        <Link to="/login">Login</Link>

        <Link to="/register">Register</Link>

        <Link to="/cart">Cart</Link>

        <Link to="/checkout">Checkout</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <footer
  style={{
    textAlign: 'center',
    padding: '20px',
    color: '#22d3ee',
  }}
>
  Rog Store © 2026
</footer>
    </BrowserRouter>
  );
}

export default App;