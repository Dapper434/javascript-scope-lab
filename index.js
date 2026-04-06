//  Global scope variables
const burgers = ['Hamburger', 'Cheeseburger'];  // const, not var
let featuredDrink = 'Strawberry Milkshake';      // let, not var

// Function-scoped variable
function addBurger() {
  var newBurger = 'Flatburger';
  burgers.push(newBurger);
}

// Block-scoped variable
if (true) {
  let anotherNewBurger = 'Maple Bacon Burger';
  burgers.push(anotherNewBurger);
}

// Change featured drink
function changeFeaturedDrink() {
  featuredDrink = 'The JavaShake';
}