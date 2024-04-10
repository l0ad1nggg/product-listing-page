import { Product } from "../types/Product";
import { Category, Price, SortBy } from "../enums/filterEnums";
import { PRICE_300, PRICE_500, PRICE_1000 } from "../utils/constants";

export const preparedProducts = (
  products: Product[], 
  categoryFilter: string, 
  priceFilter: string, 
  sortBy: string
  ) => {
  let filteredProducts = [...products];

  switch (categoryFilter) {
    case Category.All:

      break;
    case Category.Phones:
      filteredProducts = products.filter(
        (product) => product.category === 'phones'
      );
      break;
    case Category.Tablets:
      filteredProducts = products.filter(
        (product) => product.category === 'tablets'
      );
      break;
    case Category.Laptops: 
      filteredProducts = products.filter(
        (product) => product.category === 'laptops'
      );
      break;
    default:
  }

  switch (priceFilter) {
    case Price.All:
      break;
    case Price.Under300:
      filteredProducts = filteredProducts.filter(
        (product) => product.price < PRICE_300
      );
      break;
    case Price.From300To500:
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= PRICE_300 && product.price <= PRICE_500
      );
      break;
    case Price.From500To1000:
      filteredProducts = filteredProducts.filter(
        (product) => product.price > PRICE_500 && product.price <= PRICE_1000
      );
      break;
    case Price.Over1000:
      filteredProducts = filteredProducts.filter(
        (product) => product.price > PRICE_1000
      );
      break;
    default:
  }

  switch (sortBy) {
    case SortBy.All: 
      break;
    case SortBy.PriceLowToHigh:
      filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case SortBy.PriceHighToLow:
      filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
      break;
    default:
  }

  return filteredProducts;
}
