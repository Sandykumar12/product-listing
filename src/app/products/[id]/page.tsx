

import { notFound } from 'next/navigation'
import { fetchProductById } from '../../../utils/api'
import ProductDetails from '../../../components/ProductDetails'

interface ProductPageProps {
  params: {
    id: string
  }
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const productId = Number(params.id)

  if (isNaN(productId)) {
    notFound()
  }

  const product = await fetchProductById(productId)

  if (!product) {
    notFound()
  }

  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <ProductDetails product={product} />
    </div>
  )
}

export default ProductPage
