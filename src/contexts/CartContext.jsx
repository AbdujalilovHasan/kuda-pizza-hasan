// import { createContext, useState } from 'react';

// export const ProductContext = createContext();

// const ContextProvider = ({ children }) => {
//     const [cart, setCart] = useState([]);

//     const addedCart = (id) => {
//         if (!cart.includes(id)) {
//             setCart((prevCart) => [...prevCart, id]);
//         }
//     };

//     const state = { cart, addedCart };

//     return (
//         <ProductContext.Provider value={state}>
//             {children}
//         </ProductContext.Provider>
//     );
// };

// export default ContextProvider;
