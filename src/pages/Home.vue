<template>
  <div
    class="home h100p"
  >
    <div class="container">
      <Weather />
    </div>
  </div>
</template>

<script>

import Weather from '@/components/Weather.vue';

export default {
  name: 'Home',
  components: {
    Weather,
  },
};
</script>
