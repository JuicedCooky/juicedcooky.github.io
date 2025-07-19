function scrollTo(container, y, duration){
    container.classList.add('snap-disabled');

    const start_y = container.scrollTop;
    const distance = y-start_y;
    const start_time = performance.now();

    function step(curr_time){
        const elapsed = curr_time - start_time;
        if (elapsed > duration) {
            container.classList.remove('snap-disabled');
            return;
        }
        const progress = Math.min(elapsed / duration, 1);

        // ease function
        const ease = progress < 0.5 ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        container.scrollTop =  start_y +  distance * ease;
        if (progress<1){
            requestAnimationFrame(step);
        } else {
            container.classList.remove('snap-disabled');
            return;
        }
    }
    requestAnimationFrame(step);
}

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".scroll-container");
    if (!container){
        console.error("Error: .scroll-container not found in DOM.");

    }
    else{
        console.log(`container${container}`);

        document.querySelectorAll(".main-buttons").forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const target_location = document.querySelector(this.getAttribute("href"));

                const y_scroll = target_location.offsetTop;

                scrollTo(container, y_scroll, 1800);
            });
        });
        document.querySelectorAll(".dot").forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const target_location = document.querySelector(this.getAttribute("href"));

                const y_scroll = target_location.offsetTop;

                scrollTo(container, y_scroll, 1800);
            });
        });
    }
});

