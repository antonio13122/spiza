import Vuex from 'vuex';

export default new Vuex.Store({
    state: {
      cartItems: [],
      total:0, // Array to store cart items
    },
    mutations: {
      addToCart(state, product) {
        state.cartItems.push(product); // Add product to cart
      },
    },
    actions: {
      addToCart({ commit }, product) {
        commit('addToCart', product); // Commit mutation to add product to cart
      },
    },
  });
  