<template>
  
  <div>
    <header class="showcase">
      <div class="content">
        <div class="title">
          A Feast for All: Spiza's symphony of sharing and sustainability
        </div>
      </div>
    </header>

    <!-- Services -->
    <section id="services" class="services">
      <div class="container">
        <router-link to="/Food" class="photo-container">
          <img class="service-image" src="@/assets/image1.png" alt="Shopping Cart Icon">
          
        </router-link>
        <router-link to="/Register" class="photo-container">
          <img class="service-image" src="@/assets/image2.png" alt="Food Delivery Icon">
          
        </router-link>
      </div>
      
    </section>

    <!-- Slider -->
    <div class="slider" @click="scrollTo('services')">
      <img src="@/assets/arrows.png" alt="Scroll Down">
    </div>
  </div>
</template>

<style>
/* Import Poppins font */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

body {
  background: #50C878;
  margin: 0;
  color: #fff;
  font-family: 'Poppins', sans-serif;
}

.showcase::after {
  content: '';
  height: 100vh;
  width: 100%;
  background-image: url('@/assets/home.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: block;
  filter: blur(10px);
  -webkit-filter: blur(10px);
  transition: all 1000ms;
}

.showcase:hover::after {
  filter: blur(0px);
  -webkit-filter: blur(0px);
}

.showcase:hover .content {
  filter: blur(2px);
  -webkit-filter: blur(2px);
}

.content {
  position: absolute;
  z-index: 1;
  top: 10%;
  left: 50%;
  margin-top: 105px;
  margin-left: -145px;
  width: 300px;
  height: 350px;
  text-align: center;
  text-decoration: none;
  transition: all 1000ms;
}

.title {
  font-size: 1.05rem;
  margin-top: 37rem;
}

.text {
  line-height: 2.6;
  font-size: 1.6rem;
  margin-top: 0.5rem;
  text-decoration: none;
}

.router-link-exact-active:hover {
  text-decoration: none; 
}

.container {
  max-width: 960px;
  margin: auto;
  overflow: hidden;
  padding: 4rem 1rem;
  display: flex;
  justify-content: center; 
}

.photo-container {
  margin-right: 9cm; 
}

.service-image {
  width: 200px; 
  height: 200px; 
  object-fit: cover; 
}

.slider {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
}

.slider img {
  width: 50px; 
  height: 50px; 
}

</style>
<script>
import { Text } from 'vue';

export default {
    methods: {
        scrollTo(elementId) {
            const element = document.getElementById(elementId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    },
    components: { Text }
};
</script>
