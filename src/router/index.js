import Vue from 'vue';
import VueRouter from 'vue-router';
import Albums from '@/views/Albums.vue';
import Album from '@/views/Album.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'albums',
    component: Albums,
  },
  {
    path: '/albums/:id',
    name: 'album',
    component: Album,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
