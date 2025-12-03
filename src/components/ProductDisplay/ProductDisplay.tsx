import { ProductDisplayProps } from "../types";

export function ProductDisplay({
  product,
  showDescription,
  showStockStatus,
  freeDelivery,
  onAddToCart,
  children,
}: ProductDisplayProps) {
  return (
    <div className="border-4 p-4">
      <h2>{product.name}</h2>
      <p className="text-sm text-gray-800 mt-1">${product.price.toFixed(2)}</p>
      {showDescription && <p>{product.description}</p>}

      {showStockStatus && (
        <p>{product.inStock ? "In Stock" : "Out of Stock"}</p>
      )}
        {
            <p>{ freeDelivery }</p>
        }
      {children}

      {onAddToCart && (
        <button onClick={() => onAddToCart(product.name)} className="bg-green-300 border p-2 rounded">Add to Cart</button>
      )}
    </div>
  );
}
