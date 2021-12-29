<template>
  <div class="body">
    <Header />

    <div class="main">
      <div class="container">
        <div id="nav">
          <router-link to="/">
            Home
          </router-link> |
          <router-link to="/about">
            About
          </router-link>
        </div>
      </div>
      <router-view />
    </div>

    <Footer />
  </div>
</template>

<script>

import Header from '@/components/base/Header.vue';
import Footer from '@/components/base/Footer.vue';

export default {
  name: 'Home',
  components: {
    Header, Footer,
  },
};
</script>
