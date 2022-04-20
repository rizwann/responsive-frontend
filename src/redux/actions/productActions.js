import {
  ADD_TO_CART,
  FILTER_CATEGORY,
  GET_PRODUCTS,
  REMOVE_ALL_FROM_CART,
  REMOVE_FROM_CART,
  SEARCH_PRODUCTS,
  SORT_PRODUCTS,
} from "./actionsTypes";

const url = "fid-recruiting/fid-task-4-ffront-products.json";
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

export function filterCategory(category) {
  return {
    type: FILTER_CATEGORY,
    payload: {
      category,
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

export function removeFromCart(product) {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      product,
    },
  };
}

export function removeAllFromCart() {
  return {
    type: REMOVE_ALL_FROM_CART,
  };
}
