import { useReducer } from 'react';
import {
  UPDATE_PRODUCTS,
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
  ADD_MULTIPLE_TO_CART,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  CLEAR_CART,
  TOGGLE_CART,
  TOGGLE_THEME,
  CHANGE_GREETING,
  UPDATE_ALL_ARTICLES
} from './actions';

const updateProducts = ({ state, action }) => {
  return {
    ...state,
    products: [...action.products]
  }
};

const addToCart = ({ state, action }) => {
  return {
    ...state,
    cartOpen: true,
    cart: [...state.cart, action.product]
  }
};

// Map the items in the cart, if the id matches the payload's id update the purchase quantity
const updateCartQuantity = ({ state, action }) => {
  return {
    ...state,
    cartOpen: true,
    cart: state.cart.map((product) => {
      if (action._id === product._id) {
        product.purchaseQuantity = action.purchaseQuantity;
      }
      return product;
    })
  }
};

// Check the cart items for a match to the payload id, if found remove it and store the new state without this item
const removeFromCart = ({ state, action }) => {
  let newState = state.cart.filter((product) => {
    return product._id !== action._id;
  });
// Return the new state, if the new state contains any items resolve cartOpen to true and store the remaining cart from newState as the cart state
  return {
    ...state,
    cartOpen: newState.length > 0,
    cart: newState
  }
};

const addMultipleToCart = ({ state, action }) => {
  return {
    ...state,
    cart: [...state.cart, ...action.products]
  }
};

const updateCategories = ({ state, action }) => {
  return {
    ...state,
    categories: [...action.categories]
  }
};

const updateCurrentCategory = ({ state, action }) => {
  return {
    ...state,
    currentCategory: action.currentCategory
  }
};

const clearCart = ({ state }) => {
  return {
    ...state,
    cartOpen: false,
    cart: []
  }
};

const toggleCart = ({ state }) => {
  return {
    ...state,
    cartOpen: !state.cartOpen
  }
};

const toggleThemeReducer = ({ state }) => {
  return {
    ...state,
    theme: state.theme === 'light' ? 'dark' : 'light'
  };
}

const changeGreetingReducer = ({ state, action }) => {
  return {
    ...state,
    greeting: action.payload
  }
};

const updateAllArticles = ({ state, action }) => {
  return {
    ...state,
    articles: [...action.articles]
  }
};


const ACTION_MAP = {
  [UPDATE_PRODUCTS]: updateProducts,
  [ADD_TO_CART]: addToCart,
  [UPDATE_CART_QUANTITY]: updateCartQuantity,
  [REMOVE_FROM_CART]: removeFromCart,
  [ADD_MULTIPLE_TO_CART]: addMultipleToCart,
  [UPDATE_CATEGORIES]: updateCategories,
  [UPDATE_CURRENT_CATEGORY]: updateCurrentCategory,
  [CLEAR_CART]: clearCart,
  [TOGGLE_CART]: toggleCart,

  [TOGGLE_THEME]: toggleThemeReducer,
  [CHANGE_GREETING]: changeGreetingReducer,

  [UPDATE_ALL_ARTICLES]: updateAllArticles
};

export const reducer = (state, action) => ACTION_MAP[action.type]({ state, action });

export function useAppReducer(initialState) {
  return useReducer(reducer, initialState);
}
