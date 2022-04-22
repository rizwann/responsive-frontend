import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  filterCategory,
  searchProducts,
  sortProducts,
} from "../../redux/actions/productActions";
import SizeSelection from "../SizeSelection/SizeSelection";

import "./Filter.css";

const Filter = () => {
  const category = useSelector((state) => state.productReducer.category);
  const sort = useSelector((state) => state.productReducer.sort);
  const keyword = useSelector((state) => state.productReducer.keyword);
  const products = useSelector(
    (state) => state.productReducer.filteredProducts
  );
  const count = products.length;
  const dispatch = useDispatch();

  const handleSortProducts = (event) => {
    dispatch(sortProducts(event.target.value));
  };

  const handleFilterCategory = (event) => {
    dispatch(filterCategory(event.target.value));
  };

  const handleSearchProducts = (event) => {
    dispatch(searchProducts(event.target.value));
  };

  return (
    <div className="filter">
      <div className="filter-count"> {count} Products.</div>
      <div className="filter-sort">
        <span>Sort: </span> &nbsp;
        <select value={sort} onChange={handleSortProducts}>
          <option value="default">Default</option>
          <option value="ASC">Name (A-Z)</option>
          <option value="DESC">Name (Z-A)</option>
          <option value="lowest">Price: Low to High</option>
          <option value="highest">Price: High to Low</option>
        </select>
      </div>

      <span>Size: </span>
      <SizeSelection />
      <div className="search">
        <Form className="d-flex nv-search">
          <input
            type="text"
            placeholder="Search product.."
            className="me-2 sm nv-input"
            aria-label="Search"
            value={keyword}
            onChange={handleSearchProducts}
          />
        </Form>
      </div>
    </div>
  );
};

export default Filter;
