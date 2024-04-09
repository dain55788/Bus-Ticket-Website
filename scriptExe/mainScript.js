let searchBtn = document.querySelector('#search_btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login_btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form_close');
let menu = document.querySelector('#menu_bar')
let navBar = document.querySelector('.navBar')
let imgBtn = document.querySelectorAll('.img-btn')
const toTop = document.querySelector(".top");

window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navBar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navBar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

//đóng form
formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});

imgBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#image-slider').src = src;
    });
});

// GO TO TOP BUTTON
window.addEventListener("scroll", () => {
    if(window.scrollY > 100)
        toTop.classList.add("active");
    else
        toTop.classList.remove("active");
})

var swiper = new Swiper(".review-slider", {
    spaceBetween : 20,
    loop : true,
    autoplay : {
        delay : 3000,
        disableOnInteraction : false,
    },
    breakpoints: {
        640: {
            slidesPerView : 1,
        },
        768: {
            slidesPerView : 2,
        },
        1024: {
            slidesPerView : 3,
        },
    },
});
