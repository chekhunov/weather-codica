<template>
  <div
    class="weather-full-card p-50"
  >
    <div class="weather-full__inner">
      <div class="weather-full__headline">
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

      <div class="weather-full__details">
        <div class="weather-full__box">
          <div
            v-for="(item) in WETHER_FULL_CARD"
            :key="item.dt"
            class="weather-full__item"
          >
            <span>{{ item.dt_txt }}</span>
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
  },
  methods: {
    ...mapActions([
      'REMOVE_CARD',
    ]),
  },
};
</script>
