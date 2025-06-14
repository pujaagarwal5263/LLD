abstract class ProcessOrder {
    // we dont allow to override the process method - as we want to keep the same order of the steps
    // for saving it from override in TS - we can move this order in a private function and call it in process
    // its fine for understanding the pattern - we use final for this in java
    process(): void {
        this.verifyOrder();
        this.trackOrder();
        this.assignDelivery();
    }

    // below are the abstract methods that will be implemented by the subclasses

    abstract verifyOrder(): void;

    abstract trackOrder(): void;

    abstract assignDelivery(): void;
}

class ProcessLocalOrder extends ProcessOrder {
    verifyOrder(): void {
        console.log("Verifying local order");
    }

    trackOrder(): void {
        console.log("Tracking local order");
    }

    assignDelivery(): void {
        console.log("Assigning delivery for local order");
    }

}

class ProcessInternationalOrder extends ProcessOrder {
    verifyOrder(): void {
        console.log("Verifying international order");
    }

    trackOrder(): void {
        console.log("Tracking international order");
    }

    assignDelivery(): void {
        console.log("Assigning delivery for international order");
    }
}

const processLocalOrder = new ProcessLocalOrder();
processLocalOrder.process();

const processInternationalOrder = new ProcessInternationalOrder();
processInternationalOrder.process();
