class Desktop {
    motherboard!: string;
    processor!: string;
    memory!: string;
    storage!: string;
    graphicsCard!: string;

    display(): void {
        console.log("Desktop Specs:");
        console.log("Motherboard:", this.motherboard);
        console.log("Processor:", this.processor);
        console.log("Memory:", this.memory);
        console.log("Storage:", this.storage);
        console.log("Graphics Card:", this.graphicsCard);
    }
}

interface DesktopBuilder {
    buildMotherboard(): void;
    buildProcessor(): void;
    buildMemory(): void;
    buildStorage(): void;
    buildGraphicsCard(): void;
    getDesktop(): Desktop;
}

class DellDesktopBuilder implements DesktopBuilder {
    private desktop: Desktop = new Desktop();

    buildMotherboard(): void {
        this.desktop.motherboard = "Dell Motherboard";
    }

    buildProcessor(): void {
        this.desktop.processor = "Dell Processor";
    }

    buildMemory(): void {
        this.desktop.memory = "32GB DDR4 RAM";
    }

    buildStorage(): void {
        this.desktop.storage = "1TB SSD + 2TB HDD";
    }

    buildGraphicsCard(): void {
        this.desktop.graphicsCard = "NVIDIA RTX 3080";
    }

    getDesktop(): Desktop {
        return this.desktop;
    }
}

class HpDesktopBuilder implements DesktopBuilder {
    private desktop: Desktop = new Desktop();

    buildMotherboard(): void {
        this.desktop.motherboard = "HP Motherboard";
    }

    buildProcessor(): void {
        this.desktop.processor = "Intel Core i5";
    }

    buildMemory(): void {
        this.desktop.memory = "16GB DDR4 RAM";
    }

    buildStorage(): void {
        this.desktop.storage = "512GB SSD";
    }

    buildGraphicsCard(): void {
        this.desktop.graphicsCard = "Integrated Graphics";
    }

    getDesktop(): Desktop {
        return this.desktop;
    }
}

class DesktopDirector {
    buildDesktop(builder: DesktopBuilder): Desktop {
        builder.buildMotherboard();
        builder.buildProcessor();
        builder.buildMemory();
        builder.buildStorage();
        builder.buildGraphicsCard();
        return builder.getDesktop();
    }
}

// Example usage:
const director = new DesktopDirector();

const dellBuilder = new DellDesktopBuilder();
const dellDesktop = director.buildDesktop(dellBuilder);

const hpBuilder = new HpDesktopBuilder();
const hpDesktop = director.buildDesktop(hpBuilder);

dellDesktop.display();
hpDesktop.display();