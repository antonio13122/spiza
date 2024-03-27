<template>
    <div class="product-page">
      <router-link :to="{ name: 'Market', params: { id: 1 } }" class="product-container">
        <img class="product-image" :src="require('@/assets/market.png')" alt="Product 1">
      </router-link>
      <router-link :to="{ name: 'Restaurant', params: { id: 2 } }" class="product-container">
        <img class="product-image" :src="require('@/assets/restoran.png')" alt="Product 2">
      </router-link>
      <router-link :to="{ name: 'Bakery', params: { id: 3 } }" class="product-container">
        <img class="product-image" :src="require('@/assets/pekara.png')" alt="Product 3">
      </router-link>
    </div>
    <div class="container">
    <div class="search-container">
      <input placeholder='Search...' class='js-search' type="text" @keyup.enter="search">
      <img src="@/assets/search-icon.png" alt="Search Icon" class="search-icon">
    </div>
  </div>
  

  </template>
  <script>
  export default {
    setup() {
      
    },
  }
  </script>
  
  <style lang="scss" scoped>
  
  
  *{ box-sizing: border-box; }

body{
  position: relative;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom right, #274B74 0%, #8233C5 50%, #E963FD 100%);
  font-family: "Montserrat", sans-serif;
  overflow: hidden;
}

.container{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

input[type=text]{
  padding: 15px 40px 15px 20px;
  width: 300px;
  color: #525252;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 100;
  letter-spacing: 2px;
  border: none;
  border-radius: 5px;
  background: linear-gradient(to right, #FFFFFF 0%,#464747 #F9F9F9 100%);
  outline: none;
  
  &:focus{ width: 300px; }
}
.search-icon {
  position: absolute;
  left: 320px;
  top: 50%;
  transform: translateY(-50%);
}
.search-container {
  position: relative;
}


i{
  position: relative;
  left: -37px;
  color: #8233C5;
}


  .product-page {
    display: flex;
    justify-content: space-between;
    padding: 0 3cm; 
  }
  
  .product-container {
    width: calc(33.333% - 2.25cm); 
    margin-right: 4.5cm; 
    cursor: pointer;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .product-container:last-child {
    margin-right: 0; 
  }
  
  .product-container:hover {
    transform: translateY(-5px);
  }
  
  .product-image {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
  
  .product-container::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1));
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .product-container:hover::after {
    opacity: 1;
  }
  </style>
  