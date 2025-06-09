class PaymentGatewayManager {
    constructor() {
      if (PaymentGatewayManager.instance) {
        return PaymentGatewayManager.instance;
      }
      console.log("Payment Gateway Manager initialized.");
      PaymentGatewayManager.instance = this;
    }
  
    processPayment(amount) {
      console.log(`Processing payment of $${amount} through the payment gateway.`);
    }
  
    static getInstance() {
      if (!PaymentGatewayManager.instance) {
        PaymentGatewayManager.instance = new PaymentGatewayManager();
      }
      return PaymentGatewayManager.instance;
    }
  }
  
  // Main simulation
  const pg1 = PaymentGatewayManager.getInstance();
  pg1.processPayment(100.0);
  
  const pg2 = PaymentGatewayManager.getInstance();
  
  if (pg1 === pg2) {
    console.log("Both instances are the same. Singleton pattern is working.");
  } else {
    console.log("Singleton pattern is not working correctly.");
  }

  
  // we dont need DCL here - because JS is single threaded