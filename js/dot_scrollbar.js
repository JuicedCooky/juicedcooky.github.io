const sections = document.querySelectorAll("section");
const dots = document.querySelectorAll(".dot");

console.log(`sections:${sections.length}`);


//Scroll dot bar
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

            entry.target.classList.add("visible");
        }
    });
};

const observer = new IntersectionObserver(callback, options);

sections.forEach(section => {
    observer.observe(section);
});

const expand_observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
        else{
            entry.target.classList.remove('visible');
        }
    });
}, {
    threshold: 0.33,
});

const section_content = document.querySelectorAll('.expand');
const slide_content = document.querySelectorAll('.slide-transition-animation');

slide_content.forEach(section => {
    expand_observer.observe(section);
});

section_content.forEach(section => {
    expand_observer.observe(section);
});
