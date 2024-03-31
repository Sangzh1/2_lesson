//class
class Car {
     constructor(brand, year) {
       this.brand = brand;
       this.year = year;
     }
   //display info
     displayInfo() {
       console.log(`Brand: ${this.brand}, Year: ${this.year}`);
     }
   }
   
   class ElectricCar extends Car {
     constructor(brand, year, batteryLife) {
       super(brand, year);
       this.batteryLife = batteryLife;
     }
   }
   
   let car1 = new Car("Toyota", 2020);
   let car2 = new Car("Honda", 2018);
   
   let electricCar1 = new ElectricCar("Tesla", 2021, "300 miles");
   
   car1.displayInfo();
   car2.displayInfo();
   electricCar1.displayInfo();
   