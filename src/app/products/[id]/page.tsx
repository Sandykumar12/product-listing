import { notFound } from 'next/navigation';
import { fetchProductById } from '../../../utils/api';
import ProductDetails from '../../../components/ProductDetails';


import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
 
  return {
    title: `Product ${params.id}`,
  };
}

export default async function Page({ params }: Props) {
  const productId = Number(params.id);
  if (isNaN(productId)) notFound();

  const product = await fetchProductById(productId);
  if (!product) notFound();

  return <ProductDetails product={product} />;
}