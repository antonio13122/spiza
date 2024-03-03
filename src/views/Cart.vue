<template>
    <div class="container-fluid">
      <div class="heading">
        <h1>Shopping Cart</h1>
        <a href="#" class="visibility-cart">X</a>    
      </div>
      <div class="cart">
        <div class="table">
          <div class="row th">
            <div class="col col-pro">Product</div>
            <div class="col col-price">Price</div>
            <div class="col col-qty">QTY</div>
            <div class="col">VAT</div>
            <div class="col">Total</div>
          </div>
          <div class="row">
            <div class="col col-pro">
              <img src="http://static.ddmcdn.com/gif/10-kitten-cuteness-1.jpg" alt="kitten">
              <p>Happy Little Critter</p>
            </div>
            <div class="col col-price">£59.99</div>
            <div class="col col-qty">
              <a href="#" class="qty qty-minus">-</a>
              <input type="numeric" value="3">
              <a href="#" class="qty qty-plus">+</a>
            </div>
            <div class="col col-vat">£2.95</div>
            <div class="col col-total">£182.95</div>
          </div>
          <!-- Repeat the above row for each item -->
        </div>
        <a href="#" class="btn-update">Update cart</a>
      </div>
    </div>
  </template>
  
  <style>
  html {
    font-size: 62.5%;
  }
  
  body, .container-fluid {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  
  .container-fluid {
    display: flex;
    flex-direction: column;
  }
  
  .heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #12543A;
    color: #fff;
    padding: 1em;
    border-radius: 0.6em 0.6em 0 0;
  }
  
  .cart {
    background: #fff;
    border-radius: 0 0 0.6em 0.6em;
    padding: 2.5em;
    flex-grow: 1; /* Fill remaining height */
  }
  
  .table {
    width: 100%;
  }
  
  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
  }
  
  .col {
    flex: 1;
    padding: 1em;
  }
  
  .col-pro img {
    max-width: 9em;
  }
  
  .col-qty {
    display: flex;
    align-items: center;
  }
  
  .qty {
    display: inline-block;
    width: 2em;
    height: 2em;
    background: #12543A;
    color: #fff;
    text-align: center;
    line-height: 2em;
    border-radius: 50%;
    margin: 0 0.5em;
  }
  
  .btn-update {
    display: block;
    margin-top: 1.5em;
    padding: 10px 30px;
    border-radius: 0.3em;
    font-size: 1.4em;
    font-weight: bold;
    background:#12543A;
    color: #fff;
    text-align: center;
    text-decoration: none;
  }
  
  .btn-update:hover {
    background: #00BF63;
  }
  
  .visibility-cart {
    font-size: 2em;
    border: 0.16em solid #fff;
    border-radius: 2.5em;
    padding: 0.22em 0.25em;
    text-decoration: none;
    color: #fff;
  }
  </style>
  
<script>
  export default {
    name: 'ShoppingCart',
    data() {
      return {
        items: [
          { name: 'Happy Little Critter', price: 59.99, quantity: 3, vat: 2.95, imgSrc: 'http://static.ddmcdn.com/gif/10-kitten-cuteness-1.jpg' },
          { name: 'Scared Little Kittie', price: 23.99, quantity: 1, vat: 1.95, imgSrc: 'http://lovemeow.com/wp-content/uploads/2012/05/kitten81.jpg' },
          { name: 'Curious Little Begger', price: 59.99, quantity: 3, vat: 2.95, imgSrc: 'http://cdn.cutestpaw.com/wp-content/uploads/2012/04/l-my-first-kitten.jpg' }
        ]
      };
    },
    computed: {
      total() {
        return this.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
      },
      totalVat() {
        return this.items.reduce((acc, item) => acc + (item.vat * item.quantity), 0);
      },
      grandTotal() {
        return this.total + this.totalVat;
      }
    },
    methods: {
      updateQuantity(item, increment) {
        if (increment) {
          item.quantity++;
        } else {
          item.quantity = Math.max(0, item.quantity - 1);
        }
      },
      updatePrice(item) {
        return (item.price * item.quantity) + (item.vat * item.quantity);
      }
    }
  };
</script>
  