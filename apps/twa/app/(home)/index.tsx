import Banner from "./components/banner";
import FeaturedProducts from "./components/featured-products";
import ComingSoon from "./components/coming-soon";

export const HomePage = () => {
  return (
    <div>
      <Banner />
      <FeaturedProducts />
      <ComingSoon />
    </div>
  );
};
