

// document.getElementById('animated').addEventListener("click",  function() {

//     this.classList.add("animate__flash");

// });


const nameFade = () => {
    const element = document.getElementById("headline");
    element.classList.add("animate__animated", "animate__fadeIn");
}

const picFade = () => {
    const element = document.getElementById("profile-pic");
    element.classList.add("animate__animated", "animate__fadeOut");
}

const phoneNumber = () => {
    const element = document.getElementById("phone");
    element.style.visibility = "visible";
    // element.classList.add("animate__animated", "animate__fadeIn");
}