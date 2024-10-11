import { useCart } from '../contexts/CartContext'; // useCart ni import qilish

const CartPage = () => {
    const { cartItems, removeFromCart } = useCart(); // cartItems va removeFromCart funksiyasini olish

    return (
        <div>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            {item.name} - {item.quantity} x {item.price} ₽
                            <button onClick={() => removeFromCart(item)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CartPage;