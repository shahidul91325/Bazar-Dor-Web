import MarqueeText from 'react-marquee-text';
import 'react-marquee-text/dist/styles.css';
import { IPriceItem } from '../../Types/ProductData';
import Link from 'next/link';

const NavMarquee = async () => {
  const res = await fetch('https://api.abcz.workers.dev/api/bazardor/products', {
    next: {
      revalidate: 10,
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  const datas: IPriceItem[] = await res.json();

  return (
    <MarqueeText direction="right" duration={15}>
      {datas.map((data) => {
        const direction = data.change.dir;

        return (
          <div key={data.id} className="my-5 mx-3">
            <Link href={`/category/${data.id}`}>
              <div className="flex items-center justify-center gap-2 whitespace-nowrap">
                <p className="md:text-lg text-[8px]">{data.image}</p>
                <p className="md:text-lg text-[8px]">{data.nameBn}</p>
                <p className="md:text-lg text-[8px]">
                  {data.today} টাকা/{data.unit}
                </p>
                {direction === 'up' && (
                  <p className="font-semibold text-red-500 md:text-lg text-[8px]">▲ {data.change.pct}%</p>
                )}
                {direction === 'down' && (
                  <p className="font-semibold text-green-600 md:text-lg text-[8px]">▼ {data.change.pct}%</p>
                )}
                {direction === 'flat' && (
                  <p className="font-semibold text-gray-500 md:text-lg text-[8px]">● {data.change.pct}%</p>
                )}
              </div>
            </Link>
          </div>
        );
      })}
    </MarqueeText>
  );
};

export default NavMarquee;
