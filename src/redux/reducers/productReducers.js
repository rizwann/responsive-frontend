const initialState = {
  products: [],
  cartItems: [],
  keyword: "",
  filteredProducts: [],
  sort: "",
  sizes: [],
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload.products,
        filteredProducts: action.payload.products,
        keyword: "",
        sort: "",
        sizes: [],
      };

    case "SEARCH_PRODUCTS":
      const searchedProducts = state.products.filter((product) => {
        return (
          (product.description + " " + product.brand)
            .toLowerCase()
            .search(action.payload.keyword.toLowerCase()) !== -1
        );
      });

      return {
        ...state,
        filteredProducts: searchedProducts,
        keyword: action.payload.keyword,
        sizes: [],
        sort: "",
      };

    case "SORT_PRODUCTS":
      let sortedProducts = [...state.filteredProducts];
      if (action.payload.sort === "ASC") {
        sortedProducts.sort((a, b) =>
          a.description.localeCompare(b.description)
        );
      } else if (action.payload.sort === "DESC") {
        sortedProducts.sort((a, b) =>
          b.description.localeCompare(a.description)
        );
      } else if (action.payload.sort === "lowest") {
        sortedProducts.sort(
          (a, b) =>
            (a.priceR ? a.priceR : a.priceO) - (b.priceR ? b.priceR : b.priceO)
        );
      } else if (action.payload.sort === "highest") {
        sortedProducts.sort(
          (a, b) =>
            (b.priceR ? b.priceR : b.priceO) - (a.priceR ? a.priceR : a.priceO)
        );
      } else {
        sortedProducts = [...state.products];
      }
      return {
        ...state,
        filteredProducts: sortedProducts,
        sort: action.payload.sort,
      };

    case "FILTER_SIZE":
      const filteredProductsCopy = [...state.products];

      if (action.payload.sizes.length === 0) {
        return {
          ...state,
          filteredProducts: [...state.products],
          sizes: action.payload.sizes,
          sort: "",
          keyword: "",
        };
      } else {
        let sizes = action.payload.sizes.map((size) => {
          return size.label;
        });

        const filteredProductsBySize = filteredProductsCopy.filter(
          (product) => {
            return sizes.some((size) => {
              return product.sizes.includes(size);
            });
          }
        );

        return {
          ...state,
          filteredProducts: filteredProductsBySize,
          sizes: action.payload.sizes,
          sort: "",
        };
      }

    case "ADD_TO_CART":
      const cartItemsCopy = [...state.cartItems];
      let alreadyInCart = false;
      cartItemsCopy.forEach((item) => {
        if (item.id === action.payload.product.id) {
          item.inCartQuantity += 1;
          alreadyInCart = true;
        }
      });
      if (!alreadyInCart) {
        cartItemsCopy.push({ ...action.payload.product, inCartQuantity: 1 });
      }

      return {
        ...state,
        cartItems: cartItemsCopy,
      };

    default:
      return state;
  }
}
