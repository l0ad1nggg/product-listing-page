import { Product } from './Product';

export interface ProductContextProps {
  products: Product[];
  setProducts: (products: Product[]) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  error: string;
  setError: (error: string) => void;
  filteredProducts: Product[];
  setFilteredProducts: (products: Product[]) => void;
  categoryFilter : string;
  setCategoryFilter: (category: string) => void;
  priceFilter: string;
  setPriceFilter: (price: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  pageCount: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  currentPageData: Product[];
  handlePageClick: (data: { selected: number }) => void;
  query: string;
  handleCategoryChange: (newCategory: string) => void;
  handleInputSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
