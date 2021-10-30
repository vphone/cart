import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const URL = 'http://localhost:3000/cart';

export default new Vuex.Store({
  state: {
    items: [],
    cart: [],
  },
  mutations: {
    setItems(state, items) {
      state.items = items;
    },
    addItemInCart(state, item) {
      state.cart.push(item);
    },
    removeItemInCart(state) {
      state.cart.splice();
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
  },
  modules: {
  },
});
