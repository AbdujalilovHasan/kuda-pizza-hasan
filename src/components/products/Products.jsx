import { products } from '../../constants/products';
import style from './Products.module.css';
// import { useCart } from '../../contexts/CartContext'; // useCart ni import qilish

function Products() {
    // const { addToCart } = useCart(); // addToCart funksiyasini olish

    const categories = [...new Set(products.map(product => product.category))];

    return (
        <div className={style["products-container"]}>
            {categories.map((category) => (
                <div key={category} className={style["category-section"]}>
                    <h2 className={style["category-title"]}>{getCategoryTitle(category)}</h2>

                    <div className={style["row"]}>
                        {products
                            .filter(product => product.category === category)
                            .map((product) => (
                                <div key={product.id} className={style["product-card"]}>
                                    <img src={product.image} alt={product.name} />
                                    <h3>{product.name}</h3>
                                    <p>{product.description}</p>
                                    <div className={style["bottom-row"]}>
                                        <div className={style["btn"]}>
                                            {/* <button onClick={() => addToCart(product)}>Выбрать</button> */}
                                            <button>Выбрать</button>
                                        </div>
                                        <div className={style["price"]}>
                                            <p style={{color: '#FF7010', fontWeight: '600'}}>{product.price} ₽</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

function getCategoryTitle(category) {
    switch (category) {
        case 'pizza':
            return 'Пицца';
        case 'combo':
            return 'Комби';
        case 'sauce':
            return 'Соус';
        case 'sushi':
            return 'Суши';
        case 'drinks':
            return 'Напитки';
        default:
            return category;
    }
}

export default Products;