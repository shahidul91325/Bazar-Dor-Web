import AllProduct from './AllProduct';
import PriceDecrease from './PriceDecrease';
import PriceIncrease from './PriceIncrease';

const Main = async () => {
  const res = await fetch('https://api.abcz.workers.dev/api/bazardor/products', {
    next: {
      revalidate: 10,
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch prices');
  }
  const datas = await res.json();
  return (
    <div>
      <PriceIncrease alldatas={datas}></PriceIncrease>
      <PriceDecrease alldatas={datas}></PriceDecrease>
      <AllProduct alldatas={datas}></AllProduct>
    </div>
  );
};

export default Main;
