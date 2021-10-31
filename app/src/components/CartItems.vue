<template>
  <div>
    <div class="cart-items">
      <div class="cart-item" v-for="item, index in datas" :key="index">
        <router-link class="is-primary is-light" :to="`/catalogue/${item.reference}`">
          {{ item.name }}
        </router-link>
        <button class="button is-light" type="button" @click="removeToCart(index)">
          Supprimer
        </button>
      </div>
  </div>
    <DialogConfirm v-if="showConfirm" @confirm="confirm" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import DialogConfirm from '@/components/DialogConfirm.vue';

export default {
  name: 'CartItems',
  components: { DialogConfirm },
  props: {
    datas: {
      type: Object || Array,
      default: {},
    },
  },
  computed: {
    ...mapGetters([
      'getItemByReference',
    ]),
  },
  data() {
    return {
      showConfirm: false,
      indexToRemove: null,
    };
  },
  methods: {
    ...mapActions([
      'removeItemToCart',
    ]),
    removeToCart(index) {
      this.showConfirm = true;
      this.indexToRemove = index;
    },
    confirm(isConfirm) {
      this.showConfirm = false;
      if (isConfirm) {
        this.removeItemToCart(this.indexToRemove);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
