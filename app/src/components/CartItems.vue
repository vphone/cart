<template>
  <div class="CartItems">
    <div v-for="item, index in datas" :key="index">
     {{ item.name }}
    <button type="button" @click="removeToCart(index)">
      Supprimer du panier
    </button>
    </div>
    <div class="confirm" v-if="showConfirm">
      Souhaitez-vous supprimer ce produit ?
      <button type="button" @click="confirm(true)">oui</button>
      <button  @click="confirm(false)">non</button>
    </div>
 </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'CartItems',
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
.confirm {
  position:absolute;
  top:50%;
  left:50;
  width:100px;
  height:100px;
  border:solid 1px grey;
  border-radius: 4px;
  background-color:white;
}
</style>
