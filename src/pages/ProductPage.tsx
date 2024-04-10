import { Loader } from "../components/Loader";
import { ProductContext } from "../components/ProductContext";
import { useContext } from "react";
import { FilterComponent } from "../components/FilterComponent/FilterComponent";
import { ProductList } from "../components/ProductList/ProductList";
import { Error } from "../components/Error/Error";
import { NotFoundProducts } from "../components/NotFoundProducts/NotFoundProducts";
import ReactPaginate from 'react-paginate';

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
        containerClassName={"pagination is-flex"}
        previousLinkClassName={"pagination-previous is-flex"}   
        nextLinkClassName={"pagination-next"}
        disabledClassName={"pagination-disabled"}
        activeClassName={"pagination-active has-background-grey-lighter"}
        pageLinkClassName={"pagination-link is-flex is-justify-content-center is-align-items-center cursor-pointer has-background-primary"}
      />}
    </>
  );
};
