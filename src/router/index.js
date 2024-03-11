import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Restaurant from '../views/Restaurant.vue';
import Bakery from '../views/Bakery.vue';
import Market from '../views/Market.vue';
import Recipes from '../views/Recipes.vue';
import Admin from '../views/Admin.vue'; 
import addAdmin from '../views/addAdmin.vue';
import removeAdmin from '../views/removeAdmin.vue'
import store from "@/store";


const routes = [
  {
    path: '/',
    name: '/',
    component: Home
    
  },
  {
    path: '/Register',
    name: 'Register',
    component: () => import( '../views/Register.vue')
  },
  {
    path: '/Food',
    name: 'Food',
    component: () => import( '../views/Food.vue')
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: () => import( '../views/Contact.vue')
  },
  {
    path: '/About',
    name: 'About',
    component: () => import( '../views/About.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  
  {
    path: '/Cart',
    name: 'Cart',
    component: () => import( '../views/Cart.vue')
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
    path: '/Admin', 
    name: 'Admin',
    component: Admin
  },
  {
    path: '/Market',
    name: 'Market',
    component: Market
  },
  {
    path: '/Recipes',
    name: 'Recipes',
    component: Recipes
  },
  {
    path: '/addAdmin',
    name: 'addAdmin',
    component: addAdmin
  },
  {
    path: '/removeAdmin',
    name: 'removeAdmin',
    component: removeAdmin
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
