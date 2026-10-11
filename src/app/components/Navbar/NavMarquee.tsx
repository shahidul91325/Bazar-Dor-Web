import MarqueeText from 'react-marquee-text';
import 'react-marquee-text/dist/styles.css';
import { IPriceItem } from '../../Types/ProductData';
import Link from 'next/link';

const NavMarquee = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/bazardor/products', {
    next: {
      revalidate: 10,
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  const datas: IPriceItem[] = await res.json();

  return (
    <MarqueeText direction="right" duration={12}>
      {datas.map((data) => {
        const direction = data.change.dir;

        return (
          <div key={data.id} className="mx-4 flex items-stretch">
            <Link href={`/product/${data.id}`}>
              <div className="my-4 flex items-center justify-center gap-2 whitespace-nowrap">
                <p className="md:text-lg text-[12px]">{data.image}</p>
                <p className="md:text-lg text-[12px]">{data.nameBn}</p>
                <p className="md:text-lg text-[12px]">
                  {data.today} টাকা/{data.unit}
                </p>
                {direction === 'up' && (
                  <p className="font-semibold text-red-500 md:text-lg text-[12px]">▲ {data.change.pct}%</p>
                )}
                {direction === 'down' && (
                  <p className="font-semibold text-green-600 md:text-lg text-[12px]">▼ {data.change.pct}%</p>
                )}
                {direction === 'flat' && (
                  <p className="font-semibold text-gray-500 md:text-lg text-[12px]">● {data.change.pct}%</p>
                )}
              </div>
            </Link>
            <div className="w-px self-stretch bg-gray-200 ml-5"></div>
          </div>
        );
      })}
    </MarqueeText>
  );
};

export default NavMarquee;
