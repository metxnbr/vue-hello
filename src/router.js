import Vue from 'vue';
import Router from 'vue-router';
import guard from '@/utils/guard';
import alreadyLog from '@/utils/alreadyLog';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/count',
      name: 'count',
      component: () => import(/* webpackChunkName: "count" */ './views/Count.vue'),
    },
    {
      path: '/dog',
      name: 'dog',
      component: () => import(/* webpackChunkName: "dog" */ './views/Dog.vue'),
    },
    {
      path: '/dynamicStore',
      name: 'dynamicStore',
      component: () => import(/* webpackChunkName: "dynamicStore" */ './views/DynamicStore'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register'),
      beforeEnter: alreadyLog,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login'),
      beforeEnter: alreadyLog,
    },
    {
      path: '/logout',
      name: 'logout',
      component: () => import('./views/Logout.vue'),
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('./views/User'),
      beforeEnter: guard,
    },
  ],
});
