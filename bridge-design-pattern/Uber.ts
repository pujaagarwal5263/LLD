// this design pattern is used to decouple the implementation from the interface.
// and keep the interface and implementation separate, flexible, independent, extensible, maintainable, scalable, testable, reusable.
interface NavigationImplementation {
    navigateTo(location: string): void;
}

class GoogleMaps implements NavigationImplementation {
    navigateTo(location: string): void {
        console.log("Google Maps naviagating to ", location);
    }
}

class AppleMaps implements NavigationImplementation {
    navigateTo(location: string): void {
        console.log("Apple Maps navigating to ", location);
    }
}

// uber eats or uber ride
interface NavigationService {
   navigate(destination: string): void;
   setNavigationImpl(impl: NavigationImplementation): void;
}

class UberEats implements NavigationService {
    private restaurantName: string;
    private navigationImpl: NavigationImplementation;
    
    constructor(restaurantName: string) {
        this.restaurantName = restaurantName;
    }
    
    setNavigationImpl(impl: NavigationImplementation): void {
        this.navigationImpl = impl;
    }
    
    navigate(destination: string): void {
        console.log(`Uber Eats delivery from ${this.restaurantName} to ${destination} using ${this.navigationImpl.constructor.name}.`);
        this.navigationImpl.navigateTo(destination);
    }
}

class UberRide implements NavigationService {  
    private driverName: string;
    private navigationImpl: NavigationImplementation;
    
    constructor(driverName: string) {
        this.driverName = driverName;
    }
    
    setNavigationImpl(impl: NavigationImplementation): void {
        this.navigationImpl = impl;
    }
    
    navigate(destination: string): void {
        console.log(`Uber ride with ${this.driverName} to ${destination} using ${this.navigationImpl.constructor.name}.`);
        this.navigationImpl.navigateTo(destination);
    }
}

// Demo usage
const googleMaps = new GoogleMaps();
const appleMaps = new AppleMaps();

// Create an UberRide with a driver
const uberRide = new UberRide("Keerti");

// Create an UberEats delivery
const uberEats = new UberEats("Pizza Palace");

// Set the navigation implementation for UberRide
uberRide.setNavigationImpl(googleMaps);
uberRide.navigate("Central Park");

uberEats.setNavigationImpl(appleMaps);
uberEats.navigate("123 HSR");


// OUTPUT:
// Uber ride with Keerti to Central Park using GoogleMaps.
// Google Maps naviagating to  Central Park
// Uber Eats delivery from Pizza Palace to 123 HSR using AppleMaps.
// Apple Maps navigating to  123 HSR