import { ProductContext } from "../ProductContext";
import { useContext } from "react";
import React from "react";
import "./FilterComponent.scss";

export const FilterComponent: React.FC = () => {
  const {
    categoryFilter,
    priceFilter,
    setPriceFilter,
    sortBy,
    setSortBy,
    query,
    handleCategoryChange,
    handleInputSearch,
  } = useContext(ProductContext);

  return (
    <>
      <div className="container is-flex flex-direction-row">
        <div className="control has-icons-left">
          <div className="select mr-4 mb-4">
            <select
              value={categoryFilter}
              onChange={(event) => handleCategoryChange(event.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="phones">Phones</option>
              <option value="tablets">Tablets</option>
              <option value="laptops">Laptops</option>
            </select>
          </div>
          <span className="icon has-text-success is-left">
            <i className="fas fa-tag"></i>
          </span>
        </div>

        <div className="control has-icons-left">
          <div className="select mr-4 mb-4">
            <select
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
            >
              <option value="all">All Prices</option>
              <option value="under300">Under $300</option>
              <option value="300to500">$300 - $500</option>
              <option value="500to1000">$500 - $1000</option>
              <option value="over1000">Over $1000</option>
            </select>
            <span className="icon has-text-info has-text-success">
              <i className="fas fa-money-bill-wave"></i>
            </span>
          </div>
        </div>

        <div className="control has-icons-left">
          <div className="select mr-4 mb-4">
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="all">Price: All</option>
              <option value="priceLowToHigh">Price: Low to High</option>
              <option value="priceHighToLow">Price: High to Low</option>
            </select>
            <span className="icon has-text-success">
              <i className="fas fa-chart-line"></i>
            </span>
          </div>
        </div>
      </div>
      

      <div className="field mt-6">
        <label htmlFor="search-query" className="label">
          Search products
        </label>

        <div className="control">
          <input
            type="text"
            id="search-query"
            className="input is-primary mb-6"
            placeholder="Search products..."
            value={query}
            onChange={handleInputSearch}
          />
        </div>
      </div>
    </>
  );
};
