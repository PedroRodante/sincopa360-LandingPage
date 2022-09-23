const ancoraProjetos = document.querySelectorAll(".scroll_effect");

ancoraProjetos.forEach((item)=>{
    item.addEventListener("click",()=>{
        const elemento=document.getElementById(item.getAttribute("data-link"));
        elemento.scrollIntoView({
            behavior:"smooth",block:"center"
        });
    });
});
