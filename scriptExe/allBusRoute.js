let searchBtn = document.querySelector('#search_btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login_btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form_close');
let menu = document.querySelector('#menu_bar')
let navBar = document.querySelector('.navBar')
const toTop = document.querySelector(".top");

// Loại bỏ đi event tìm kiếm khi scroll
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

// event hiển thị search bar chính
searchBtn.addEventListener('click', () =>{
  searchBtn.classList.toggle('fa-times');
  searchBar.classList.toggle('active');
});

//event hiển thị form đăng nhập / đkí người dùng
formBtn.addEventListener('click', () =>{
  loginForm.classList.add('active');
});

//đóng form
formClose.addEventListener('click', () =>{
  loginForm.classList.remove('active');
}); 

// GO TO TOP BUTTON
window.addEventListener("scroll", () => {
    if(window.scrollY > 100)
        toTop.classList.add("active");
    else
        toTop.classList.remove("active");
})
