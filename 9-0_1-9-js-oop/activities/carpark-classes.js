class Car {
    constructor(regPlate, hoursParked){
        this._regPlate = regPlate;
        this._hoursParked = hoursParked;
        this._amtCharged = 0;
    }
    get regPlate(){
        return this._regPlate;
    }
    get hoursParked(){
        return this._hoursParked;
    }
    get amtCharged(){
        return this._amtCharged;
    }
    hourIncrease(){
        this._amtCharged = this._hoursParked * 1.50;
        console.log(`${this._regPlate} parked for ${this._hoursParked} hours costing £${this._amtCharged}`);
    }
  }
  const car1 = new Car("XDJ5X", 5);
  car1.hourIncrease();
  // console.log(car1);
  // console.log(`${car1.regPlate} parked for ${car1.hoursParked} hours costing £${car1.amtCharged}`);

// class Car {
//     constructor(regPlate){
//         this.regPlate = regPlate;
//         this.hoursParked = 0;
//         this.amtCharged = 0;
//     }
//     regPlate(){
//         return this.regPlate;
//     }
//     hoursParked(){
//         return this.hoursParked;
//     }
//     amtCharged(){
//         return this.amtCharged;
//     }
//     hourIncrease(){
//         this.hoursParked++;
//         this.amtCharged += 1.50;
//     }
// }

// const chargeSum = (regPlate, hoursParked) => {
//     const car = new Car(regPlate);
//     for (i=0; i < hoursParked; i++){
//         car.hourIncrease();
//     }
//     console.log(`You need to pay ${car.amtCharged}`)
// }

// chargeSum("RK69 OYM", 5)
// chargeSum("XDJ 5X", 10)