// const rosie = {
//     // _name: "Rosie",     // _ is not required, old way! If do have to use throughout!!!
//     name: "Rosie",  
//     hops: 0,

//     get name() {
//         return this.name;
//     },

//     get hops() {
//         return this.hops;
//     },

//     increaseHops() {
//         this.hops++;
//     }
// }

class Bunny {
    constructor(name, legs) {
        this.name = name;
        this.hops = 0;
        this.legs = legs;
    }
    name() {                    // didnt like 'get' before name(), only works when _(underscores) are used
        return this.name;
    }
    hops() {
        return this.hops;
    }
    legs() {
        return this.legs;
    }
    increaseHops() {
        this.hops++;
    }
}
const rosie = new Bunny("Rosie", 2);
const stuart = new Bunny("Stuart", 4);
const lizzie = new Bunny("Lizzie", 4);
console.log(rosie.name);
console.log(rosie);

rosie.increaseHops();
console.log(rosie);

console.log(stuart);
console.log(lizzie)
