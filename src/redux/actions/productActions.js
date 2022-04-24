import {
  ADD_TO_CART,
  FILTER_SIZE,
  GET_PRODUCTS,
  SEARCH_PRODUCTS,
  SORT_PRODUCTS,
} from "./actionsTypes";

const url = "/api/fid-recruiting/fid-task-4-ffront-products.json";
export function getProducts(products) {
  return {
    type: GET_PRODUCTS,
    payload: {
      products,
    },
  };
}

export function getProductsAsync() {
  return (dispatch) => {
    return fetch(url)
      .then((response) => response.json())
      .then((products) => dispatch(getProducts(products)));
  };
}

export function searchProducts(keyword) {
  return {
    type: SEARCH_PRODUCTS,
    payload: {
      keyword,
    },
  };
}

export function sortProducts(sort) {
  return {
    type: SORT_PRODUCTS,
    payload: {
      sort,
    },
  };
}

export function filterSize(sizes) {
  return {
    type: FILTER_SIZE,
    payload: {
      sizes,
    },
  };
}

export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    payload: {
      product,
    },
  };
}
