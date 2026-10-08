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
      <div className="flex w-6xl mx-auto mt-5 justify-baseline items-center gap-5 font-semibold mb-5 ">
        {datas.map((data: ICategoryData) => (
          <div key={data.id}>
            <Link href={`/category/${data.slug}`}>
              <div className="flex justify-baseline items-center gap-2">
                <p>{data.icon}</p>
                <p>{data.nameBn}</p>
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
