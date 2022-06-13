class Vehicle {
    constructor (type,name) {
          this.type = type;
          this.name = name;
    }
    getType = () => {
     return this.type;
    }
};
 
 
class Car extends Vehicle {
    constructor (type, name, year,wheels) { 
        super(type,name,year);
        this.wheels = wheels;
    }
    driveCar = () => {
     console.log (`This ${this.getType()}, ${this.name} with ${this.wheels} wheels is running on the highway! `);
    }
};
    const vehicle1 = new Car ("car", "volvo", 4);
    vehicle1.driveCar();


 class Bus extends Vehicle {
    constructor (type,name,wheels) {
         super(type,name);
         this.wheels = wheels;

    }   
    driveBus = () => {
     console.log(`This ${this.getType()}, ${this.name} with ${this.wheels} wheels is running on the highway!`);
    }   
};
    const vehicle2 = new Bus ("Bus", "Mercedes", 8);
    vehicle2.driveBus();


class Moto extends Vehicle {
    constructor (type,name,wheels){
        super(type,name);
        this.wheels = wheels;
    }    
    driveMoto = () => {
    console.log(`This ${this.getType()}, ${this.name} with ${this.wheels} wheels is running on the highway!`);
    }

};
    const vehicle3 = new Moto ("Moto", "Kawasaki", 2);
    vehicle3.driveMoto();  


