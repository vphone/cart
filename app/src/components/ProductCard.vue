<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="image" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p>{{ reference }}</p>
          <p class="title is-4">{{ name }}</p>
          <p class="subtitle is-6">{{ price }}</p>
        </div>
      </div>

      <div class="content">
      </div>
    </div>
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
