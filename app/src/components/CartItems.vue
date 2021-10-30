<template>
  <div class="CartItems">
    <div v-for="item, index in datas" :key="index">
     <router-link :to="`/catalogue/${item.reference}`">{{ item.name }}</router-link>
    <button type="button" @click="removeToCart(index)">
      Supprimer du panier
    </button>
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

</style>
