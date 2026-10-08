import MarqueeText from 'react-marquee-text';
import 'react-marquee-text/dist/styles.css';
import { IProduct } from '../../Types/ProductData';
import Link from 'next/link';

const NavMarquee = async () => {
  const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products', {
    cache: 'force-cache',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  const datas: IProduct[] = await res.json();

  return (
    <MarqueeText direction="right" duration={15}>
      {datas.map((data) => {
        const direction = data.change.dir;

        return (
          <div key={data.id} className="mr-5 mt-2">
            <Link href={`/category/${data.slug}`}>
              <div className="flex items-center justify-center gap-2 whitespace-nowrap">
                <p>{data.image}</p>
                <p>{data.nameBn}</p>
                <p>
                  {data.today} টাকা/{data.unit}
                </p>
                {direction === 'up' && <p className="font-semibold text-red-500">▲ {data.change.pct}%</p>}
                {direction === 'down' && <p className="font-semibold text-green-600">▼ {data.change.pct}%</p>}
                {direction === 'flat' && <p className="font-semibold text-gray-500">● {data.change.pct}%</p>}
              </div>
            </Link>
          </div>
        );
      })}
    </MarqueeText>
  );
};

export default NavMarquee;
