// Observer interface (conceptual)
class Observer {
    update(order) {
      throw new Error("update() method must be implemented.");
    }
  }
  
  class Customer extends Observer {
    constructor(name) {
      super();
      this.name = name;
    }
  
    update(order) {
      console.log(`Hello, ${this.name}! Order #${order.getId()} is now ${order.getStatus()}.`);
    }
  }
  
  class Restaurant extends Observer {
    constructor(name) {
      super();
      this.restaurantName = name;
    }
  
    update(order) {
      console.log(`Restaurant ${this.restaurantName}: Order #${order.getId()} is now ${order.getStatus()}.`);
    }
  }
  
  class DeliveryDriver extends Observer {
    constructor(name) {
      super();
      this.driverName = name;
    }
  
    update(order) {
      console.log(`Driver ${this.driverName}: Order #${order.getId()} is now ${order.getStatus()}.`);
    }
  }
  
  class CallCenter extends Observer {
    update(order) {
      console.log(`Call center: Order #${order.getId()} is now ${order.getStatus()}.`);
    }
  }
  
  class Order {
    constructor(id) {
      this.id = id;
      this.status = "Order Placed";
      this.observers = [];
    }
  
    getId() {
      return this.id;
    }
  
    getStatus() {
      return this.status;
    }
  
    setStatus(newStatus) {
      this.status = newStatus;
      this.notifyObservers();
    }
  
    attach(observer) {
      this.observers.push(observer);
    }
  
    detach(observer) {
      this.observers = this.observers.filter(obs => obs !== observer);
    }
  
    notifyObservers() {
      this.observers.forEach(observer => observer.update(this));
    }
  }
  
  // Main simulation
  const order1 = new Order(123);
  
  const customer1 = new Customer("Customer 1");
  const restaurant1 = new Restaurant("Rest 1");
  const driver1 = new DeliveryDriver("Driver 1");
  const callCenter = new CallCenter();
  
  order1.attach(customer1);
  order1.attach(restaurant1);
  order1.attach(driver1);
  order1.attach(callCenter);
  
  order1.setStatus("Out for Delivery");
  
  order1.detach(callCenter);
  
  order1.setStatus("Delivered");
  