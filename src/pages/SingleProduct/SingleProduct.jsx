import { GlassMagnifier } from "react-image-magnifiers";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { useParams } from "react-router-dom";
import "./SingleProduct.css";

const SingleProduct = () => {
  const { id } = useParams();
  const products = JSON.parse(localStorage.getItem("products"));
  const product = products.find((product) => product.id === id);
  return (
    <div className="single-product">
      <Carousel
        className="single-product-left"
        swipeable={true}
        showThumbs={true}
        dynamicHeight={true}
        showIndicators={true}
      >
        {/* <GlassMagnifier
          imageSrc={product.images[0]}
          largeImageSrc={product.images[0]}
          magnifierSize="50%"
          magnifierBorderSize="1"
          magnifierBorderStyle="solid"
          magnifierPosition="right"
          imageWidth="400"
          imageHeight="400"
          square={true}
        />
        <GlassMagnifier
          imageSrc={product.images[1]}
          largeImageSrc={product.images[1]}
          magnifierSize="50%"
          magnifierBorderSize="1"
          magnifierBorderStyle="solid"
          magnifierPosition="right"
          imageWidth="400"
          imageHeight="400"
          square={true}
        /> */}
        <div>
          <img src={product.images[0]} alt={product.brand} />
        </div>
        <div>
          <img src={product.images[1]} alt={product.brand} />
        </div>
      </Carousel>

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
            <div className="product-color">
              {product.sizes.map((size) => {
                return (
                  <div className="product-size" key={size}>
                    {size}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="product-buttons single ">
          <button className="add-to-fav">Add to Cart</button>
          <a
            href={product.url}
            target="_blank"
            className="product-buy-button-link"
            rel="noreferrer"
          >
            <button className="product-buy-button">Buy Now</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
