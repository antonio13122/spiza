<template>
  <div class="container">
    <div v-if="!submitted">
    <form id="contact" @submit.prevent="submitForm">
      <h3 class="contact-heading">Contact us</h3>
      <fieldset>
        <input placeholder="Your name" type="text" v-model="name" required>
      </fieldset>
      <fieldset>
        <input placeholder="Your Email Address" type="email" v-model="email" required>
      </fieldset>
      <fieldset>
        <input placeholder="Your Phone Number (optional)" type="tel" v-model="phone">
      </fieldset>
      <fieldset>
        <textarea placeholder="Type your message here...." v-model="message" type="text" required></textarea>
      </fieldset>
      <fieldset>
        <button type="submit">Submit</button>
      </fieldset>
    </form>
  </div>
  <div v-else>
    <h3>Thank you for your message!</h3>
    <p>We are happy that you want to become part of Spiza</p>
    </div>
  </div>

  
</template>

  
<style scoped>
.contact-heading {
  color: #50C878;
}
.container {
  width: 70%;
  margin: 0 auto;
}

#contact {
  background: #F9F9F9;
  color: #50C878;
  padding: 35px;
  width: 700px; 
  margin: auto; 
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}

#contact h3 {
  font-size: 45px;
  color: #50C878;
  margin-bottom: 15px;
}

fieldset {
  margin: 0 0 15px;
}

input[type="text"],
input[type="email"],
input[type="tel"],
input[type="url"],
input[type="text"],
textarea {
  width: calc(100% - 30px); 
  border: 2px solid #ccc;
  background: #FFF;
  margin: 0 0 10px;
  padding: 15px;
  font-size: 18px;
}

input:hover,
textarea:hover {
  border-color: #aaa;
  transition: border-color 0.3s ease-in-out;
}

textarea {
  height: calc(100% - 150px);
  max-width: 100%;
  resize: none;
}

button[type="submit"] {
  width: calc(100% - 30px); 
  border: none;
  background: #50C878;
  color: #FFF;
  margin: 0 0 10px;
  padding: 15px;
  font-size: 22px;
}

button:hover {
  background: #43A047;
  transition: background 0.3s ease-in-out;
}

button:active {
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
}

#contact input:focus,
#contact textarea:focus {
  outline: 0;
  border: 2px solid #aaa;
}

::-webkit-input-placeholder {
  color: #888;
}

:-moz-placeholder {
  color: #888;
}

::-moz-placeholder {
  color: #888;
}

:-ms-input-placeholder {
  color: #888;
}
</style>

  <script>
  import { db } from "@/firebase"
  export default {
    data() {
      return{
        name: '',
        email:'',
        phone:'',
        message:'',
        submitted: false //da se vidi ko je submitted
      }
      
    },
    methods: {
      submitForm(){
        let userMessages2 ={
          name : this.name,
          email : this.email,
          phone: this.phone,
          message: this.message
        }
        db.collection('userMessages2').add(userMessages2)
      .then(() => {
        this.submitted = true;

      })
      .catch(error=>{
        console.error("Error when submiting",error);
      });  //s then/catch radi, možemo da se funnkcija izvede tek kada se uspješno uploada
      }
    }

  }
  </script>
  
