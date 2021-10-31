<template>
  <div class="dialog">
    <div class="dialog-confirm">
      <p>Souhaitez-vous supprimer ce produit ?</p>
      <div class="button-confirm">
        <button class="button is-light" type="button" @click="confirm(true)">oui</button>
        <button  class="button is-light" @click="confirm(false)">non</button>
      </div>
    </div>
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
.dialog{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(105, 105, 105, 0.5);
  .dialog-confirm {
    position: absolute;
    top: 20%;
    padding: 20px;
    border: solid 1px grey;
    border-radius: 4px;
    background-color: white;
    .button-confirm {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
