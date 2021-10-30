<template>
  <div class="product-card">
    <h3>{{ name }}</h3>
    <p>{{ price }}</p>
    <img :src="image"/>
  </div>
</template>

<script>

export default {
  name: 'Products',
  props: {
    reference: String,
    name: String,
    price: String,
    image: String,
  },
};
</script>

<style scoped lang="scss">

</style>
