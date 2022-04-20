const initialState = {
  products: [],
  cartItems: [],
  keyword: "",
  filteredProducts: [],
  sort: "",
  category: "",
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
        category: "",
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
        category: "all",
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

    // case "FILTER_CATEGORY":
    //   const filteredProductsCopy = [...state.products];
    //   if (action.payload.category === "all") {
    //     return {
    //       ...state,
    //       filteredProducts: filteredProductsCopy,
    //       category: action.payload.category,
    //       sort: "",
    //     };
    //   } else {
    //     const categorizedProducts = filteredProductsCopy.filter((product) => {
    //       return product.category === action.payload.category;
    //     });
    //     return {
    //       ...state,
    //       filteredProducts: categorizedProducts,
    //       category: action.payload.category,
    //       sort: "",
    //     };
    //   }
    default:
      return state;
  }
}
