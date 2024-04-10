import { Product } from "../../types/Product";
import "./ProductItem.scss";
import React from "react";
import { Modal } from "../Modal/Modal";

export const ProductItem: React.FC<{ product: Product }> = ({ product }) => {
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

        <Modal product={product} />
      </div>
    </div>
  );
};
