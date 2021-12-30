<template>
  <span
    class="button-delete"
    @click="clickActive"
  >
    <img
      src="@/root/assets/icons/delete.svg"
      alt="button delete"
    >
  </span>
</template>

<script>

export default {
  name: 'ButtonDelete',
  methods: {
    clickActive() {
      this.$emit('clickButton');
    },
  },
};
</script>
<style lang="scss">
  .button-delete {
    position: absolute;
    right: 10px;
    opacity: 1;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.5;
      transition: opacity 0.3s;
    }
  }

</style>
