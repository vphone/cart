<template>
  <div class="catalog">
    <Products :datas="items" :edit-mode="true"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Products from '@/components/Products.vue';

export default {
  name: 'Catalog',
  components: {
    Products,
  },
  computed: mapState([
    'items',
  ]),
  mounted() {
    this.$store.dispatch('loadItems');
  },
};
</script>
