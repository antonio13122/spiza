<template>
  <div class="col hp">
    <div class="card h-100 shadow-sm">
      <img :src="imageSrc" class="card-img-top" :alt="title">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="price-hp">{{ price }}</p>
        <div class="d-grid gap-2 my-4">
          <a href="#" class="btn btn-warning bold-btn">Add to Cart</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    title: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
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
}

.card-img-top {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}

.card-body {
  padding: 1.5rem;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: #333; 
}

.price-hp {
  font-size: 1rem;
  font-weight: 600;
  color: #333; 
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
