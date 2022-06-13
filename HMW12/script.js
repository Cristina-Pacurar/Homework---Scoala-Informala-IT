// const CarFleet = function (carName, carColour, productionYear) {
//     this.carName = carName;
//     this.carColour = carColour;
//     this.productionYear = productionYear;
// };


// const volvo = new CarFleet ("volvo", "gray" , 2018);
// const porche = new CarFleet ("porche",  "black", 2020);
// const ford = new CarFleet ("ford", "blue", 2015);

// CarFleet.prototype.calcYear = function () {
//     console.log (`${this.carName} has around ${2022- this.productionYear} years and ${this.carColour} colour`);
// }


// volvo.calcYear();
// porche.calcYear();
// ford.calcYear();

// const MotoFleet = function (motoName, motoColour, motoWheels) {
// 	this.motoName = motoName;
//   this.motoColour = motoColour;
//   this.motoWheels = motoWheels;
// };

// const bmw = new MotoFleet ("bmw motorcycle", "white", "2");
// const honda = new MotoFleet ("honda motorcycle","black", "2");
// const suzuki = new MotoFleet ("suzuki motorcycle", "gray","2");

// MotoFleet.prototype.motoBrand = function (){
// 	console.log (`This is a ${this.motoName} on colour ${this.motoColour} with ${this.motoWheels} wheels`);
// }


// bmw.motoBrand();
// honda.motoBrand();
// suzuki.motoBrand();




// // continuare tema 


// function Fleet (fleetName, fleetNumber) {
//   this.fleetName = fleetName
//   this.fleetNumber = fleetNumber
//   this.fleet = [];
// }

// Fleet.prototype = {
//   add(CarFleet) {
//     this.fleet.push(CarFleet);
//     console.log()
//   }
// };


// let fleetTest = new Fleet ("Car fleet", 2020);

// fleetTest.add(bmw);


const arr1 = [1,2,3];
const arr2 = [4,5,6];
const newArr = [...arr1, 33,...arr2,7]; 
console.log(newArr);

const obj1 = {b:2,a:1,c:3};
const obj2 = {d:4, e:5, f:7, a:8}; 
const newObj = {...obj1,...obj2};
console.log(newObj);









