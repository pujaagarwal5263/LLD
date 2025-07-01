// Subsystem 1: CPU
class CPU {
    powerOn(): void {
        console.log("CPU is powered on.");
    }

    executeInstructions(): void {
        console.log("CPU is executing instructions.");
    }
}

// Subsystem 2: Memory
class Memory {
    initialize(): void {
        console.log("Memory is initialized.");
    }
}

// Subsystem 3: GPU
class GPU {
    enableGraphics(): void {
        console.log("GPU graphics are enabled.");
    }
}

// Subsystem 4: Disk Drive
class DiskDrive {
    bootFromDisk(): void {
        console.log("Booting from the disk drive.");
    }
}

// Subsystem 5: Network Interface
class NetworkInterface {
    connectToNetwork(): void {
        console.log("Connected to the network.");
    }
}

// Facade: Computer System
class ComputerSystemFacade {
    private cpu: CPU;
    private memory: Memory;
    private gpu: GPU;
    private diskDrive: DiskDrive;
    private networkInterface: NetworkInterface;

    constructor() {
        this.cpu = new CPU();
        this.memory = new Memory();
        this.gpu = new GPU();
        this.diskDrive = new DiskDrive();
        this.networkInterface = new NetworkInterface();
    }

    startComputer(): void {
        console.log("Starting the computer...");
        this.cpu.powerOn();
        this.memory.initialize();
        this.gpu.enableGraphics();
        this.diskDrive.bootFromDisk();
        this.networkInterface.connectToNetwork();
        this.cpu.executeInstructions();
        console.log("Computer is ready to use.");
    }
}

// Client Code - only need to call the facade method to start the computer.
const computer = new ComputerSystemFacade();
computer.startComputer();
