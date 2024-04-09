import { Product } from "../../types/Product";
import "./ProductItem.scss";
import React, {useState } from "react";

export const ProductItem: React.FC<{ product: Product }> = ({ product }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="card is-flex is-flex-direction-column">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={product.image} alt="Product" className="product-image" />
        </figure>
      </div>

      <div className="card-content is-flex is-flex-direction-column is-justify-content-space-between">
        <div className="media">
          <div className="media-content">
            <p className="title is-5 mb-5 mt-2">{product.name}</p>
          </div>
        </div>

        <div className="content">
          <p>${product.price}</p>
        </div>

        <button className="button is-primary is-flex mt-2" onClick={handleOpen}>
          View Details
        </button>
        {open && (
          <div className="modal is-active">
            <div className="modal-background" onClick={handleClose}></div>
            <div className="modal-content">
              <div className="box">
                <div className="media is-flex is-justify-content-space-between">
                  <div className="media-left">
                    <figure className="image">
                      <img
                        src={product.image}
                        alt="Product"
                        className="image is-128x128"
                      />
                    </figure>
                  </div>
                  <div className="media-content is-flex is-flex-direction-column">
                    <p className="title is-4 mb-1">Model: {product.name}</p>
                    <p className="subtitle is-6 mb-0">
                      Price: ${product.price}
                    </p>
                    <p className="subtitle is-6 mb-0">
                      Memory: {product.memory}
                    </p>
                    <p className="subtitle is-6 mb-0">
                      Screen: {product.screen}
                    </p>
                    <p className="subtitle is-6 mb-0">
                      Rating: {product.rating}
                    </p>
                  </div>
                </div>
                <div className="content">
                  <h5 className="content-description">Description</h5>
                  {product.description}
                </div>
              </div>
            </div>

            <button
              className="modal-close is-large"
              aria-label="close"
              onClick={handleClose}
            ></button>
          </div>
        )}
      </div>
    </div>
  );
};
