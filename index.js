console.log("test");
const sections = document.querySelectorAll("section");
const dots = document.querySelectorAll(".dot");

const options = {
    threshold: 0.5,
};

const callback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            sectionNumber = entry.target.id[entry.target.id.length-1];
            dots.forEach(dot => {
                dot.classList.remove("active");
                if(sectionNumber == dot.id[dot.id.length-1]){
                    dot.classList.add("active");
                }
            });
        }
    });
};

const observer = new IntersectionObserver(callback, options);

sections.forEach(section => {
    observer.observe(section);
});
