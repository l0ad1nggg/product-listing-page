import { ProductItem } from "../ProductItem/ProductItem";
import { Product } from "../../types/Product";
import "./ProductList.scss";

export const ProductList = ({ products }: { products: Product[] }) => (
  <div className="grid-container">
    {products.map((product) => (
      <ProductItem key={product.id} product={product} />
    ))}
  </div>
);
