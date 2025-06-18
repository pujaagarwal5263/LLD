// this design pattern is used to add new features to an existing object without modifying its structure.
// and keeping the original object structure intact and features to be flexible.

interface FoodItem {
    getPrice(): number;
    getDescription(): string;
}

class Burger implements FoodItem {
    getPrice(): number {
        return 100;
    }
    getDescription(): string {
        return "Burger";
    }
}

class Pizza implements FoodItem {
    getPrice(): number {
        return 200;
    }
    getDescription(): string {
        return "Pizza";
    }
}

abstract class Decorator implements FoodItem {
    constructor(protected foodItem: FoodItem) {}
    getPrice(): number {
        return this.foodItem.getPrice();
    }
    getDescription(): string {
        return this.foodItem.getDescription();
    }
}

class CheeseDecorator extends Decorator {
    constructor(foodItem: FoodItem) {
        super(foodItem);
    }
    getPrice(): number {
        return this.foodItem.getPrice() + 30;
    }
    getDescription(): string {
        return this.foodItem.getDescription() + " with Cheese";
    }
}

class SauceDecorator extends Decorator {
    constructor(foodItem: FoodItem) {
        super(foodItem);
    }
    getPrice(): number {
        return this.foodItem.getPrice() + 10;
    }
    getDescription(): string {
        return this.foodItem.getDescription() + " with Sauce";
    }
}

let pizza = new Pizza();
pizza = new CheeseDecorator(pizza);
pizza = new SauceDecorator(pizza);

console.log(pizza.getDescription());
console.log(pizza.getPrice());

let burger = new Burger();
burger = new CheeseDecorator(burger);

console.log(burger.getDescription());
console.log(burger.getPrice());



// ------------------------------
// Pizza with Cheese with Sauce
// 240 (200 price of pizza + 30 price of cheese + 10 price of sauce)
// Burger with Cheese
// 130 (100 price of burger + 30 price of cheese)
// ------------------------------