## Shopping Cart Validator

A retail logic utility that calculates the total value of a collection of items and compares it against a threshold for promotional eligibility (free shipping).

### The Process Flow

The function allows a standard **Accumulator Pattern**:

    1. Price Map: We store the item data in a dictionary (Object) for O(1) constant-time lookups.

    2. Aggregation: We iterate through the shopping cart array. For each item found, we "lookup" it's price and add it to our running total.

    3. Threshold Comparison: Finally, we evaluate a boolean expression to see if the total meets or exceeds the target amount.

### Implementation

```JavaScript

function getFreeShipping(cart, minimum) {
    // 1. Price dictionary
    const list = {
        shirt: 34.25,
        jeans: 48.5,
        shoes: 75.0,
        hat: 19.95,
        socks: 15.0,
        jacket: 109.95,
    };

    let total = 0;

    // 2. Loop and Add
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        if (list[item]) {
            total += list[item]
        }
    }

    // 3. Check against threshold (>= usually includes the minimum itself)
    return total >= minimum;
}

```

### What I Learned

1. Accumulator Pattern
   I learned how to use a `total` variable outside of a loop to gather data from inside the loop. This is the foundation of almost every financial calculation software.

2. Guarding against Missing Data
   By using `if (list[cart[i]])`, I ensured that if a user add an item to the cart that doesn't exist in my price list, the code won't crash or add `undefined` (which would result in `NaN`).

3. Inclusive Comparisons
   I practiced the difference between "Greater Than" and "Greater Than or Equal To." In buisness logic, being precise about inclusive boundaries (like shipping thresholds) is vital for accuracy.
