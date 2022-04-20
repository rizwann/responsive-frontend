import { Link } from "react-router-dom";

import "./Product.css";

const Product = ({ product }) => {
  const { id, brand, description, priceO, priceR, images, url, sizes } =
    product;

  return (
    <li className="product">
      <div className="product-container">
        <div className="product-image-container">
          <img src={images[0]} alt={brand} className="product-image" />
        </div>
        <div className="product-info-container">
          <div className="product-info-title">
            <p className="product-brand">{brand}</p>
            <p className="product-description">{description}</p>
          </div>
          <div className="price-size-container">
            <div className="product-price">
              <span className="product-price-original">{priceO} </span>
              <span className="product-price-reduced">{priceR}</span>
            </div>
            <div className="product-size-container">
              <span>Size: </span>
              <select>
                {sizes.map((size) => {
                  return (
                    <option className="product-size" key={size}>
                      {size}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
        <div className="product-buttons">
          <button className="add-to-fav">Add to Fav</button>
          <Link to={`/productList/${id}`} className="product-buy-button-link">
            <button className="product-buy-button">Buy Now</button>
          </Link>
        </div>
      </div>
    </li>
  );
};

export default Product;
