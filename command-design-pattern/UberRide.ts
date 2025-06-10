interface RideAction {
  execute(): void;
}

class StartRideCommand implements RideAction {
  params: RideReceiver;
  passanger: string;
  src: string;
  dest: string;
  constructor(
    params: RideReceiver,
    passanger: string,
    dest: string,
    src: string
  ) {
    this.params = params;
    this.passanger = passanger;
    this.dest = dest;
    this.src = src;
  }

  execute(): void {
    this.params.startRide(this.passanger, this.src, this.dest);
  }
}

class CancelRideCommand implements RideAction {
  params: RideReceiver;
  passanger: string;
  src: string;
  dest: string;
  constructor(
    params: RideReceiver,
    passanger: string,
    dest: string,
    src: string
  ) {
    this.params = params;
    this.passanger = passanger;
    this.dest = dest;
    this.src = src;
  }

  execute(): void {
    this.params.cancelRide(this.passanger, this.src, this.dest);
  }
}

class RideReceiver {
  startRide(passanger: string, dest: string, src: string): void {
    console.log(`Ride started from ${src} to ${dest} for ${passanger}`);
  }

  cancelRide(passanger: string, dest: string, src: string): void {
    console.log(`Ride cancelled from ${src} to ${dest} for ${passanger}`);
  }
}

class RideInvoker {
    // takes in RideAction: RideInvoker has-a RideAction
  processCommand(action: RideAction) {
    action.execute();
  }
}

//create a receiver
const rcv = new RideReceiver();

//create a invoker
const invoker = new RideInvoker();

// create start and cancel ride commands
const startCmd = new StartRideCommand(rcv, "puja", "sgnr", "blr");
const cancelCmd = new CancelRideCommand(rcv, "puja", "sgnr", "blr");

// process the requests
invoker.processCommand(startCmd);
invoker.processCommand(cancelCmd);
