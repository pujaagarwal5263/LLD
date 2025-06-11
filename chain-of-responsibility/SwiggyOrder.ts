// Define the abstract base class for order handlers.
abstract class OrderHandler {
    protected nextHandler: OrderHandler | null;

    constructor(nextHandler: OrderHandler | null) {
        this.nextHandler = nextHandler;
    }

    abstract processOrder(order: string): void;
}

// Concrete handler for order validation.
class OrderValidationHandler extends OrderHandler {
    constructor(nextHandler: OrderHandler | null) {
        super(nextHandler);
    }

    processOrder(order: string): void {
        console.log(`Validating order: ${order}`);
        // Order validation logic here

        if (this.nextHandler) {
            this.nextHandler.processOrder(order);
        }
    }
}

// Concrete handler for payment processing.
class PaymentProcessingHandler extends OrderHandler {
    constructor(nextHandler: OrderHandler | null) {
        super(nextHandler);
    }

    processOrder(order: string): void {
        console.log(`Processing payment for order: ${order}`);
        // Payment processing logic here

        if (this.nextHandler) {
            this.nextHandler.processOrder(order);
        }
    }
}

// Concrete handler for order preparation.
class OrderPreparationHandler extends OrderHandler {
    constructor(nextHandler: OrderHandler | null) {
        super(nextHandler);
    }

    processOrder(order: string): void {
        console.log(`Preparing order: ${order}`);
        // Order preparation logic here

        if (this.nextHandler) {
            this.nextHandler.processOrder(order);
        }
    }
}

// Concrete handler for delivery assignment.
class DeliveryAssignmentHandler extends OrderHandler {
    constructor(nextHandler: OrderHandler | null) {
        super(nextHandler);
    }

    processOrder(order: string): void {
        console.log(`Assigning delivery for order: ${order}`);
        // Delivery assignment logic here

        if (this.nextHandler) {
            this.nextHandler.processOrder(order);
        }
    }
}

// Concrete handler for order tracking.
class OrderTrackingHandler extends OrderHandler {
    constructor(nextHandler: OrderHandler | null) {
        super(nextHandler);
    }

    processOrder(order: string): void {
        console.log(`Tracking order: ${order}`);
        // Order tracking logic here
    }
}

// Main
const orderProcessingChain: OrderHandler = new OrderValidationHandler(
    new PaymentProcessingHandler(
        new OrderPreparationHandler(
            new DeliveryAssignmentHandler(
                new OrderTrackingHandler(null)
            )
        )
    )
);

// here we can write a function setSuccessor in OrderHandler interface
// and implement in concrete interfaces to setSuccesor based on true or false condition
// every handler can set their successor in this function making it flexible in runtime

const order = "Pizza";
orderProcessingChain.processOrder(order);
