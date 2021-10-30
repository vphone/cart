import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const URL = 'http://localhost:3000/cart';

export default new Vuex.Store({
  state: {
    items: [],
  },
  mutations: {
    setItems(state, items) {
      state.items = items;
    },
  },
  actions: {
    loadItems({
      commit,
    }) {
      axios.get(URL).then((response) => {
        console.log(response.data, this);
        commit('setItems', response.data);
      });
    },
  },
  modules: {
  },
});
