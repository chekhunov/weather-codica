<template>
  <button
    class="new-weather-button"
    @click="uploadWeather"
  >
    update the data weather
  </button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions([
      'GET_WEATER_CARDS',
    ]),
    uploadWeather() {
      return this.GET_WEATER_CARDS();
    },
  },
};
</script>

<style>

</style>
