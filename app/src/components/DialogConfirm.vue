<template>
  <div class="dialog-confirm">
    Souhaitez-vous supprimer ce produit ?
    <button type="button" @click="confirm(true)">oui</button>
    <button  @click="confirm(false)">non</button>
  </div>
</template>

<script>

export default {
  name: 'DialogConfirm',
  methods: {
    confirm(response) {
      this.$emit('confirm', response);
    },
  },
};
</script>

<style scoped lang="scss">
.dialog-confirm {
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
