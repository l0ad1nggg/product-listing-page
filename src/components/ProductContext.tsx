/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react'
import { ProductContextProps } from '../types/ProductContextProps'
import { Product } from '../types/Product';

export const ProductContext = React.createContext<ProductContextProps>({
  products: [],
  setProducts: () => {},
  loading: false,
  setLoading: () => {},
  error: '',
  setError: () => {},
  filteredProducts: [],
  setFilteredProducts: () => {},
  categoryFilter: 'all',
  setCategoryFilter: () => {},
  priceFilter: 'all',
  setPriceFilter: () => {},
  sortBy: 'priceLowToHigh',
  setSortBy: () => {},
  pageCount: 0,
  currentPage: 1,
  setCurrentPage: () => {},
  currentPageData: [],
  handlePageClick: () => {},
  query: '',
  handleCategoryChange: () => {},
  handleInputSearch: () => {},
})

type Props = {
  children: React.ReactNode,
};

export const ProductProvider: React.FC<Props> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [priceFilter, setPriceFilter] = useState('all');
  const [sortBy, setSortBy] = useState('all');

  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 8;
  const pageCount = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * productsPerPage;
  const currentPageData = filteredProducts.slice(
    offset,
    offset + productsPerPage
  );


  const preparedProducts = () => {
    let filteredProducts = [...products];
  
    switch (categoryFilter) {
      case 'all':

        break;
      case 'phones':
        filteredProducts = products.filter(
          (product) => product.category === 'phones'
        );
        break;
      case 'tablets':
        filteredProducts = products.filter(
          (product) => product.category === 'tablets'
        );
        break;
      case 'laptops': 
        filteredProducts = products.filter(
          (product) => product.category === 'laptops'
        );
        break;
      default:
    }

    switch (priceFilter) {
      case 'all':
        break;
      case 'under300':
        filteredProducts = filteredProducts.filter(
          (product) => product.price < 300
        );
        break;
      case '300to500':
        filteredProducts = filteredProducts.filter(
          (product) => product.price >= 300 && product.price <= 500
        );
        break;
      case '500to1000':
        filteredProducts = filteredProducts.filter(
          (product) => product.price > 500 && product.price <= 1000
        );
        break;
      case 'over1000':
        filteredProducts = filteredProducts.filter(
          (product) => product.price > 1000
        );
        break;
      default:
    }

    switch (sortBy) {
      case 'all': 
        break;
      case 'priceLowToHigh':
        filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'priceHighToLow':
        filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
        break;
      default:
    }

    return filteredProducts;
  }

  useEffect(() => {
    setFilteredProducts(preparedProducts());
  }, [categoryFilter, priceFilter, sortBy, products, setFilteredProducts]);

  useEffect(() => {
    const getProducts = () => {
      setLoading(true);
      setTimeout(() => {
        fetch('api/products.json')
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
          setFilteredProducts(data);
          setLoading(false);
        })
        .catch(() => {
          setError('Error fetching products');
          setLoading(false);
        });
      }, 600);
      
    };

    getProducts();

  }, []);


  function getSearchedProducts(
    products: Product[],
    { query, category }: { query: string; category: string }
  ) {
    let preparedProducts = [...products];
    const normalizedQuery = query.trim().toLowerCase();

    if (category !== "all") {
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

  const [query, setQuery] = useState("");

  const handleInputSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputQuery = event.target.value;
    setQuery(inputQuery);

    if (inputQuery.trim() === "") {
      setFilteredProducts(products);
    }
  };

  const handleCategoryChange = (newCategory: string) => {
    setCategoryFilter(newCategory);
    setFilteredProducts(
      getSearchedProducts(products, { query, category: newCategory })
    );
  };

  useEffect(() => {
    setFilteredProducts(
      getSearchedProducts(products, { query, category: categoryFilter })
    );
  }, [query, categoryFilter, products, setFilteredProducts]);
  

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        loading,
        setLoading,
        error,
        setError,
        filteredProducts,
        setFilteredProducts,
        categoryFilter,
        setCategoryFilter,
        priceFilter,
        setPriceFilter,
        sortBy,
        setSortBy,
        pageCount,
        currentPage,
        setCurrentPage,
        currentPageData,
        handlePageClick,
        query,
        handleCategoryChange,
        handleInputSearch,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
