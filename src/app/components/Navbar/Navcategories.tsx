import Link from 'next/link';
import { ICategoryData } from '../../Types/Category';

const getCategories = async () => {
  const res = await fetch('https://api.abcz.workers.dev/api/bazardor/categories', {
    next: {
      revalidate: 10,
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch categories');
  }

  return res.json();
};

const Navcategories = async () => {
  const datas = await getCategories();

  return (
    <div>
      <div className="lg:flex lg:justify-baseline lg:items-center md:flex md:justify-baseline md:items-center flex justify-baseline items-center lg:w-6xl md:w-3xl lg:mx-auto md:mx-auto w-sm mx-auto gap-2 font-semibold my-3 ">
        {datas.map((data: ICategoryData) => (
          <div key={data.id}>
            <Link href={`/category/${data.slug}`}>
              <div className="flex justify-baseline items-center lg:gap-2">
                <p className="lg:text-lg md:text-lg text-[8px]">{data.icon}</p>
                <p className="lg:text-lg md:text-lg text-[8px]">{data.nameBn}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className=" border-b-1 border-gray-200 w-full "></div>
    </div>
  );
};

export default Navcategories;
