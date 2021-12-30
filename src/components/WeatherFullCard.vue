<template>
  <div
    class="weather-card"
  >
    <div class="weather-card__inner">
      <div class="weather-card__headline">
        <div class="weather-card__date">
          {{ dateTime() }}
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
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'WeatherCard',
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
  computed: {
    ...mapGetters([
      'WETHER_CARDS',
    ]),
  },
  methods: {
    ...mapActions([
      'REMOVE_CARD',
    ]),
    dateTime() {
      const d = new Date();
      const localTime = d.getTime();
      const localOffset = d.getTimezoneOffset() * 60000;
      const utc = localTime + localOffset;
      const atl = utc + (1000 * this.data.timezone);
      const nd = new Date(atl);
      return nd;
    },
  },
};
</script>
