import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Restaurant from '../views/Restaurant.vue';
import Bakery from '../views/Bakery.vue';
import Market from '../views/Market.vue';
import Admin from '../views/Admin.vue'; // Import Admin component
import store from "@/store";

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
    
  },
  {
    path: '/Register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "Register" */ '../views/Register.vue')
  },
  {
    path: '/Food',
    name: 'Food',
    component: () => import(/* webpackChunkName: "Food" */ '../views/Food.vue')
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "Contact" */ '../views/Contact.vue')
  },
  {
    path: '/About',
    name: 'About',
    component: () => import(/* webpackChunkName: "About" */ '../views/About.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "Cart" */ '../views/Cart.vue')
  },
  {
    path: '/Restaurant',
    name: 'Restaurant',
    component: Restaurant
  },
  {
    path: '/Bakery',
    name: 'Bakery',
    component: Bakery
  },
  {
    path: '/Admin', // Path for Admin.vue
    name: 'Admin',
    component: Admin
  },
  {
    path: '/Market',
    name: 'Market',
    component: Market
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const unidentifiedUser = store.currentUser === null;

  if (unidentifiedUser && to.meta.requiredUser) {
    next("Login");
  } else {
    next();
  }
});

export default router;
