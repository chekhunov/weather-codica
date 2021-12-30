<template>
  <button
    class="button"
    @click="clickActive"
  >
    {{ title }}
  </button>
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  methods: {
    clickActive() {
      this.$emit('clickButton');
    },
  },
};
</script>

<style>

</style>
