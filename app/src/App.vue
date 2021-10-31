<template>
  <div id="app">
    <div id="nav" class="navbar" role="navigation" aria-label="main navigation">
      <router-link  class="navbar-item" to="/">Home</router-link>
      <router-link  class="navbar-item" to="/catalogue">Catalogue</router-link>
      <router-link  class="navbar-item" to="/panier">Panier</router-link>
      <button class="button is-dark" type="button" @click="toggleCart">
        PANIER - {{ getCountItemsInCart() }}
      </button>
    </div>
    <router-view/>
    <Cart class="floatting-cart box"
      v-show="!isHidden"
      :isFloatting="true"
      @close="()=>isHidden=true"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Cart from '@/views/Cart.vue';

export default {
  name: 'App',
  components: {
    Cart,
  },
  computed: {
    ...mapGetters([
      'getCountItemsInCart',
    ]),
  },
  data() {
    return {
      isHidden: true,
    };
  },
  mounted() {
  },
  methods: {
    toggleCart() {
      this.isHidden = !this.isHidden;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px grey;
}
.floatting-cart {
  position: absolute;
  right: 0;
  top: 100px;
  width: 300px;
  border: solid 1px grey;
  border-radius: 4px;
  padding: 20px 10px;
  background: white;
}
</style>
