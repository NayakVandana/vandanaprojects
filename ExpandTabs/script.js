let panels = document.querySelectorAll(".panel");

panels.forEach(a=>{
    a.addEventListener("click",function()
    {
        removeClass();
        a.classList.add("active");
    });
})

function removeClass()
{
    for(let i=0; i<panels.length ; i++)
    {
        panels[i].classList.remove("active");
    }
}