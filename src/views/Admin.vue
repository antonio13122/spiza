<template>
    <div class="admin-container">
      <!-- Product Name Form -->
      <div class="form-container">
        <label for="productName" style="color: lightgray;">Enter your meal name</label>
        <input type="text" id="productName" v-model="productName" class="form-control" placeholder="Enter your meal name">
      </div>
      <!-- Product Description Form -->
      <div class="form-container">
        <label for="productDescription" style="color: lightgray;">Describe what meal are you offering today</label>
        <textarea id="productDescription" v-model="productDescription" class="form-control" placeholder="Describe what meal are you offering today"></textarea>
      </div>
      <!-- Product Price Form -->
      <div class="form-container">
        <label for="productPrice" style="color: lightgray;">Enter the price:</label>
        <textarea id="productPrice" v-model="productPrice" class="form-control" placeholder="Remember! It is not about how much you earn, it is about helping others"></textarea>
      </div>
      <!-- Drag and drop area for image upload -->
      <div class="upload-container">
        <input type="file" @change="handleFileUpload" accept="image/*" ref="fileInput" style="display: none">
        <div
          class="drag-drop-area"
          @dragover.prevent
          @drop="handleFileDrop"
          @click="openFileInput"
        >
          <img src="@/assets/draganddrop.png" alt="Drag and drop icon" class="drag-drop-icon">
          <p>Drag & Drop or Click to Upload Image</p>
        </div>
        <!-- Share your meal button -->
        <button class="share-button">Share your meal</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        productName: '',
        productPrice: '',
        productDescription: '',
        imageUrl: '' // To store the uploaded image URL
      };
    },
    methods: {
      handleFileUpload(event) {
        const file = event.target.files[0];
        if (file) {
          this.imageUrl = URL.createObjectURL(file);
        }
      },
      handleFileDrop(event) {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file) {
          this.imageUrl = URL.createObjectURL(file);
        }
      },
      openFileInput() {
        this.$refs.fileInput.click(); // Ensure that fileInput is defined before accessing click method
      }
    }
  };
  </script>
  
  <style scoped>
  .admin-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    height: calc(100vh - 12cm); /* Subtracting 6cm for the height of containers */
    padding: 0 5cm; /* Adding 5cm padding on both sides */
  }
  
  .form-container, .upload-container {
    width: 100%;
    height: calc(100% + 3cm); /* Adjusting height of containers */
    margin-bottom: 30px;
  }
  
  label {
    font-weight: bold;
  }
  
  .form-control {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 1px;
    outline: none;
  }
  
  textarea {
    resize: vertical;
  }
  
  .drag-drop-area {
    border: 2px dashed #ccc;
    border-radius: 10px;
    padding: 5px;
    text-align: center;
    cursor: pointer;
  }
  
  .drag-drop-icon {
    width: 100px;
    height: 100px;
    margin-bottom: 5px;
  }
  
  .share-button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #50C878;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    outline: none;
    font-weight: bold;
  }
  </style>
  