class VehicleConstructor {
    constructor(numWheels, name, numPassengers, noise, speed){
        this.numWheels = numWheels;
        this.name = name;
        this.numPassengers = numPassengers;
        this.noise = noise
        this.speed = speed
        this._distance = 0;
        // var distance = 0;
        // this.getDistance = () => (distance);
        // this.setDistance = (newDistance) => {distance=newDistance};
    }
    makenoise(){
        return this.noise;
    }

    addPassenger(num){
        this.numPassengers += num

    }
    get distTraveled(){
        return this._distance 
    }
    
    travel(){
        this._distance += this.speed
    }
    move(){
        console.log(this.travel());
        console.log(this.makenoise());
    }

}

const bike = new VehicleConstructor(2,"Triky", 1, 'beep', 2)

// console.log(bike.noise)

bike.noise = "ring, ring!"

// console.log(bike.noise)

console.log(bike.makenoise)

const bus = new VehicleConstructor(8,"Magic School Bus", 1, 'HONK!', 25)


bus.addPassenger(4)
console.log(bus.numPassengers)

bus.travel()
console.log(bus.move())




