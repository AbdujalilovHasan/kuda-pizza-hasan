import { createContext, useState, useEffect } from 'react';

// Create ProductContext
export const ProductContext = createContext();

const CartProvider = ({ children }) => {
    // Load cart from local storage
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        // Save cart to local storage whenever it changes
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            // Check if stock is available before increasing count
            if (existingProduct.count < product.stock) {
                setCart(cart.map(item =>
                    item.id === product.id ? { ...existingProduct, count: existingProduct.count + 1 } : item
                ));
            } else {
                alert('Cannot add more of this product. Stock limit reached.');
            }
        } else {
            setCart([...cart, { ...product, count: 1 }]);
        }
    };

    const removeFromCart = (product) => {
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct && existingProduct.count > 1) {
            setCart(cart.map(item =>
                item.id === product.id ? { ...existingProduct, count: existingProduct.count - 1 } : item
            ));
        } else {
            setCart(cart.filter(item => item.id !== product.id));
        }
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <ProductContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </ProductContext.Provider>
    );
};

export default CartProvider;