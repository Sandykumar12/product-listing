import Link from "next/link";
import { Product } from "../types/product";

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <>
      <Link
        href="/products"
        className="inline-flex items-center gap-2 mb-6 text-blue-600 hover:text-blue-800 transition-colors"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back to products
      </Link>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-4 md:p-8 bg-gray-50 flex justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-full max-w-md h-auto max-h-96 object-contain"
            />
          </div>

          <div className="md:w-1/2 p-4 md:p-8">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-md uppercase font-semibold tracking-wide mb-4">
              {product.category}
            </span>

            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {product.title}
            </h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    filled={i < Math.round(product.rating.rate)}
                  />
                ))}
              </div>
              <span className="text-gray-600 text-sm">
                {product.rating.rate} ({product.rating.count} reviews)
              </span>
            </div>

            <p className="text-3xl font-bold text-gray-900 mb-6">
              ${product.price.toFixed(2)}
            </p>

            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Description
              </h2>
              <p className="text-gray-600">{product.description}</p>
            </div>

            <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    className={`w-5 h-5 ${filled ? "text-yellow-400" : "text-gray-300"}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default ProductDetails;
