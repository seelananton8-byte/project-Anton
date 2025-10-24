function car (brand, model, color){
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.start = function(){
        console.log(`${this.brand} ${this.model} is starting.....`);
    };
}
const car1 = newCar("Toyota", "Corolla", "Silver");
const car2 = newCar("Honda", "Civic", "Black");
car1.start();
car2.start();
