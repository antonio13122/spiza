<template>
    <div class="ibox-content">
                        <div class="table-responsive">
                            <table class="table shoping-cart-table">
                                <tbody>
                                  <tr v-for="(item, index) in cartItems" :key="index">
                      <td width="90">
                        <img :src="item.imageUrl" class="cart-product-img" :alt="item.title">
                      </td>
                      <td class="desc">
                        <h3>
                          <a v-bind:href="item.title" class="text-navy"> {{ item.title }} </a>
                        </h3>
                        <div class="m-t-sm">
                          |
                          <a href="#" class="text-muted" @click="removeItem(index)"><i class="fa fa-trash"></i> Remove item</a>
                        </div>
                      </td>
                      
                      <td width="65">
                        <input type="text" class="form-control" v-model="item.quantity" placeholder="1">
                      </td>
                      <td><h4>{{ item.price * item.quantity }}</h4></td>
                    </tr>
                                </tbody>
                            </table>
                          </div>
    <button v-if="cartNotEmpty" class="btn btn-primary" @click="showPaymentPopup">Proceed to Payment</button>
    <Final v-if="showPayment" @close="hidePaymentPopup" @payment-success="handlePaymentSuccess" />
    <!-- Display "Thanks for your payment!" message -->
    <div v-if="paymentSuccessful" class="payment-success-message">
      Thanks for your payment!
    </div>
  </div>
</template>
  <script>
  import { mapGetters } from 'vuex';
  import Final from '@/components/Final.vue';
  
  export default {
    components:{
      Final
    },
    data(){
      return{
        showPayment: false,
        paymentSuccesful:false
      };
    },
    computed: {
      ...mapGetters(['cartItems', 'total']),
      cartNotEmpty() {
      return this.cartItems.length > 0;
      }
    },
     methods: {
    showPaymentPopup() {
      this.showPayment = true; // Show payment popup when button is clicked
    },
    hidePaymentPopup() {
      this.showPayment = false; // Hide payment popup
    },
    handlePaymentSuccess() {
      // Logic to handle successful payment
      console.log('Payment successful!');
      this.paymentSuccessful = true;
      this.hidePaymentPopup();
    },
    removeItem(index) {
      // Implement remove item logic
    }
  }
};
  </script>
  
  <style scoped>


body{margin-top:20px;
    background:#eee;
}
h3 {
    font-size: 16px;
}
.text-navy {
    color: #1ab394;
}
.cart-product-imitation {
  text-align: center;
  padding-top: 30px;
  height: 80px;
  width: 80px;
  background-color: #f8f8f9;
}
.cart-product-img {
  width: 80px;
  height: auto;
}
.payment-success-message {
  text-align: center;
  margin-top: 20px;
  color: green; 
}
.product-imitation.xl {
  padding: 120px 0;
}
.container-fluid{
    min-height: 90vh;
}
.col-md-12{
    color:rgba(255,255,255,0.8);
}
  

.ecommerce .note-editor {
  border: 1px solid #e7eaec;
}
table.shoping-cart-table {
  margin-bottom: 0;
}
table.shoping-cart-table tr td {
  border: none;
  text-align: right;
}
table.shoping-cart-table tr td.desc,
table.shoping-cart-table tr td:first-child {
  text-align: left;
}
table.shoping-cart-table tr td:last-child {
  width: 80px;
}
.ibox {
  clear: both;
  margin-bottom: 25px;
  margin-top: 0;
  padding: 0;
}
.ibox.collapsed .ibox-content {
  display: none;
}
.ibox:after,
.ibox:before {
  display: table;
}
.ibox-title {
  background-color: #ffffff;
  color: #50C878; /* Text color */
  border-color: #50C878; /* Border color */
  border-style: solid;
  border-width: 3px 0 0;
  margin-bottom: 0;
  padding: 14px 15px 7px;
  min-height: 48px;
}
.ibox-content {
  background-color: #ffffff;
  color: inherit;
  padding: 15px 20px 20px 20px;
  border-color: #e7eaec;
  border-image: none;
  border-style: solid solid none;
  border-width: 1px 0;
}


</style>
