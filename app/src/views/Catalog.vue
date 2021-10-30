<template>
  <div class="catalog">
    <Products />
  </div>
</template>

<script>
import Products from '@/components/Products.vue';

export default {
  name: 'Catalog',
  components: {
    Products,
  },
};
</script>
