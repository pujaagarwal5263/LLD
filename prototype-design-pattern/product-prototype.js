// Base "abstract" class
class ProductPrototype {
    clone() {
      throw new Error("clone() must be implemented by subclass.");
    }
  
    display() {
      throw new Error("display() must be implemented by subclass.");
    }
  }
  
  // Concrete Product class
  class Product extends ProductPrototype {
    constructor(name, price) {
      super();
      this.name = name;
      this.price = price;
    }
  
    clone() {
      return new Product(this.name, this.price);
    }
  
    display() {
      console.log(`Product: ${this.name}`);
      console.log(`Price: $${this.price}`);
    }
  }
  
  // Demo
  const product1 = new Product("Laptop", 999.99);
  const product2 = new Product("Smartphone", 499.99);
  
  // Clone the prototypes
  const newProduct1 = product1.clone();
  const newProduct2 = product2.clone();
  
  console.log("Original Products:");
  product1.display();
  product2.display();
  
  console.log("\nCloned Products:");
  newProduct1.display();
  newProduct2.display();

  
//   print
//   Original Products:
//   Product: Laptop
//   Price: $999.99
//   Product: Smartphone
//   Price: $499.99
  
//   Cloned Products:
//   Product: Laptop
//   Price: $999.99
//   Product: Smartphone
//   Price: $499.99