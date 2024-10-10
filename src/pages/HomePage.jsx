import About from "../components/about/About";
import HeroDiscount from "../components/hero/HeroDiscount";
import HeroLinks from "../components/hero/HeroLinks";
import Products from "../components/products/Products";

const HomePage = () => {
  return (
    <div>
      <div className="w-75 mx-auto ">
        <HeroLinks />
        <HeroDiscount />
        <Products />
        <About />
      </div>
    </div>
  );
};

export default HomePage;