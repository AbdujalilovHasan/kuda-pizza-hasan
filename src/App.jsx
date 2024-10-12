import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CartProvider from './contexts/CartContext'; // Default import for CartProvider
import Header from './components/header/Header';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;