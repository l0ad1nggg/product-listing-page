import React, { useState, useEffect } from "react";
import { ProductContextProps } from "../types/ProductContextProps";
import { Product } from "../types/Product";
import { preparedProducts } from "../productUtils/preparedProducts";
import { getSearchedProducts } from "../productUtils/getSearchedProducts";
import { PRODUCTS_PER_PAGE } from "../utils/constants";

export const ProductContext = React.createContext<ProductContextProps>({
  products: [],
  setProducts: () => {},
  loading: false,
  setLoading: () => {},
  error: "",
  setError: () => {},
  filteredProducts: [],
  setFilteredProducts: () => {},
  categoryFilter: "all",
  setCategoryFilter: () => {},
  priceFilter: "all",
  setPriceFilter: () => {},
  sortBy: "priceLowToHigh",
  setSortBy: () => {},
  pageCount: 0,
  currentPage: 1,
  setCurrentPage: () => {},
  currentPageData: [],
  handlePageClick: () => {},
  query: "",
  handleCategoryChange: () => {},
  handleInputSearch: () => {},
  productsPerPage: PRODUCTS_PER_PAGE,
  setProductsPerPage: () => {},
  handleFilterChange: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const ProductProvider: React.FC<Props> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");
  const [sortBy, setSortBy] = useState("all");

  const [currentPage, setCurrentPage] = useState(0);
  const [productsPerPage, setProductsPerPage] = useState(PRODUCTS_PER_PAGE);
  const pageCount = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * productsPerPage;
  const currentPageData = filteredProducts.slice(
    offset,
    offset + productsPerPage
  );

  const handleFilterChange = () => {
    setProductsPerPage(8);
    setCurrentPage(0);
  };

  useEffect(() => {
    setFilteredProducts(
      preparedProducts(products, categoryFilter, priceFilter, sortBy)
    );
  }, [categoryFilter, priceFilter, sortBy, products, setFilteredProducts]);

  useEffect(() => {
    const getProducts = () => {
      setLoading(true);
      setTimeout(() => {
        fetch("api/products.json")
          .then((res) => res.json())
          .then((data) => {
            setProducts(data);
            setFilteredProducts(data);
            setLoading(false);
          })
          .catch(() => {
            setError("Error fetching products");
            setLoading(false);
          });
      }, 600);
    };

    getProducts();
  }, []);

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
        productsPerPage,
        setProductsPerPage,
        handleFilterChange,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
