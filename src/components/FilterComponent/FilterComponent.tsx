import { ProductContext } from "../ProductContext";
import { useContext } from "react";
import React from "react";
import "./FilterComponent.scss";
import { Category, Price, SortBy } from "../../enums/filterEnums";

interface FilterComponentProps {
  onFilterChange: () => void;
}

export const FilterComponent: React.FC<FilterComponentProps> = ({
  onFilterChange,
}) => {
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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleInputSearch(event);
    onFilterChange();
  };

  return (
    <>
      <div className="container is-flex flex-direction-row">
        <div className="control has-icons-left">
          <div className="select mr-4 mb-4">
            <select
              value={categoryFilter}
              onChange={(event) => {
                handleCategoryChange(event.target.value);
                onFilterChange();
              }}
            >
              <option value={Category.All}>All Categories</option>

              <option value={Category.Phones}>Phones</option>

              <option value={Category.Tablets}>Tablets</option>

              <option value={Category.Laptops}>Laptops</option>
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
              onChange={(e) => {
                setPriceFilter(e.target.value);
                onFilterChange();
              }}
            >
              <option value={Price.All}>All Prices</option>

              <option value={Price.Under300}>Under $300</option>

              <option value={Price.From300To500}>$300 - $500</option>

              <option value={Price.From500To1000}>$500 - $1000</option>

              <option value={Price.Over1000}>Over $1000</option>
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
              onChange={(e) => {
                setSortBy(e.target.value);
                onFilterChange();
              }}
            >
              <option value={SortBy.All}>Price: All</option>

              <option value={SortBy.PriceLowToHigh}>Price: Low to High</option>

              <option value={SortBy.PriceHighToLow}>Price: High to Low</option>
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
            onChange={handleInputChange}
          />
        </div>
      </div>
    </>
  );
};
