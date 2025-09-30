import { Product } from '@/data/products'
import ProductCard from './ProductCard'
interface productProps{
  products: Product[]
}
export default function ProductList({products}: productProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
