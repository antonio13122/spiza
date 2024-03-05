<template>
  <div class="admin-container">
    
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
      <!-- Dropdown menu za kategoriju -->
      <div class="form-container">
        <label for="productCategory" style="color: lightgray;">Select the category:</label>
        <select id="productCategory" v-model="productCategory" class="form-control">
          <option value="Restauraunt">Restauraunt</option>
          <option value="Bakery">Bakery</option>
          <option value="Market">Market</option>
        </select>
      </div>
      <!-- potvrdi detalje -->
      <button class="share-button" type="submit" >Share your meal</button>
    </form>

    <!-- image upload -->
    <div class="upload-container">
      <input type="file" @change="handleFileUpload" accept="image/*" ref="fileInput" style="display: none">
      <div class="drag-drop-area"
           @dragover.prevent
           @drop="handleFileDrop"
           @click="openFileInput">
        <img src="@/assets/draganddrop.png" alt="Drag and drop icon" class="drag-drop-icon">
        <p>Drag & Drop or Click to Upload Image</p>
      </div>
      <!-- uploadanje photo -->
      <button class="share-button" @click="uploadPhoto">Upload Photo</button>
    </div>
    <button class="transition-button" @click="transitionEffect">
      <img src="@/assets/swipe2.png" alt="Remove Admin Page" class="transition-image">
    </button>
    <p class = "remove-text">Made a mistake? Remove the meal.</p>
  </div>
</template>

<script>
import { db, storage } from '@/firebase'; 

export default {
  data() {
    return {
      productName: '',
      productDescription: '',
      productPrice: '',
      productCategory: '',
      imageUrl: '' //spremi url slike
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
      
      if (this.imageUrl) {
        
        const storageRef = storage.ref();
        const fileRef = storageRef.child(this.imageUrl.name);
        
        fileRef.put(this.imageUrl).then(() => {
          // dohvati url
          fileRef.getDownloadURL().then(url => {
            console.log('Image uploaded successfully');
            // reset inputa
            this.$refs.fileInput.value = '';
            this.imageUrl = ''; // Reset the image URL
            
            // check
            this.submitForm(url);
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
    submitForm(imageUrl) {
      // ovisno o kategoriji spremi u collection
      let collectionName = '';
      switch (this.productCategory) {
        case 'Restauraunt':
          collectionName = 'restaurantProducts';
          break;
        case 'Bakery':
          collectionName = 'bakeryProducts';
          break;
        case 'Market':
          collectionName = 'marketProducts';
          break;
        default:
          console.error('Invalid category');
          return;
      }
      
      
      let productDetails = {
        productName: this.productName,
        productDescription: this.productDescription, 
        productPrice: this.productPrice,
        imageUrl: imageUrl
      };

      // dodaj u kolekciju
      db.collection(collectionName).add(productDetails)
        .then(() => {
          console.log('Product added successfully');
          // reset forme
          this.productName = '';
          this.productDescription = '';
          this.productPrice = '';
          this.productCategory = '';
          this.imageUrl = ''; // za resetiranje
          this.$refs.fileInput.value = ''; // -||-
        })
        .catch(error => {
          console.error('Error adding product: ', error);
        });
    },
    transitionEffect() {
  const transitionElement = document.querySelector('.admin-container');
  transitionElement.classList.add('slide-out-right');
  console.log('Transition effect triggered');
  setTimeout(() => {
    this.$router.push('/removeAdmin');
  }, 500); // adjusting
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
  text-align:center;
}

.form-container {
  margin-bottom: 20px;
}

.share-button:hover {
  background-color: #12543A;
  color: white;
}

.drag-drop-area {
  border: 2px dashed #ccc;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  margin-bottom: 20px;
  margin-top:-14px;
}

.drag-drop-icon {
  width: 100px;
  height: 100px;
  margin-bottom: 5px;
}

.share-button {
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 10px 20px;
  background-color: white;
  color: #50C878;
  border: 2px solid #50C878;
  border-radius: 20px;
  cursor: pointer;
  outline: none;
  font-weight: bold;
  display: inline-block;
}
.transition-button {
  margin-top: 10px;
  margin-bottom: -30px;
  padding: 10px 20px;
  background-color: #50C878;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  text-decoration: none; 
  display: inline-block;
}
.upload-container {
  margin-top: 35px;
}


.slide-out-right {
  animation-name: slideOutRight;
  animation-duration:0.5s;
  animation-timing-function: ease-out;
}
@keyframes slideOutRight{
  0% {
    transform: translateX(0);
  }
  100%{
    transform:translateX(-100%);
  }
}
</style>
