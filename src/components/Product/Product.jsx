import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/actions/productActions";

import "./Product.css";

const Product = ({ product }) => {
  const { id, brand, description, priceO, priceR, images, url, sizes } =
    product;

  const dispatch = useDispatch();
  function handleAddToCart(product) {
    dispatch(addToCart(product));
  }

  return (
    <li className="product">
      <div className="product-container">
        <Link to={`/products/${id}`} className="product-image-container">
          <img
            src={images[0]}
            alt={brand}
            className="product-image"
            onMouseOver={(e) =>
              setTimeout(() => (e.target.src = images[1]), 500)
            }
            onMouseOut={(e) =>
              setTimeout(() => (e.target.src = images[0]), 500)
            }
          />
        </Link>
        <div className="product-info-container">
          <div className="product-info-title">
            <Link to={`/products/${id}`} className="product-brand">
              {brand}
            </Link>
            <p className="product-description">{description}</p>
          </div>
          <div className="product-price-size-container">
            <div className="product-price">
              {product.priceR ? (
                <>
                  <span className="product-price-original">
                    €{product.priceO}{" "}
                  </span>
                  <span className="product-price-reduced">€{priceR}</span>
                </>
              ) : (
                <span className="product-price-reduced">€{priceO} </span>
              )}
            </div>
            <div className="product-size-container">
              <span>Size: </span>
              <select>
                {sizes.map((size) => {
                  return (
                    size !== "00" && (
                      <option className="product-size" key={size}>
                        {size}
                      </option>
                    )
                  );
                })}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="product-buttons ">
        <button className="add-to-fav" onClick={() => handleAddToCart(product)}>
          Add to Cart
        </button>

        <button
          className="add-to-fav"
          onClick={() => window.open(url, "_blank").focus()}
        >
          Buy Now
        </button>
      </div>
    </li>
  );
};

export default Product;
