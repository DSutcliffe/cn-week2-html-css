class Car {
    constructor(make, model, color, doors, regPlate, year, engineSize, transmission, mot, tax){
        this.make = make;
        this.model = model;
        this.color = color;
        this.doors = doors;
        this.regPlate = regPlate;
        this.year = year;
        this.engineSize = engineSize;
        this.transmission = transmission;
        this.mot = mot;
        this.tax = tax;
    }
}

const danny = new Car("Mercedes", "E Coupe", "Rubilette Red", "3", "RK69 OYM", "2019", "3L", "Automatic", true, true)
const andy = new Car("Mini", "Metro", "Poo Brown", "3", "B987 HJG", "1988", "1L", "Manual", false, false)
console.log(danny)
console.log(andy)

console.log(danny.regPlate)
console.log(andy.year)