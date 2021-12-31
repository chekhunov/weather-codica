<template>
  <div class="body">
    <Header />

    <div class="main">
      <div class="container">
        <div class="main__top d-flex justify-between align-center">
          <div
            id="nav"
            class="nav"
          >
            <router-link to="/">
              Home
            </router-link> |
            <router-link to="/about">
              About
            </router-link>
          </div>

          <div>
            Your GeoLocation
            <span v-if="geolocation">lat:&nbsp;{{ geolocation.lat }}&nbsp; lng:&nbsp;{{ geolocation.lng }}</span>
            <span v-else>blocked</span>
          </div>
        </div>
      </div>

      <PreLoader
        v-if="$store.state.preLoader.isShow"
      />

      <transition name="moveInUp">
        <router-view />
      </transition>
    </div>

    <Footer />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Header from '@/components/base/Header.vue';
import Footer from '@/components/base/Footer.vue';
import PreLoader from '@/components/base/PreLoader.vue';

export default {
  name: 'Home',
  components: {
    Header, Footer, PreLoader,
  },
  data() {
    return {
      geolocation: null,
      logEntries: [
        {
          id: 1,
          timestamp: 0,
          location: '',
          latLng: { lat: 0, lng: 0 },
          heading: '',
          speed: 0,
          sog: 0,
          windDirection: 'NW',
          windForceKTS: 12,
          motorOrSail: 'sail',
          pressure: 1020,
          remarks: '',
        },
      ],
    };
  },
  created() {
    this.$watchLocation({ enableHighAccuracy: true })
      .then((coordinates) => {
        console.log(coordinates);
        this.geolocation = coordinates;
        this.GET_YOUR_CITY(coordinates);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    ...mapActions([
      'GET_YOUR_CITY',
    ]),
  },
};
</script>
