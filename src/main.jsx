import { createRoot } from 'react-dom/client';
import App from './App';
import CartProvider from './contexts/CartContext';
import '../src/index.css'

const root = createRoot(document.getElementById('root'));
root.render(
    <CartProvider>
        <App />
    </CartProvider>
);