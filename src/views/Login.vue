<template>
    <div id="login-page">
      <div class="container">
        <div class="row justify-content-center align-items-start"> <!-- Align items to start -->
          <!-- Login Form -->
          <div class="col-md-6"> <!-- Increase column size -->
            <div class="card">
              <div class="card-body">
                <h5 class="card-title text-center mb-4">Login</h5>
                <!-- Login form -->
                <form @submit.prevent="loginUser">
                  <div class="mb-4"> <!-- Increase margin -->
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control form-control-lg" v-model="email" id="email" aria-describedby="emailHelp" required> <!-- Increase input size -->
                  </div>
                  <div class="mb-4"> <!-- Increase margin -->
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control form-control-lg" v-model="password" id="password" required> <!-- Increase input size -->
                  </div>
                  <button type="button"  @click="login()" class="btn btn-primary btn-lg btn-block">Login</button> <!-- Increase button size -->
                </form>
                <p class="mt-4"> <!-- Increase margin -->
                  <router-link to="/Register">Not a part of spiza yet?</router-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { firebase } from "@/firebase";
  export default {
    name: "login",
    data(){
      return{
        email:"",
        password:""
      }
    },
    methods:{
      login() {
			console.log("login..." + this.email);
			firebase
				.auth()
				.signInWithEmailAndPassword(this.email, this.password)
				.then((result) => {
					if (firebase.auth().currentUser.emailVerified) {
						// this.$router.replace({ name: "Home" });
						store.currentUser = firebase.auth().currentUser.email;
					} else {
						console.log("email is not verified");
						firebase
							.auth()
							.signOut()
							.then(() => {
								this.$router.push({ name: "Admin" });
							});
					}
				})
				.catch((e) => {
					console.error(e.message);
					this.errorMessage = e.message;
				})
				.catch((e) => {
					console.error(e.message);
					this.errorMessage = e.message;
				});

      }
    }
  }
  </script>
  
  <style lang="scss">
  #login-page {
    background-color: #50C878;
    min-height:  calc(100vh - 8cm); 
    display: flex;
    justify-content: center;
    align-items: flex-start; 
    font-family: 'Poppins', sans-serif;
  }
  
  .card {
    border: none;
    border-radius: 15px;
    margin: 10px;
  }
  
  .card-title {
    color: #fff;
  }
  
  .card-body {
    background-color: #fff;
    border-radius: 15px;
    padding: 30px; 
  }
  
  .form-label {
    color: #000;
  }
  
  .btn-primary {
    background-color: #50C878;
    border-color: #50C878;
  }
  
  .btn-primary:hover {
    background-color: #509e6b;
    border-color: #509e6b;
  }
  </style>
  