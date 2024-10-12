import { useContext } from 'react';
import { ProductContext } from '../../contexts/CartContext';

export const useCart = () => {
    return useContext(ProductContext);
};