import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store1';
import Vuex from 'vuex';
// Import your Vuex store instance

const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#app');

app.use(Vuex);


