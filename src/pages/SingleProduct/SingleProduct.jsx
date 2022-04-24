import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useParams } from "react-router-dom";

import { addToCart } from "../../redux/actions/productActions";
import "./SingleProduct.css";

const SingleProduct = () => {
  const { id } = useParams();
  const products = useSelector(
    (state) => state.productReducer.filteredProducts
  );
  const dispatch = useDispatch();
  function handleAddToCart(product) {
    dispatch(addToCart(product));
  }
  const product = products.find((product) => product.id === id);
  return (
    <div className="single-product">
      <div className="single-product-left">
        <Carousel
          swipeable={true}
          showThumbs={true}
          dynamicHeight={true}
          showIndicators={true}
          width="60%"
          height="70%"
          className="carousel"
        >
          <div className="carousel-item">
            <img src={product.images[0]} alt={product.brand} />
          </div>
          <div className="carousel-item">
            <img src={product.images[1]} alt={product.brand} />
          </div>
        </Carousel>
      </div>

      <div className="single-product-right">
        <h1>{product.brand}</h1>
        <p>{product.description}</p>
        <div className="price-size-container">
          <div className="product-price">
            {product.priceR ? (
              <>
                <span className="product-price-original">
                  €{product.priceO}{" "}
                </span>
                <span className="product-price-reduced">€{product.priceR}</span>
              </>
            ) : (
              <span className="product-price-reduced">€{product.priceO} </span>
            )}
          </div>
          <div className="product-size-container">
            <div className="product-sizes">
              {product.sizes.map((size) => {
                return (
                  size !== "00" && (
                    <div className="product-size" key={size}>
                      {size}
                    </div>
                  )
                );
              })}
            </div>
          </div>
        </div>
        <div className="product-buttons single">
          <button
            className="add-to-fav"
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </button>

          <button
            className="add-to-fav"
            onClick={() => window.open(product.url, "_blank").focus()}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
