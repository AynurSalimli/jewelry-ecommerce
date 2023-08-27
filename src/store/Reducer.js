const init = {
  products: [],
  category: [],
  subcategory: [],
  color: [],
  blog: [],
  blogcomment: [],
  productcomment: [],
  basket: JSON.parse(localStorage.getItem("basket")) || [],
  wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
};

export default function Reducer(state = init, action) {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    case "SET_CATEGORY":
      return { ...state, category: action.payload };
    case "SET_SUBCATEGORY":
      return { ...state, subcategory: action.payload };
    case "SET_BLOG":
      return { ...state, blog: action.payload };
    case "SET_COLOR":
      return { ...state, color: action.payload };
    case "SET_BLOGCOMMENT":
      return { ...state, blogcomment: action.payload };
    case "SET_PRODUCTCOMMENT":
      return { ...state, productcomment: action.payload };
    case "SET_BASKET":
      localStorage.setItem("basket", JSON.stringify(action.payload));
      return { ...state, basket: action.payload };
    case "SET_WISHLIST":
      localStorage.setItem("wishlist", JSON.stringify(action.payload));
      return { ...state, wishlist: action.payload };
    default:
      return state;
  }
}
