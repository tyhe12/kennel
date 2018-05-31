import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Dogs from './views/Dogs.vue';
import Contact from './views/Contact.vue';
import Sales from './views/Sales.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },{
      path: '/dogs/:breed',
      name: 'dogs',
      component: Dogs
    },{
      path: '/contact',
      name: 'contact',
      component: Contact
    },{
      path: '/sales/:type',
      name: 'sales',
      component: Sales
    }
  ]
});
