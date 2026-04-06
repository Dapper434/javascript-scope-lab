// Write your solution in this file!
//  Global scope variables
var burgers = ['Hamburger', 'Cheeseburger'];
var featuredDrink = 'Strawberry Milkshake';

// Function-scoped variable
function addBurger() {
  var newBurger = 'Flatburger';        // function-scoped (var)
  burgers.push(newBurger);
}

//  Block-scoped variable
if (true) {
  let anotherNewBurger = 'Maple Bacon Burger';   // block-scoped (let)
  burgers.push(anotherNewBurger);
}

//  Change featured drink
function changeFeaturedDrink() {
  featuredDrink = 'The JavaShake';
}