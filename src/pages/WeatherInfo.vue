<template>
  <div class="weather-info">
    <div class="container">
      <div
        v-for="(item,index) in WETHER_CARDS"
        :key="index"
        class="weather-info__inner"
      >
        <div v-if="proId == item.id">
          <WeatherFullCard
            :data="item"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import WeatherFullCard from '@/components/WeatherFullCard.vue';

export default {
  name: 'WetherInfo',
  components: { WeatherFullCard },
  data() {
    return {
      proId: this.$route.params.Pid,
    };
  },
  computed: {
    ...mapGetters([
      'WETHER_CARDS',
    ]),
  },
};
</script>
