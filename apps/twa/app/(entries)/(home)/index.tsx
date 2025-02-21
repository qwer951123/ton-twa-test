import Banner from "./components/banner";
import FeaturedProducts from "./components/featured-products";
import ComingSoon from "./components/coming-soon";
import { AccountDrawer } from "./components/account-drawer";

export const HomePage = () => {
  return (
    <div>
      <Banner />
      <FeaturedProducts />
      <ComingSoon />
      <AccountDrawer />
    </div>
  );
};
