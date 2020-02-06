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
  
class Staff extends Car {
    constructor(regPlate, hoursParked, staffNumber, creditsRemain){
        super(regPlate, hoursParked);
        this._staffNumber = staffNumber;
        this._creditsRemain = creditsRemain;
    }
    get staffNumber(){
        return this._staffNumber;
    }
    get creditsRemain(){
        return this._creditsRemain;
    }
    staffDiscount(){
        this._amtCharged = (this._hoursParked - this._creditsRemain) * 1.5;
        console.log(`${this._regPlate} parked for ${this._hoursParked} hours costing £${this._amtCharged} after using your ${this._creditsRemain} hour staff discount`)
    }
}

const car = new Staff("XDJ 5X", 10, 9999, 1);
car.staffDiscount()