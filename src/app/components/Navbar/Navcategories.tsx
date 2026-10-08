import Link from 'next/link';
import { ICategoryData } from '../../Types/Category';

const getCategories = async () => {
  'use cache';

  const res = await fetch('https://api.api-store.workers.dev/api/bazardor/categories');

  if (!res.ok) {
    throw new Error('Failed to fetch categories');
  }

  return res.json();
};

const Navcategories = async () => {
  const datas = await getCategories();

  return (
    <div>
      <div className="lg:flex lg:justify-between lg:items-center md:flex md:justify-between md:items-center flex justify-center items-center lg:w-6xl mx-auto md:w-3xl lg:mx-auto md:mx-auto w-full gap-2 font-semibold my-3 ">
        {datas.map((data: ICategoryData) => (
          <div key={data.id}>
            <Link href={`/category/${data.slug}`}>
              <div className="flex justify-baseline items-center lg:gap-2">
                <p className="md:text-lg text-[8px]">{data.icon}</p>
                <p className="md:text-lg text-[8px]">{data.nameBn}</p>
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
