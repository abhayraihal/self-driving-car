const canvas = document.getElementById("myCanvas");
canvas.width=200;

const ctx = canvas.getContext("2d");
const road = new Road(canvas.width/2, canvas.width*0.9);
const car = new Car(road.getLaneCenter(1),100,30,50);
car.draw(ctx);

animate();

function animate(){
    car.update();
    canvas.height = window.innerHeight;  // canvas gets cleared, then height of road is set, so previous car is removed from trac
    
    ctx.save();
    ctx.translate(0,-car.y+canvas.height*0.7);  // to keep car at the center of the game, map moves up, so road looks like it is moving
    
    road.draw(ctx);
    car.draw(ctx);
    
    ctx.restore();
    requestAnimationFrame(animate);  // this calls the animate function again and again, giving illusion of movement of car
}