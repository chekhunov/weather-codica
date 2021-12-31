<template>
  <div class="d-flex justify-center align-start h100p">
    <div
      v-show="!$store.state.preLoader.isShow"
      class="weather"
    >
      <label
        class="d-flex justify-end flex-column align-end mb-20"
      >
        <span
          v-if="$store.state.cityNameNoValid"
          style="color: red"
          class="mb-5"
        >
          no correct city name
        </span>

        <div>
          <input
            v-model="cityName"
            type="text"
            placeholder="City name"
          >
          <Button
            title="Add new card"
            @clickButton="addedCity"
          />
        </div>
      </label>

      <div
        class="weather__cards justify-center"
      >
        <div
          v-for="item in WETHER_CARDS"
          :key="item.id"
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
import Button from '@/atoms/Button.vue';

export default {
  name: 'Weather',
  components: { WeatherCard, PreLoader, Button },
  data() {
    return {
      weatherCity: ['Birkirkara', 'Tripoli', 'Zawiya', 'Masallātah', 'Al Khums', 'Zuwārah', 'Tarhuna', 'Zliten'],
      cityName: '',
    };
  },
  computed: {
    ...mapGetters([
      'WETHER_CARDS',
    ]),
  },
  mounted() {
    if (!this.$store.state.weatherCards.length) {
      this.GET_WEATHER_CARDS(this.weatherCity);
    }
  },
  methods: {
    ...mapActions([
      'GET_WEATHER_CARDS',
      'GET_ADD_WEATHER_CARD',
      'SET_CITY_NO_VALID',
    ]),
    onlyLetters(str) {
      return /^[a-zA-Z\u00C0-\u00ff]+$/.test(str);
    },
    addedCity() {
      if (this.cityName.length < 0 || this.onlyLetters(this.cityName)) {
        this.SET_CITY_NO_VALID();
      }
      this.GET_ADD_WEATHER_CARD(this.cityName);
    },
  },
};
</script>
