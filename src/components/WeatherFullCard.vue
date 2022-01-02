<template>
  <div
    class="weather-full-card pt-50 pb-50"
  >
    <div class="weather-full__inner">
      <div class="weather-full__headline  mb-50">
        <div class="weather-full__date">
          {{ dateTime }}
        </div>
        <div class="weather-full__title">
          {{ data.name }}
        </div>
        <div>
          temp - &nbsp;{{ data.main['temp'] }}
        </div>
        <div class="d-flex">
          <div>
            Wind speed - &nbsp;{{ data.wind['speed'] }}
          </div>&nbsp;
          <div>
            Wind deg - &nbsp;{{ data.wind['deg'] }}
          </div>
        </div>
      </div>

      <span>temperature per day at intervals of one hour</span>
      <div class="weather-full__details">
        <div class="weather-full__box d-flex justify-start">
          <div
            v-for="(item, index) in WETHER_FULL_CARD"
            :key="item.dt"
            class="weather-full__item"
          >
            <span
              v-if="index <= 23"
              class="weather-full__column d-flex flex-column align-center p-10"
            >
              <span
                class="pb-50"
                :style="{marginBottom : (item.temp * (-1)*2) + 'px'}"
              >
                {{ getTime(item.dt) }}
              </span>
              <span class="weather-full__temp d-flex justify-center p-10">{{ item.temp }}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'WeatherFullCard',
  props: {
    data: {
      type: Object,
      default: null,
    },
    dateTime: {
      type: Object,
      default: null,
    },
  },
  computed: {
    ...mapGetters([
      'WETHER_FULL_CARD',
    ]),
    getFullInfoHours() {
      if (this.WETHER_FULL_CARD.length === 0) {
        this.GET_WEATHER_FULL_CARD(this.data.coord);
      }
      console.log(this.WETHER_FULL_CARD, 'comput');
      return this.WETHER_FULL_CARD;
    },
  },
  methods: {
    ...mapActions([
      'REMOVE_CARD',
      'GET_WEATHER_FULL_CARD',
    ]),
    getTime(dt) {
      const maxDate = new Date(dt * 1000);
      const isoDate = maxDate.toTimeString().substr(0, 5);
      return isoDate;
    },
  },
};
</script>
