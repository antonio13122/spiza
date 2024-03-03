<template>
  <div id="app">
    <div id="nav">
      <div class="nav-content">
        <router-link to="/Home">
          <img src="@/assets/logo.png" alt="logo" class="logo">
        </router-link>
        <div class="nav-links">
          <router-link to="/About" class="navLink">About</router-link>
          <router-link to="/Food" class="navLink">Food</router-link>
          <router-link to="/Contact" class="navLink">Contact</router-link>
        </div>
        <div class="nav-icons"> 
          <router-link v-if="!store.currentUser" to="/Register" class="login-btn">
            <img src="@/assets/user.png" alt="user" class="icon">
          </router-link>
          <div class="nav-icons">
            <router-link v-if="!store.currentUser" to="/Cart" class="navLink">
            <img src="@/assets/cart.png" alt="cart" class="icon">
          </router-link>
            <router-link v-if="!store.currentUser" to="/" @click.prevent="logout()" class="login-btn">
              <img src="@/assets/logout.png" alt="user" class="icon">
            </router-link>
          </div>
          
        </div>
      </div>
    </div>
    <router-view />
    <footer class="center">
      <p>Spiza &copy; 2024</p>
    </footer>
  </div>
</template>

<script>
import store from "@/store";
import { firebase } from "@/firebase";
import router from "@/router";

firebase.auth().onAuthStateChanged(user => {
  const currentRoute = router.currentRoute;
  if (user) {
    // User is signed in.
    store.currentUser = user.email;
    console.log("emailVerified:" + user.emailVerified);

    if (!currentRoute.meta.requiredUser && user.emailVerified) {
      this.$router.push({ name: "Admin" });
    }

    if (user.displayName) {
      store.userDisplayName = user.displayName;
    } else {
      store.userDisplayName = user.email;
    }
  } else {
    // No user is signed in.
    store.currentUser = null;

    if (currentRoute.meta.requiredUser) {
      this.$router.push({ name: "Login" });
    }
  }
});

export default {
  name: "app",
  data() {
    return {
      store,
    };
  },

  methods: {
    logout() {
      console.log('Logging out...');
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "Login" });
        })
        .catch(error => {
          console.error('Logout error:', error);
        });
    },
  },
};
</script>

<style lang="scss">
#nav {
  background-color: #50C878;
  padding: 20px 40px;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  height: 160px;
  width: 160px;
}

.nav-links {
  display: flex;
}

.navLink {
  color: #fff;
  text-decoration: none;
  font-size: 24px;
  margin-right: 50px;
}

.nav-icons {
  display: flex;
  align-items: center;
}

.icon {
  height: 60px;
  width: 60px;
}

.login-btn {
  color: #fff;
  text-decoration: none;
  font-size: 24px;
}

footer {
  background-color: #50C878;
  padding: 2.2rem;
}

.center {
  text-align: center;
}

footer p {
  margin: 0;
  color: #fff;
}
</style>
