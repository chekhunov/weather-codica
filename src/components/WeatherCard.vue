<template>
  <div
    class="weather-card"
    @click="goTodetail()"
  >
    <div class="weather-card__inner">
      <button-delete
        @clickButton="deleteCard"
      />

      <div class="weather-card__headline">
        <div class="weather-card__date">
          {{ dateTime() }}
        </div>
        <div class="weather-card__title pt-20 text-center">
          Weather in&nbsp;{{ data.name }}
        </div>
        <div>
          temp &nbsp;{{ data.main['temp'] }}
        </div>
        <div class="d-flex justify-between">
          <div>
            wind speed &nbsp;{{ data.wind['speed'] }}&nbsp;m/s
          </div>
          <div>
            wind deg &nbsp;{{ data.wind['deg'] }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import ButtonDelete from '../atoms/ButtonDelete.vue';

export default {
  name: 'WeatherCard',
  components: { ButtonDelete },
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
  methods: {
    ...mapActions([
      'REMOVE_CARD',
      'GET_WEATHER_CARD',
      'GET_WEATHER_FULL_CARD',
    ]),
    deleteCard() {
      this.REMOVE_CARD(this.data.id);
    },
    dateTime() {
      const d = new Date();
      const localTime = d.getTime();
      const localOffset = d.getTimezoneOffset() * 60000;
      const utc = localTime + localOffset;
      const atl = utc + (1000 * this.data.timezone);
      const nd = new Date(atl);
      return nd;
    },
    goTodetail() {
      this.GET_WEATHER_CARD(this.data.name);
      this.GET_WEATHER_FULL_CARD(this.data.name);
      this.$router.push({ name: 'WeatherInfo', params: { Pid: this.data.id, City: this.data.name } });
    },
  },
};
</script>
