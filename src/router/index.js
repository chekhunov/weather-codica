/* eslint-disable no-use-before-define */
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: requireAuth,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/About.vue'),
  },
  {
    path: '/weather-info/:Pid/:City',
    name: 'WeatherInfo',
    component: () => import('../pages/WeatherInfo.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

const requireAuth = (to, from, next) => {
  const { $cookies } = router.app.config.globalProperties;
  console.log('_ga', $cookies.get('_ga'));
  next();
};

export default router;
