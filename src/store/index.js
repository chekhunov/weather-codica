import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    preLoader: {
      isShow: false,
    },
    modalCard: {
      isShow: false,
    },
    cityNameNoValid: false,
    weatherCards: [],
  },
  mutations: {
    SET_WEATHER_CARDS_TO_STATE: (state, weaterCards) => {
      state.weatherCards.push(weaterCards);
    },
    SET_SHOW(state, value) {
      state[value].isShow = true;
    },
    SET_CLOSE(state, value) {
      state[value].isShow = false;
    },
    SET_TOGGLE(state, value) {
      state[value].isShow = !state[value].isShow;
    },
    SET_CITY_NO_VALID(state, value) {
      state.cityNameNoValid = value;
    },
    REMOVE_CARD(state, value) {
      const result = state.weatherCards.filter((item) => item.id !== value);
      this.state.weatherCards = result;
    },
  },
  actions: {
    SET_CITY_NO_VALID({ commit }) {
      commit('SET_CITY_NO_VALID', true);
    },
    REMOVE_CARD({ commit }, id) {
      commit('REMOVE_CARD', id);
    },
    GET_WEATER_CARD({ commit }, city) {
      commit('SET_CITY_NO_VALID', false);
      commit('SET_TOGGLE', 'preLoader');
      setTimeout(() => {
        axios(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=dbc7dd317ef479abe6a029def432239a`, {
          method: 'GET',
        })
          .then((weaterCards) => {
            commit('SET_WEATHER_CARDS_TO_STATE', weaterCards.data);
            return weaterCards;
          })
          .catch((error) => {
            console.log(error);
            commit('SET_CITY_NO_VALID', true);
            return error;
          })
          .finally(() => {
            commit('SET_TOGGLE', 'preLoader');
          });
      }, 500);
    },
    GET_WEATER_CARDS({ commit }, cityes) {
      commit('SET_TOGGLE', 'preLoader');
      setTimeout(() => {
        cityes.forEach(
          (city) => {
            axios(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=dbc7dd317ef479abe6a029def432239a`, {
              method: 'GET',
            })
              .then((weaterCards) => {
                commit('SET_WEATHER_CARDS_TO_STATE', weaterCards.data);
                return weaterCards;
              })
              .catch((error) => {
                console.log(error);
                return error;
              });
          },
        );
        commit('SET_TOGGLE', 'preLoader');
      }, 1500);
    },
  },
  getters: {
    WETHER_CARDS(state) {
      return state.weatherCards;
    },
    WETHER_CARD(state, cardId) {
      return state.weatherCards.filter((card) => card.id === cardId);
    },
  },
});
