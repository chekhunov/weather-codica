<template>
  <div class="d-flex justify-start align-start h100p">
    <div
      v-show="!$store.state.preLoader.isShow"
      class="weather w100p"
    >
      <label
        class="weather__label pos-r d-flex justify-start align-start mb-20"
      >
        <span
          v-if="$store.state.cityNameNoValid"
          style="color: red"
          class="weather__error pos-a mb-5"
        >
          {{ NO_VALID_TEXT }}
        </span>

        <div class="weather__input">
          <input
            v-model="cityName"
            type="text"
            placeholder="City name"
          >
          <Button
            title="Add new city"
            @clickButton="addedCity"
          />
        </div>
      </label>

      <div
        class="weather__cards"
      >
        <div
          v-for="item in WETHER_CARDS"
          :key="item.id"
          class="weather__item"
        >
          <weather-card
            :data="item"
          />
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
import { useCookies } from 'vue3-cookies';
import WeatherCard from '@/components/WeatherCard.vue';
import PreLoader from '@/components/base/PreLoader.vue';
import Button from '@/atoms/Button.vue';

export default {
  name: 'Weather',
  components: { WeatherCard, PreLoader, Button },
  setup() {
    const { cookies } = useCookies();
    return { cookies };
  },
  data() {
    return {
      cityName: '',
      cityBase: [],
      cityArray: [],
    };
  },
  computed: {
    ...mapGetters([
      'WETHER_CARDS',
      'NO_VALID_TEXT',
      'CITY_ARRAY',
    ]),
  },
  mounted() {
    const myCookieValue = this.cookies.get('city');
    console.log(myCookieValue, 'cookies');
    if (this.WETHER_CARDS.length === 0) {
      this.GET_WEATHER_CARDS([myCookieValue]);
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
      if (this.cityName.length === 0 || this.onlyLetters(this.cityName)) {
        this.SET_CITY_NO_VALID();
      }
      const double = this.WETHER_CARDS.filter((item) => (item.name === this.cityName));
      if (double.length !== 0) {
        this.SET_CITY_NO_VALID();
      } else {
        this.GET_ADD_WEATHER_CARD(this.cityName);
        this.cookies.set('city', this.CITY_ARRAY);
      }
    },
  },
};
</script>
