<template>
  <div :class="isFloatting ? '' : 'cart-page columns is-8 is-centered'">
    <div v-if="isFloatting">
      <button class="button is-light" type="button" @click="close"> X </button>
    </div>
    <div v-if="getCountItemsInCart() > 0" class="cart">
      <p>TOTAL : {{ getTotalPrice() }}</p>
      <CartItems :datas="{...getCart()}" :edit-mode="false" />
    </div>
    <div v-else>
      Pas de produits dans le panier
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CartItems from '@/components/CartItems.vue';

export default {
  name: 'Cart',
  props: {
    isFloatting: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    CartItems,
  },
  computed: {
    ...mapGetters([
      'getCart',
      'getTotalPrice',
      'getCountItemsInCart',
    ]),
  },
  mounted() {
  },
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped lang="scss">
.cart-page.columns.is-8.is-centered {
  margin-top: 20px;
}
</style>
