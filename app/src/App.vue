<template>
  <div id="app">
    <button type="button" @click="showCart"> PANIER - {{ getCountItemsInCart() }}</button>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/catalogue">Catalogue</router-link> |
      <router-link to="/panier">Panier</router-link>
    </div>
    <router-view/>
    <Cart class="floatting-cart"
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
    showCart() {
      this.isHidden = false;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.floatting-cart {
  position:absolute;
  right:0;
  top:0;
  width:300px;
  border: solid 1px grey;
  border-radius:4px;
  padding:20px 10px;
  background:white;
}
</style>
