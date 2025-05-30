import Link from "next/link";
import { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link href={`/products/${product.id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden  transition-transform duration-300 group-hover:scale-105">
        <div className="h-48 bg-gray-200 flex items-center justify-center p-4">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-full max-w-full object-contain"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 line-clamp-2">
            {product.title}
          </h3>
          <div className="flex justify-between items-center">
            <span className="text-gray-800 font-bold">${product.price}</span>
            <span className="text-yellow-500">
              {product.rating.rate} ({product.rating.count})
            </span>
          </div>
          <p className="text-gray-500 text-sm mt-2 line-clamp-2">
            {product.category}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
