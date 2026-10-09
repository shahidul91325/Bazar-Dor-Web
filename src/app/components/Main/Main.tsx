import AllProduct from './AllProduct';
import PriceDecrease from './PriceDecrease';
import PriceIncrease from './PriceIncrease';

const Main = () => {
  return (
    <div>
      <PriceIncrease></PriceIncrease>
      <PriceDecrease></PriceDecrease>
      <AllProduct></AllProduct>
    </div>
  );
};

export default Main;
