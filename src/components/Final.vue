<template>
    <div class="payment-popup">
      <div class="popup-container">
        <h2>Payment</h2>
        <p>Please enter your payment details:</p>
        <!-- Payment form -->
        <form @submit.prevent="processPayment">
          <!-- Payment fields -->
          <div class="form-group">
            <label for="cardNumber">Card Number:</label>
            <input type="text" id="cardNumber" v-model="cardNumber" required>
          </div>
          <div class="form-group">
            <label for="expiryDate">Expiry Date:</label>
            <input type="text" id="expiryDate" v-model="expiryDate" required>
          </div>
          <div class="form-group">
            <label for="cvv">CVV:</label>
            <input type="text" id="cvv" v-model="cvv" required>
          </div>
          <!-- Payment button -->
          <button type="submit" class="btn-pay">Pay with card</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Final',
    data() {
      return {
        cardNumber: '',
        expiryDate: '',
        cvv: ''
      };
    },
    methods: {
      processPayment() {
        // You can implement payment processing logic here
        // For example, make an API call to process the payment
        console.log('Payment processed successfully!');
        // After successful payment, you may want to close the popup
        // You can emit an event to the parent component to handle this
        this.$emit('payment-success');
      }
    }
  };
  </script>
  
  <style scoped>
/* Styles for the payment popup */
.payment-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-container {
  background-color: #f9f9f9;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 90%;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  color:#999;
}

.form-group {
  margin-bottom: 20px;
  color: #999;
}

label {
  font-weight: bold;
  color:light-grey;
}

input[type="text"] {
  width: 100%;
  padding: 10px;
  color: #999;
  border: 1px solid #ccc;
  border-radius: 4px;
  
}

button.btn-pay {
  width: 100%;
  padding: 12px;
  background-color: #50C878;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button.btn-pay:hover {
  background-color: #50C878;
}
</style>
  