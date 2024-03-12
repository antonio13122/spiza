import { createStore } from 'vuex';

export default createStore({
  state: {
    cartItems: [],
    total: 0,
  },
  mutations: {
    addToCart(state, product) {
      state.cartItems.push({
        title: product.title,
        imageUrl: product.imageUrl,
        price: product.price,
        quantity : 1
      });
    },
    removeFromCart(state, index) {
      state.cartItems.splice(index, 1); // Remove item from cartItems array at given index
    }
  },
  actions: {
    addToCart({ commit }, product) {
      commit('addToCart', product);
    },
    removeFromCart({ commit }, index) {
      commit('removeFromCart', index);
    }
  }
});
