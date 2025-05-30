import ProductGrid from '../../components/ProductGrid';
import { fetchProducts } from '../../utils/api';
import { Product } from '../../types/product';

const ProductsPage = async () => {
  const products: Product[] = await fetchProducts();

  return (
    <div>
      <h1 className="text-3xl max-w-7xl mx-auto font-bold text-center my-8">Our Products</h1>
      <ProductGrid products={products} />
    </div>
  );
};

export default ProductsPage;