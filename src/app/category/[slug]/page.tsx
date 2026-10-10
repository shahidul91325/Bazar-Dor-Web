import CategoriesData from '@/app/components/categoryDetails/CategoryDetails';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}
const CategoryDetailPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  const res = await fetch(`https://api.abcz.workers.dev/api/bazardor/products?category=${encodeURIComponent(slug)}`, {
    next: {
      revalidate: 10,
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  const categoriesData = await res.json();
  console.log(categoriesData);
  return (
    <div>
      <CategoriesData categoriesData={categoriesData}></CategoriesData>
    </div>
  );
};

export default CategoryDetailPage;
