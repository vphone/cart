<template>
  <div class="Products">
    <div v-for="item, index in items" :key="index">
      <ProductCard :name="item.name"
      :price="item.price.base.formatted"
      :image="item.images[0].xsmall"
      :reference="item.reference"
    />
    </div>
 </div>
</template>

<script>
import { mapState } from 'vuex';
import ProductCard from '@/components/ProductCard.vue';

export default {
  name: 'Products',
  components: { ProductCard },
  props: {
  },
  computed: mapState([
    'items',
  ]),
  mounted() {
    this.$store.dispatch('loadItems');
  },
};
</script>

<style scoped lang="scss">

</style>
