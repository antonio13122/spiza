<template>
    <div class="admin-container">
      
      <form id="RemoveProduct" @submit.prevent="submitForm2">
        <div class="form-container">
          <label for="productName" style="color: lightgray;">Enter your meal name</label>
          <input type="text" id="productName" v-model="productName" class="form-control" placeholder="Enter your meal name">
        </div>
        
            <div class="form-container">
        <label for="productCategory" style="color: lightgray;">Select the category:</label>
        <select id="productCategory" v-model="productCategory" class="form-control">
          <option value="Restauraunt">Restauraunt</option>
          <option value="Bakery">Bakery</option>
          <option value="Market">Market</option>
        </select>
        <button class="transition-button" @click="transitionEffect">
      <img src="@/assets/swipe1.png" alt="Remove Admin Page" class="transition-image">
    </button>
    <p class = "remove-text">Want to add another meal?</p>
        </div>
        
        
        <!-- potvrdi detalje -->
        <button class="share-button" type="submit" >Remove meal</button>
      </form>
  </div>
    
  </template>
  
  <script>
  import { db, storage } from '@/firebase'; 
  
  export default {
    data() {
      return {
        productName: '',
        productCategory: '',
      };
    },
    methods: {
      submitForm2() {
        // ovisno o kategoriji briši iz kolekcije
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
        
    
        // dodaj u kolekciju
        db.collection(collectionName)
        .where ('productName', '==', this.productName)
        .get()
        .then(querySnapshot => {
            if(!querySnapshot.empty){
                //obriši
            querySnapshot.forEach(doc => {
                doc.ref.delete()
                .then(() => {
                    console.log('Product removed');
                    this.productName='';
                    this.productCategory='';
                })
            .catch(error =>{
                console.error('Error when removing',error);
            });
        });
    }else {
        console.error('Product not found');
    }
})
.catch(error =>{
    console.error('Error with database',error);
});
},
    transitionEffect() {
  const transitionElement = document.querySelector('.admin-container');
  transitionElement.classList.add('slide-out-right');
  console.log('Transition effect triggered');
  setTimeout(() => {
    this.$router.push('/addAdmin');
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
    margin-bottom: 10px;
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
 
  
  .share-button {
    margin-top: auto;
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
    transform:translateX(100%);
  }
}
  </style>
  