

import axios from 'axios';

const API_KEY = '51b9b0ad54d34b79b797ba1bd0723667'; 
const BASE_URL = 'https://api.spoonacular.com/recipes';

export default {
  async getRecipes() {
    try {
      const response = await axios.get(`${BASE_URL}/random`, {
        params: {
          apiKey: API_KEY,
          number: 1, // izvlaci jedan random
          includeNutrition: false, 
          addRecipeInformation: true, // uključi recept
        },
      });
      return response.data.recipes[0]; // prvi recipe
    } catch (error) {
      console.error('Error fetching recipes:', error);
      return null; 
    }
  },
};
