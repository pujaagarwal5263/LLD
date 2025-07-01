// Interface: Image
interface Image {
    display(): void;
}

// Real Subject: RealImage
class RealImage implements Image {
    private filename: string;

    constructor(filename: string) {
        this.filename = filename;
        this.loadFromDisk();
    }

    display(): void {
        console.log("Displaying image: " + this.filename);
    }

    private loadFromDisk(): void {
        console.log("Loading image from disk: " + this.filename);
    }
}

// Proxy: ImageProxy
class ImageProxy implements Image {
    private realImage: RealImage | null = null;
    private filename: string;

    constructor(filename: string) {
        this.filename = filename;
    }

    display(): void {
        // image is created only when it is displayed for the first time - not when the proxy is created.
        // lazy loading - the image is loaded only when it is needed.
        if (this.realImage === null) {
            this.realImage = new RealImage(this.filename);
        }
        this.realImage.display();
    }
}

// Client Code
const proxy: Image = new ImageProxy("high_res_image.jpg");

proxy.display(); // Loads and displays the image
proxy.display(); // Only displays, doesn't load again
