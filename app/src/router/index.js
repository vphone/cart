import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/catalogue',
    name: 'Catalog',
    component: () => import('../views/Catalog.vue'),
  },
  {
    path: '/panier',
    name: 'Cart',
    component: () => import('../views/Cart.vue'),
  },
  {
    path: '/catalogue/:id',
    name: 'Item',
    component: () => import('../views/Item.vue'),
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
