import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const URL = 'http://localhost:3000/cart';

export default new Vuex.Store({
  state: {
    items: {},
    cart: [],
  },
  mutations: {
    setItems(state, items) {
      state.items = items;
    },
    setItemToCart(state, items) {
      state.cart = items;
    },
  },
  actions: {
    loadItems({
      commit,
    }) {
      axios.get(URL).then((response) => {
        commit('setItems', response.data);
      });
    },
    addItemToCart({
      commit,
      getters,
    }, item) {
      const cart = getters.getCart();
      cart.push(item);
      commit('setItemToCart', cart);
    },
    removeItemToCart({
      commit,
      getters,
    }, index) {
      const cart = getters.getCart();
      cart.splice(index, 1);
      commit('setItemToCart', cart);
    },
  },
  getters: {
    getItemByReference: (state) => (ref) => state.items[ref],
    getCart: (state) => () => state.cart,
    getCountItemsInCart: (state) => () => state.cart.length || 0,
    getTotalPrice: (state) => () => state.cart.map((item) => item.price.base.amount)
      .reduce((previousValue, currentValue) => previousValue + currentValue)
    ,
  },
  modules: {
  },
});
