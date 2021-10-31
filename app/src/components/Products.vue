<template>
  <div class="Products columns is-8 is-centered">
    <div class="column is-4" v-for="item, index in datas" :key="index">
      <ProductCard :name="item.name"
        :price="item.price.base.formatted"
        :image="item.images[0].xsmall"
        :reference="item.reference"
      />
      <button class="button is-light"
      v-show="editMode"
      type="button"
      @click="addToCart(item.reference)">
        Ajouter dans le panier
      </button>
    </div>
 </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ProductCard from '@/components/ProductCard.vue';

export default {
  name: 'Products',
  components: { ProductCard },
  props: {
    datas: {
      type: Object || Array,
      default: {},
    },
    editMode: Boolean,
  },
  computed: {
    ...mapGetters([
      'getItemByReference',
    ]),
  },
  methods: {
    ...mapActions([
      'addItemToCart',
    ]),
    addToCart(ref) {
      const item = this.getItemByReference(ref);
      this.addItemToCart(item);
    },
  },
};
</script>

<style scoped lang="scss">

</style>
