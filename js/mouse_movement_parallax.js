let last_time = 0;
let max_x = window.innerWidth;
let max_y = window.innerHeight;
let origin_x = max_x/2;
let origin_y = max_y/2;

console.log(`X:${max_x}, Y:${max_y}`);
console.log(`OX:${origin_x}, OY:${origin_y}`);

let background = document.getElementById("main");


//document.addEventListener("mousemove", function (event){
//    let time = Date.now();
//    if(time-last_time > 100){
//        console.log("Mouse X:", event.clientX, "Mouse Y:", event.clientY);
//        background.style.backgroundPosition = `${(origin_x-event.clientX)*0.05}px ${(origin_y-event.clientY)*0.05}px`;
//        console.log(background.style.backgroundPosition);
//        last_time = time;
//    }
//});
