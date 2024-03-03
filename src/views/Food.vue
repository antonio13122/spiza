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
  </template>
  
  <style scoped>
  .product-page {
    display: flex;
    justify-content: space-between;
    padding: 0 3cm; /* Adjust the padding as needed */
  }
  
  .product-container {
    width: calc(33.333% - 2.25cm); /* Adjust the width and margin as needed */
    margin-right: 4.5cm; /* Adjust the margin as needed */
    cursor: pointer;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .product-container:last-child {
    margin-right: 0; /* Remove margin from last product container */
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
  