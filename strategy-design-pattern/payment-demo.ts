interface PaymentStrategy {
    pay(amount: number): void;
}

class CreditCardPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paid ${amount} with credit card`);
    }
}

class PayPalPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paid ${amount} with PayPal`);
    }
}

// which calls the pay method of the payment strategy
class PaymentProcessor {
    private paymentStrategy: PaymentStrategy;

    constructor(paymentStrategy: PaymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }

    processPayment(amount: number): void {
        this.paymentStrategy.pay(amount);
    }
}

// which creates the payment strategy instance based on the payment method
class PaymentFactory {
    static createPaymentStrategy(paymentMethod: string): PaymentStrategy {
        switch (paymentMethod) {
            case 'credit-card':
                return new CreditCardPayment();
            case 'paypal':
                return new PayPalPayment();
            default:
                throw new Error(`Invalid payment method: ${paymentMethod}`);
        }
    }
}

const payemntInstance = PaymentFactory.createPaymentStrategy('credit-card');
const paymentProcessor = new PaymentProcessor(payemntInstance);
paymentProcessor.processPayment(100);
