<template>
    <section id="services" class="services">
      <div class="container">
        <router-link to="/addAdmin" class="photo-container">
          <img class="service-image" src="@/assets/add.png" alt="Shopping Cart Icon">
          
        </router-link>
        <router-link to="/removeAdmin" class="photo-container">
          <img class="service-image" src="@/assets/remove.png" alt="Food Delivery Icon">
          
        </router-link>
      </div>
      
    </section>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

.photo-container {
  margin-right: 3cm;
  margin-left:3cm; 
}

.service-image {
  width: 250px; 
  height: 250px; 
  object-fit: cover; 
}
</style>