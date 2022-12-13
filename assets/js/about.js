let hamburger=document.querySelector("#hamburger");
let navMenu=document.querySelector(".nav-menu");
hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n=>n.addEventListener("click",()=>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))
window.addEventListener("scroll",()=>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
})
window.onclick = function(event) {
	if (event.target != hamburger) {
		hamburger.classList.remove("active");
		navMenu.classList.remove("active");
	
	}
  }

let links=['Home','Trainers','Schedule','Contact','About'];
let paths=['/GymGYM/index.html','/GymGYM/index.html#trainers','/GymGYM/index.html#schedule','/GymGYM/index.html#contact-us','/GymGYM/about.html'];
navMenu.innerHTML="";

for(let i=0; i<links.length;i++)
{
    navMenu.innerHTML+=`<li class="nav-item">
    <a href="${paths[i]}" class="nav-link">${links[i]}</a></li>`
}