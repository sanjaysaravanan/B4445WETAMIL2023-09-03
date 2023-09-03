
const Car = {
  displayInfo: function (from, to) {
    console.log(`${this.model} Car from ${this.brand} from ${from} to ${to}`);
  }
}


const CarTwo = {
  model: 'SUV',
  brand: 'Audi',
}

// bind used to take method refernce of one object and bind it another
// bind is also used to retain the this/self reference when passed as a callback
let displayInfo = Car.displayInfo.bind(CarTwo);

displayInfo();

Car.displayInfo.call(CarTwo);

Car.displayInfo.apply(CarTwo);


Car.displayInfo.call(CarTwo, 'Chennai', 'Bengaluru');

Car.displayInfo.apply(CarTwo, ['Chennai', 'Bengaluru']);




