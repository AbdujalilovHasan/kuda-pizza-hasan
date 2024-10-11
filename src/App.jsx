import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";
// import CartPage from './pages/CartPage';
import Layout from './components/Layout'; 
// import { CartProvider } from "./contexts/CartContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const App = () => {
  return (
    // <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
          </Route>
          {/* <Route path="/cart" element={<CartPage />} /> */}
        </Routes>
      </Router>
    // </CartProvider>
  );
};

export default App;