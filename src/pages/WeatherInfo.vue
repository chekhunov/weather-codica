<template>
  <div class="weather-info">
    <div class="weather-info__inner">
      <div class="weather-info__top  d-flex justify-between align-center">
        <div class="container">
          <div class="weather-info__headline w100p d-flex justify-between">
            <Button
              title="Back"
              @clickButton="$router.push({ name: 'Home' })"
            />

            <ButtonUpdate
              @clickButton="GET_WEATHER_CARD(proCity);"
            />
          </div>
        </div>
      </div>

      <div
        v-show="!$store.state.preLoader.isShow"
        class="weather-info__content"
      >
        <div
          v-for="(item) in getCard()"
          :key="item.id"
          class="weather-info__inner"
        >
          <div v-if="Number(proId) === item.id">
            <WeatherFullCard
              :data="item"
              :date-time="dateTime(item.timezone)"
            />
          </div>
        </div>
      </div>

      <PreLoader
        v-if="$store.state.preLoader.isShow"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import WeatherFullCard from '@/components/WeatherFullCard.vue';
import Button from '@/atoms/Button.vue';
import PreLoader from '@/components/base/PreLoader.vue';
import ButtonUpdate from '@/atoms/ButtonUpdate.vue';

export default {
  name: 'WetherInfo',
  components: {
    WeatherFullCard, Button, ButtonUpdate, PreLoader,
  },
  data() {
    return {
      proId: this.$route.params.Pid,
      proCity: this.$route.params.City,
    };
  },

  computed: {
    ...mapGetters([
      'WETHER_CARDS',
      'WETHER_CARD',
    ]),
  },
  mounted() {
    this.GET_WEATHER_CARD(this.proCity);
    this.GET_WEATHER_FULL_CARD(this.proCity);
  },
  methods: {
    ...mapActions([
      'GET_WEATHER_FULL_CARD',
      'GET_WEATHER_CARD',
    ]),
    isEmpty(str) {
      if (str.trim() === '') {
        return true;
      }
      return false;
    },
    getCard() {
      if (this.WETHER_CARDS.length !== 0) {
        return this.WETHER_CARDS;
      }
      return this.WETHER_CARD;
    },
    dateTime(timezone) {
      const d = new Date();
      const localTime = d.getTime();
      const localOffset = d.getTimezoneOffset() * 60000;
      const utc = localTime + localOffset;
      const atl = utc + (1000 * timezone);
      const nd = new Date(atl);
      return nd;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
