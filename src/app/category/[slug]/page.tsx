import CategoriesData from '@/app/components/categoryDetails/CategoryDetails';
import { IPriceItem } from '@/app/Types/ProductData';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const CategoryDetailPage = async ({ params }: PageProps) => {
  const { slug } = await params;

  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products?category=${encodeURIComponent(slug)}`,
    {
      next: {
        revalidate: 10,
      },
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  const categoriesData: IPriceItem[] = await res.json();

  // Invalid category slug হলে 404 page
  if (!categoriesData || categoriesData.length === 0) {
    notFound();
  }

  return (
    <div>
      <CategoriesData categoriesData={categoriesData} />
    </div>
  );
};

export default CategoryDetailPage;
