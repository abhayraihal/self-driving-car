const canvas = document.getElementById("myCanvas");
canvas.width=200;

const ctx = canvas.getContext("2d");
const car = new Car(100,100,30,50);
car.draw(ctx);

animate();

function animate(){
    car.update();
    canvas.height = window.innerHeight;  // canvas gets cleared, then height of road is set, so previous car is removed from track
    car.draw(ctx);
    requestAnimationFrame(animate);  // this calls the animate function again and again, giving illusion of movement of car
}