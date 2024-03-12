<template>
  <div class="container-fluid bg-transparent my-4 p-3" style="position: relative">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
      
      <Product v-for="(product, index) in products" :key="index"
               :imageSrc="product.imageUrl" :title="product.productName" 
               :price="product.productPrice" :description = "product.description"
               @add-to-cart="addToCart(product)" :cart="cart"/>
               
              </div>
    
    <div class="mt-4 text-center">
      <router-link to="/Food">
        <img src="@/assets/arrow.png" alt="Back to Food" style="width: 50px; height: 50px;">
      </router-link>
    </div>
  </div>
</template>

<script>
import { db } from '@/firebase'; 
import { mapActions,mapState } from 'vuex'; // Import mapActions from Vuex
import { storage } from '@/firebase'; 
import Product from '@/components/Product.vue';

export default {
  name: 'Restaurant',
  components: {
    Product,
  },
  data() {
    return {
      products: [], 
    };
  },
  computed: {
    ...mapState(['cart']), // Map Vuex cart state to component computed property
  },
  methods: {
    ...mapActions(['addToCart']),
    addToCart(product) {
     // this.cart.push(product); // Add product to cart locally
      this.$store.dispatch('addToCart', product); // Dispatch addToCart action to Vuex store
    },
    fetchProducts() {
      db.collection('restaurantProducts').get()
        .then(snapshot => {
          this.products = [];
          snapshot.forEach(doc => {
            this.products.push(doc.data());
          });
        })
        .catch(error => {
          console.error('Error fetching products: ', error);
        });
    },
  },
  created() {
    this.fetchProducts();
  },
};
</script>


<style scoped>
.card {
  background: #fff;
  box-shadow: 0 6px 10px rgba(0, 0, 0, .08), 0 0 6px rgba(0, 0, 0, .05);
  transition: .3s transform cubic-bezier(.155, 1.105, .295, 1.12), .3s box-shadow, .3s -webkit-transform cubic-bezier(.155, 1.105, .295, 1.12);
  border: 0;
  border-radius: 1rem;
  height: 100%; 
}

.card-img-top {
  width: 100%;
  height: 200px; 
  object-fit: cover;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}

.card-body {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%; 
}

.card-title {
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.price-hp {
  font-size: 1rem;
  font-weight: 600;
  color: darkgray;
  margin-bottom: 1rem;
}

.bold-btn {
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  padding: 10px 50px;
  background-color: transparent;
  border: 2px solid #50C878;
  color: black;
}

.bold-btn:hover {
  background-color: #50C878;
  color: black;
}
</style>
