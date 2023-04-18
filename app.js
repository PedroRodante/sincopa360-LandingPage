const ancoraProjetos = document.querySelectorAll(".scroll_effect");

ancoraProjetos.forEach((item)=>{
    item.addEventListener("click",()=>{
        const elemento=document.getElementById(item.getAttribute("data-link"));
        elemento.scrollIntoView({
            behavior:"smooth",block:"center"
        });
    });
});

const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('nav ul');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('show-menu');
});