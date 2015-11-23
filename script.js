var makeCar = function(model, color){
  var car = {}
  car.model = model,
  car.color = color,
  car.fuel = 100,
  car.drive = function() {
    this.fuel--;
    return 'Vroom!';
    },
  car.refuel = function() {
    this.fuel = 100;
    }
  return car; //REMEMBER - NO IMPLICIT RETURNS IN JS FML
}

asdf = makeCar("asdf", "asdf")

////////////////////////////////////////

function Car(model, color){
  this.model = model;
  this.color = color;
}

Car.prototype = { //overwrites
  fuel: 100,
  drive: function() { //key takeaway - var asdf = new Car(model, color) -- new will set *this* to the Object
    this.fuel--;
    return 'Vroom!';
  },
  refuel: function(){
    this.fuel = 100;
    return 'refueled!'
  }
}
