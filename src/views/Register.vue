<template>
  <div id="register-page">
    <div class="container">
      <div class="row justify-content-center">
        <!-- Register Form -->
        <div class="col-md-6">
          <div class="card mt-5"> <!-- Add top margin -->
            <div class="card-body">
              <h5 class="card-title text-center mb-4">Register</h5>
              <!-- Registration form -->
              <form @submit.prevent="registerUser">
                <div class="mb-4">
                  <label for="email" class="form-label">Email address</label>
                  <input type="email" class="form-control form-control-lg" v-model="email" id="email" aria-describedby="emailHelp" required>
                </div>
                <div class="mb-4">
                  <label for="password" class="form-label">Password</label>
                  <input type="password" class="form-control form-control-lg" v-model="password" id="password" required>
                </div>
                <div class="mb-4">
                  <label for="confirm-password" class="form-label">Confirm Password</label>
                  <input type="password" class="form-control form-control-lg" v-model="confirmPassword" id="confirm-password" required>
                </div>
                <button type="button"  @click="signup" class="btn btn-success btn-lg btn-block">Register</button>
              </form>
              <p class="text-center mt-4 mb-5"> <!-- Add bottom margin -->
                Already a user? <router-link to="/Login">Already part of Spiza?</router-link>
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
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  methods: {
    signup() {
      if (this.password === this.confirmPassword) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(() => {
            console.log("Successful registration");
            // Redirect to login page
            console.log("Navigating to login page...");
            this.$router.push("/Login");
          })
          .catch(function(error) {
            console.log("An error occurred", error);
          });
      } else {
        console.log("Passwords do not match");
      }
    }
  }
};
</script>


<style lang="scss">
#register-page {
  background-color: #50C878;
  min-height: calc(100vh - 8cm); /* Subtract 3cm from top and bottom */
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

.btn-success {
  background-color: #28a745;
  border-color: #28a745;
}

.btn-success:hover {
  background-color: #218838;
  border-color: #218838;
}
</style>
