let btn = document.querySelector("#btn");
let dot = document.querySelector("#dot");
let more = document.querySelector("#more");

btn.addEventListener("click",function()
{
    if(dot.style.display === "none")
    {
        dot.style.display="inline";
        btn.innerHTML = "Read More";
        more.style.display = "none";
    }
    else
    {
        dot.style.display = "none";
        btn.innerHTML = "Read Less";
        more.style.display="inline";
    }
});