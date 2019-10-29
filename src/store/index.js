import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import mutations from '@/store/mutations';
import actions from '@/store/actions';
import getters from '@/store/getters';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default new Vuex.Store({
  state: {
    albums: [],
    initialAlbums: [],
  },
  mutations,
  actions,
  getters,
  plugins: [vuexLocal.plugin],
});
