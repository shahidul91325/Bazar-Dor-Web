import ProductDetails from '@/app/components/ProductDetails/ProductDetails';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}
const ProductDetailPage = async ({ params }: PageProps) => {
  const { id } = await params;
  const res = await fetch(`https://api.abcz.workers.dev/api/bazardor/products/${id}`, {
    next: {
      revalidate: 10,
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  const productData = await res.json();
  return (
    <div>
      <ProductDetails productData={productData}></ProductDetails>
    </div>
  );
};

export default ProductDetailPage;
