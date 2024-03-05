<template>
  <div class="container-fluid bg-transparent my-4 p-3" style="position: relative">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
      <!-- Render products dynamically -->
      <Product v-for="(product, index) in products" :key="index"
               :imageSrc="product.imageUrl" :title="product.productName" 
               :description="product.productDescription" :price="product.productPrice" />
    </div>
    <!-- Button with photo icon to navigate back to Food.vue -->
    <div class="mt-4 text-center">
      <router-link to="/Food">
        <img src="@/assets/arrow.png" alt="Back to Food" style="width: 50px; height: 50px;">
      </router-link>
    </div>
  </div>
</template>

<script>
import { db } from '@/firebase'; // Import Firebase database instance
import Product from '@/components/Product.vue';

export default {
  name: 'Market',
  components: {
    Product,
  },
  data() {
    return {
      products: [], // Array to store fetched products
    };
  },
  methods: {
    fetchProducts() {
      // Fetch products from Firestore "marketProducts" collection
      db.collection('marketProducts').get()
        .then(snapshot => {
          // Reset products array to avoid duplication
          this.products = [];
          snapshot.forEach(doc => {
            // Push each product to the products array
            this.products.push(doc.data());
          });
        })
        .catch(error => {
          console.error('Error fetching products: ', error);
        });
    },
  },
  created() {
    // Call fetchProducts method when the component is created
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

.card-description {
  font-size: 1rem;
  margin-bottom: 1rem;
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
