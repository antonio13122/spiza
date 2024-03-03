<template>
    <div class="recipes-container">
      <h1 class="recipes-title">Just ordered from our market? Don't know what to cook?
      No problem, <br>Spiza is here to help you.</h1>

      <!-- pokaži if showPhoto is true -->
      <div v-if="showPhoto" class="recipe-photo">
        <img src="@/assets/cook.png" alt="Recipe Photo">
      </div>
      
      <div v-if="randomRecipe" class="recipe-card">
        <h2>{{ randomRecipe.title }}</h2>
        <img :src="randomRecipe.image" alt="Recipe Image" class="recipe-image">
        <p>{{ randomRecipe.instructions }}</p>
      </div>
      
      <div class="button-container">
        <button @click="generateRecipe" class="generate-button">Generate Random Recipe</button>
      </div>
    </div>
  </template>
  
  <script>
  import SpoonacularService from '@/services/SpoonacularService';
  
  export default {
    data() {
      return {
        randomRecipe: null,
        showPhoto: true 
      };
    },
    methods: {
      async generateRecipe() {
        try {
          this.randomRecipe = await SpoonacularService.getRecipes();
          this.showPhoto = false; 
        } catch (error) {
          console.error('Error generating random recipe:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .recipes-container {
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .recipes-title {
    text-align: center;
    margin-top: -10px; 
  margin-bottom: 50px; 
    font-family: 'Poppins', sans-serif;
    color: #fff;
    padding:4px
    
   
  }
  
  .recipe-photo img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
  
  .recipe-card {
    margin-top: 2rem;
    background-color: #F9F9F9;
    border-radius: 15px;
    padding: 2rem;
    max-width: 60%; 
  }
  
  .recipe-card h2 {
    font-family: 'Poppins', sans-serif;
    color: #50C878;
  }
  
  .recipe-image {
    width: 100%;
    height: auto;
    border-radius: 10px;
    margin-top: 1rem;
  }
  
  .recipe-card p {
    margin-top: 1rem;
    color: #555;
  }
  
  .button-container {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
  }
  
  .generate-button {
    font-family: 'Poppins', sans-serif;
    background-color: #0b4916; 
    color: #fff;
    padding: 1rem 2rem;
    border: none;
    border-radius: 20px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .generate-button:hover {
    background-color: #0d3b10; 
  }
  </style>
  