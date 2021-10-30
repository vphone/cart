<template>
  <div class="cart">
    <div v-for="item, index in items" :key="index">
       {{item.name}}
    </div>
 </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Cart',
  props: {
    msg: String,
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
