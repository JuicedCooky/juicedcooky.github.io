const points = [];

const max_width = window.outerWidth;
const max_height = window.outerHeight;

const point_size = 5;

function initDots(num_of_dots) {
    const container = document.getElementById("points-container");



    for (i = 0; i < num_of_dots; i++){
        const dot = document.createElement("a");
        dot.classList.add("point");

        const x = Math.random() * max_width;
        const y = Math.random() * max_height;

        dot.style.left = x + "px";
        dot.style.top = y + "px";

        container.appendChild(dot);

        points.push(
        {
            data:dot,
            x: x,
            y: y,
            dx: (Math.random() - 0.5) * 0.33,
            dy: (Math.random() - 0.5) * 0.33
        }
        );
    }
}

initDots(100);

function animate_points(){
    points.forEach(point => {
        point.x += point.dx;
        point.y += point.dy;

        if (point.x < 0 || point.x > max_width - point_size)
            point.dx *= -1;
        if (point.y < 0 || point.y > max_height - point_size)
            point.dy *= -1;

        point.data.style.left = point.x + "px";
        point.data.style.top = point.y + "px";
    });

    requestAnimationFrame(animate_points);
}

animate_points();
