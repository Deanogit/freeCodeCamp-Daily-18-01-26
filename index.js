// Free Shipping
// Given an array of strings representing items in your shopping cart, and a number for the minimum order amount to qualify for free shipping, determine if the items in your shopping cart qualify for free shipping.

// The given array will contain items from the list below:

// Item	Price
// "shirt"	34.25
// "jeans"	48.50
// "shoes"	75.00
// "hat"	19.95
// "socks"	15.00
// "jacket"	109.95

function getsFreeShipping(cart, minimum) {
  console.log(cart, minimum);

  // find prices from items
  const list = {
    shirt: 34.25,
    jeans: 48.5,
    shoes: 75.0,
    hat: 19.95,
    socks: 15.0,
    jacket: 109.95,
  };

  // setup counter
  let counter = 0;

  // loop through cart
  for (let i = 0; i < cart.length; i++) {
    if (list[cart[i]]) {
      counter += list[cart[i]];
    }
  }

  console.log(counter);
  return counter > minimum;
  //return cart;
}
