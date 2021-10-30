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
import { mapGetters, mapActions, mapState } from 'vuex';
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
    ...mapState([
      'items',
    ]),
    ...mapGetters([
      'getItemByReference',
    ]),
  },
  datas() {
    return {
      name: '',
      price: '',
      image: '',
      reference: '',
    };
  },
  methods: {
    ...mapActions([
      'loadItems',
    ]),
  },
  async mounted() {
    await this.loadItems();
    // const item = this.getItemByReference(this.id);
    console.log('', this.items);
    /* this.name = item.name;
    this.price = item.price.base.formatted;
    this.image = item.images[0].xsmall;
    this.reference = item.reference; */
  },
};
</script>
