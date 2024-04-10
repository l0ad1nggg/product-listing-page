import { Product } from "../types/Product";
import { Category } from "./filterEnums";

export const getSearchedProducts = (
  products: Product[],
  { query, category }: { query: string; category: string }
) => {
  let preparedProducts = [...products];
  const normalizedQuery = query.trim().toLowerCase();

  if (category !== Category.All) {
    preparedProducts = preparedProducts.filter(
      (product) => product.category === category
    );
  }

  if (query) {
    preparedProducts = preparedProducts.filter((product) =>
      product.name.toLowerCase().includes(normalizedQuery)
    );
  }

  return preparedProducts;
}
