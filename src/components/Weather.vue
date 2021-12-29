<template>
  <div class="d-flex justify-center align-center h100p">
    <div
      v-show="!$store.state.preLoader.isShow"
      class="weather"
    >
      {{ $store.state.isLoading }}
      <div
        class="weather__cards"
      >
        <div
          v-for="item in WETHER_CARDS"
          :key="item.key"
          class="weather__item"
        >
          <weather-card :data="item" />
        </div>
      </div>
    </div>

    <PreLoader
      v-if="$store.state.preLoader.isShow"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import WeatherCard from '@/components/WeatherCard.vue';
import PreLoader from '@/components/base/PreLoader.vue';

export default {
  name: 'Weather',
  components: { WeatherCard, PreLoader },
  data() {
    return {
      weatherCity: ['Birkirkara', 'Tripoli', 'Zawiya', 'Masallātah', 'Al Khums', 'Zuwārah', 'Tarhuna', 'Zliten'],
    };
  },
  computed: {
    ...mapGetters([
      'WETHER_CARDS',
    ]),
  },
  mounted() {
    this.GET_WEATER_CARDS(this.weatherCity);
    // this.weatherCity.map(
    //   (item) => this.GET_WEATER_CARDS(item),
    // );
  },
  methods: {
    ...mapActions([
      'GET_WEATER_CARDS',
    ]),
  },
};
</script>

<style scoped lang="scss">

</style>
