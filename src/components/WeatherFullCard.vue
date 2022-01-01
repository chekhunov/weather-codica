<template>
  <div
    class="weather-full-card"
  >
    <div class="weather-card__inner">
      <div class="weather-card__headline">
        <div class="weather-card__date">
          {{ dateTime }}
        </div>
        <div class="weather-card__title">
          {{ data.name }}
        </div>
        <div>
          temp &nbsp;{{ data.main['temp'] }}
        </div>
        <div class="d-flex justify-between">
          <div>
            Wind speed &nbsp;{{ data.wind['speed'] }}
          </div>
          <div>
            Wind deg &nbsp;{{ data.wind['deg'] }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

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
  methods: {
    ...mapActions([
      'REMOVE_CARD',
    ]),
  },
};
</script>
