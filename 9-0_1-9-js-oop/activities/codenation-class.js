class Codenation {
    constructor(name,course){
        this._name = name;
        this._course = course;
    }
    get name() {
        return this._name;
    }
    get course() {
        return this._course;
    }
}

class Funding extends Codenation{
    constructor(name, course, fundingMethod){
        super(name, course);
        this._fundingMethod = fundingMethod
    }
    get fundingMethod(){
        return this._fundingMethod;
    }
}


const dannyS = new Funding("Danny", "Master Developer", "Self")
console.log(dannyS)