// for navbar 

let menu = document.querySelector("#menubtn");
let navbar = document.querySelector(".navbar");

menu.onclick = () =>{ 
    navbar.classList.toggle('active');
    SearchBox.classList.remove('active');   
}

let SearchIcon = document.querySelector("#search-icon");
let SearchBox = document.querySelector(".search-box");

SearchIcon.onclick = () =>{
    SearchBox.classList.toggle('active');
    navbar.classList.remove('active'); 
}