<template>
  <div class="item">
    <ProductCard v-if="reference !==''"
      :name="name"
      :price="price"
      :image="image"
      :reference="reference"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ProductCard from '@/components/ProductCard.vue';

export default {
  name: 'Item',
  components: {
    ProductCard,
  },
  props: {
    id: String,
  },
  computed: {
    ...mapGetters([
      'getItemByReference',
    ]),
  },
  data() {
    return {
      name: '',
      price: '',
      image: '',
      reference: '',
    };
  },
  mounted() {
    const item = this.getItemByReference(this.id);
    this.name = item.name;
    this.price = item.price.base.formatted;
    this.image = item.images[0].large;
    this.reference = item.reference;
  },
};
</script>
