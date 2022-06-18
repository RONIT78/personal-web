let header = document.querySelector(".header-1");
let navbar = document.getElementById("navbar");

window.onscroll = () => {

    if (window.scrollY > 80) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
}


// scroll effect 
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener("click", function(e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute("href")).scrollIntoView()
//         behaviour: "smooth";
//     });
// });

// let sidenav = document.getElementById("navbar");

// function openmenu() {
//     sidenav.style.visibility = 'visible';
// }

// function closemenu() {
//     sidenav.style.visibility = 'hidden';
// }