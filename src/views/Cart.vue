<template>


<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
<div class="container-fluid">
    <div class="wrapper wrapper-content animated fadeInRight">
        <div class="row">
            <div class="col-md-12"> <!-- Changed col-md-9 to col-md-12 to take full width -->
                <div class="ibox">
                    <div class="ibox-title">
                        <span class="pull-right"></span>
                        <h5>Your order:</h5>
                    </div>
                    <div class="ibox-content">
                        <div class="table-responsive">
                            <table class="table shoping-cart-table">
                                <tbody>
                                    <tr v-for="(item,index) in cartItems" :key="index">
                                        <td width="90">
                                            <div class="cart-product-imitation"></div>
                                        </td>
                                        <td class="desc">
                                            <h3>
                                                <a href="#" class="text-navy">{{item.title}}</a>
                                            </h3>
                                            <div class="m-t-sm">
                                                |
                                                <a href="#" class="text-muted"><i class="fa fa-trash"></i> Remove item</a>
                                            </div>
                                        </td>
                                        <td>{{ item.price }}</td>
                                        <td width="65">
                                            <input type="text" class="form-control" placeholder="1">
                                        </td>
                                        <td><h4>{{item.price}}</h4></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="row mt-4"> <!-- Add a margin-top for spacing -->
                <div class="col-md-12 text-right"> <!-- Align total price to the right -->
                    <h4>Total Price: € {{total}}</h4> <!-- Replace XXX.XX with actual total price -->
                </div>
            </div>
            
            <div class="ibox-content">
    <router-link to="/food" class="btn btn-primary pull-right"><i class="fa fa-shopping-cart"></i> Checkout</router-link>
    <router-link to="/Food" class="btn btn-white"><i class="fa fa-arrow-left"></i> Continue shopping</router-link>
</div>

                </div>
            </div>
        </div>
    </div>
</div>
</template>


<script>
import { db } from '@/firebase'; 
import Product from '@/components/Product.vue';
import { storage } from '@/firebase'; 
import { mapState,mapActions } from 'vuex';

 export default{
  computed: {
    ...mapState(['cartItems']),
    total(){
      return this.cartItems.reduce((total,item)=>total + (item.price * item.quantity),0);
    } // Map Vuex cartItems state to component computed property
  },
  methods: {
    ...mapActions(['addToCart']), // Map addToCart action from Vuex store to component methods
  },
  created() {
   
  },
  
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
