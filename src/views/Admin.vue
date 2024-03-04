<template>
  <div class="admin-container">
    <!-- Form for entering product details -->
    <form id="Products" @submit.prevent="submitForm2">
      <div class="form-container">
        <label for="productName" style="color: lightgray;">Enter your meal name</label>
        <input type="text" id="productName" v-model="productName" class="form-control" placeholder="Enter your meal name">
      </div>
      <div class="form-container">
        <label for="productDescription" style="color: lightgray;">Describe what meal are you offering today</label>
        <textarea id="productDescription" v-model="productDescription" class="form-control" placeholder="Describe what meal are you offering today"></textarea>
      </div>
      <div class="form-container">
        <label for="productPrice" style="color: lightgray;">Enter the price:</label>
        <input type="number" id="productPrice" v-model="productPrice" class="form-control" placeholder="Enter the price">
      </div>
      <!-- Dropdown menu for selecting category -->
      <div class="form-container">
        <label for="productCategory" style="color: lightgray;">Select the category:</label>
        <select id="productCategory" v-model="productCategory" class="form-control">
          <option value="Restauraunt">Restauraunt</option>
          <option value="Bakery">Bakery</option>
          <option value="Market">Market</option>
        </select>
      </div>
      <!-- Button to submit the product details -->
      <button class="share-button" type="submit" >Share your meal</button>
    </form>

    <!-- Separate form for uploading image -->
    <div class="upload-container">
      <input type="file" @change="handleFileUpload" accept="image/*" ref="fileInput" style="display: none">
      <div class="drag-drop-area"
           @dragover.prevent
           @drop="handleFileDrop"
           @click="openFileInput">
        <img src="@/assets/draganddrop.png" alt="Drag and drop icon" class="drag-drop-icon">
        <p>Drag & Drop or Click to Upload Image</p>
      </div>
      <!-- Button to upload the photo -->
      <button class="share-button" @click="uploadPhoto">Upload Photo</button>
    </div>
  </div>
</template>


<script>
import { db,storage } from '@/firebase'; // Import Firebase storage instance

export default {
  data() {
    return {
      productName: '',
      productDescription: '',
      productPrice: '',
      productCategory: '',
      imageUrl: '' // To store the uploaded image URL
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.imageUrl = file;
      }
    },
    handleFileDrop(event) {
      event.preventDefault();
      const file = event.dataTransfer.files[0];
      if (file) {
        this.imageUrl = file;
      }
    },
    openFileInput() {
      this.$refs.fileInput.click();
    },
    uploadPhoto() {
      // Ensure an image is selected
      if (this.imageUrl) {
        // Upload image to Firebase Storage
        const storageRef = storage.ref();
        const fileRef = storageRef.child(this.imageUrl.name);
        
        fileRef.put(this.imageUrl).then(() => {
          // Get the URL of the uploaded image
          fileRef.getDownloadURL().then(url => {
            console.log('Image uploaded successfully');
            // Reset the file input field after successful upload
            this.$refs.fileInput.value = '';
            this.imageUrl = ''; // Reset the image URL
          }).catch(error => {
            console.error('Error getting download URL: ', error);
          });
        }).catch(error => {
          console.error('Error uploading image: ', error);
        });
      } else {
        console.error('No image selected.');
      }
    },
    submitForm2() {
      let productDetails2 ={
          productName : this.productName,
          productDescription : this.productDescription, 
          productPrice : this.productPrice,
          productCategory : this.productCategory
        }
        db.collection('productDetails2').add(productDetails2)
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
  min-height: calc(100vh - 12cm);
  padding: 0 5cm;
}

.form-container {
  margin-bottom: 10px;
}

.drag-drop-area {
  border: 2px dashed #ccc;
  border-radius: 10px;
  padding: 5px;
  text-align: center;
  cursor: pointer;
  margin-bottom: 20px;
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

.upload-container {
  margin-top: auto;
}
</style>
