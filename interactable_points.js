const points = [];

const max_width = window.innerWidth;
const max_height = window.innerHeight;

const point_size = 5;

const point_speed = 0.33;

function initDots(num_of_dots) {
    const container = document.getElementById("points-container");



    for (i = 0; i < num_of_dots; i++){
        const dot = document.createElement("a");
        dot.classList.add("point");

        const x = Math.random() * (max_width - point_size * 2) + point_size * 2;
        const y = Math.random() * (max_height - point_size * 2) + point_size * 2;

        dot.style.left = x + "px";
        dot.style.top = y + "px";

        container.appendChild(dot);

        points.push(
        {
            data:dot,
            x: x,
            y: y,
            dx: (Math.random() - 0.5) * point_speed,
            dy: (Math.random() - 0.5) * point_speed
        }
        );
    }
}

initDots(100);

let mouse_x = 0;
let mouse_y = 0;

document.addEventListener("mousemove", function(e) {
    mouse_x = e.clientX;
    mouse_y = e.clientY;
});

function animate_points(){
    points.forEach(point => {
        point.x += point.dx;
        point.y += point.dy;

        const x_distance = point.x - mouse_x;
        const y_distance = point.y - mouse_y;

        const distance = Math.sqrt(x_distance * x_distance + y_distance * y_distance);
        if (distance<50){
            point.dx = x_distance / distance * 2;
            point.dy = y_distance / distance * 2;
        }
        point.data.style.left = point.x + "px";
        point.data.style.top = point.y + "px";

        if (point.x < 0 || point.x > max_width - point_size)
            point.dx *= -1;
        if (point.y < 0 || point.y > max_height - point_size)
            point.dy *= -1;
        if (Math.abs(point.dx) > 0.5*point_speed){
            point.dx -= Math.random()*point_speed/50;
        }
        if (Math.abs(point.dy) > 0.5*point_speed){
            point.dy -= Math.random()*point_speed/50;
        }
    });

    requestAnimationFrame(animate_points);
}


animate_points();
