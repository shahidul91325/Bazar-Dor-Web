import ProductDetails from '@/app/components/ProductDetails/ProductDetails';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}
const ProductDetailPage = async ({ params }: PageProps) => {
  const { id } = await params;
  const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products/${id}`, {
    next: {
      revalidate: 10,
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  const productData = await res.json();

  // Product খুঁজে না পেলে:
  if (!productData) {
    notFound();
  }
  return (
    <div>
      <ProductDetails productData={productData}></ProductDetails>
    </div>
  );
};

export default ProductDetailPage;
