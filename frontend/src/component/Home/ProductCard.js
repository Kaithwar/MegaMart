import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";

const ProductCard = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  // Default image URL
  const defaultImageUrl = "https://m.media-amazon.com/images/I/71PS4DMRoJL._AC_SX522_.jpg";

  const imageUrl = (product.images && product.images.length > 0 && product.images[0].url) 
    ? product.images[0].url 
    : defaultImageUrl;
  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <img src={imageUrl} alt={product.name} />
      <p>{product.name}</p>
      <div>
      <Rating {...options} />{" "}
        <span className="productCardSpan">
          {" "}
          ({product.numOfReviews} Reviews)
        </span>
      </div>
      <span>{`₹${product.price}`}</span>
    </Link>
  );
};

export default ProductCard;
