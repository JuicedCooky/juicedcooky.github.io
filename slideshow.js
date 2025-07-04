//Slide Bar
let slide_index = 1;
showSlide(slide_index);

function nextSlide(n){
    slide_index = showSlide(slide_index+n);
}

function showSlide(index){
    let slides = document.querySelectorAll(".slide");
    if (index > slides.length) {index = 1;}
    if (index < 1) {index = slides.length;}

    slides.forEach(slide => {
        slide.style.display = "none";
    });

    slides[index-1].style.display = "block";

    fetch("projects.json").then(response => response.json()).then(data =>{
        document.getElementById("project-title").textContent = data.projects[slide_index-1].title;
        document.getElementById("project-description").textContent = data.projects[slide_index-1].description;

    });
    return index;
}

