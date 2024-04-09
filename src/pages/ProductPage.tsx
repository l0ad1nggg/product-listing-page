import { Loader } from "../components/Loader";
import { ProductContext } from "../components/ProductContext";
import { useContext } from "react";
import { FilterComponent } from "../components/FilterComponent/FilterComponent";
import { ProductList } from "../components/ProductList/ProductList";
import { Error } from "../components/Error";
import { NotFoundProducts } from "../components/NotFoundProducts";
import ReactPaginate from 'react-paginate';
import './ProductPage.scss';

export const ProductPage: React.FC = () => {
  const { 
    error, 
    loading, 
    filteredProducts,
    currentPageData,
    pageCount, 
    handlePageClick 
  } = useContext(ProductContext);

  return (
    <>
      <h1 className="title mt-6">Product Page</h1>
      {loading && <Loader />}
      {error && <Error />}
      {!loading && <FilterComponent />}
      {!filteredProducts.length && !loading && <NotFoundProducts />}
      <ProductList products={currentPageData} />
      {filteredProducts.length > 0 && !loading && <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination is-centered is-justify-content-space-between"}
        previousLinkClassName={"pagination-previous is-flex is-medium is-primary has-text-blue"}   
        nextLinkClassName={"pagination-next"}
        disabledClassName={"pagination-disabled"}
        activeClassName={"pagination-active is-flex is-justify-content-center is-primary px-2 py-2 has-text-white"}
        pageLinkClassName={"pagination-link"}
      />}
    </>
  );
};
