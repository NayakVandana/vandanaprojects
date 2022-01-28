let totalBtn = document.querySelectorAll(".drum");

for(let i=0; i<totalBtn.length; i++)
{

    totalBtn[i].addEventListener("click",function(){
        let key = this.innerHTML;
         makeSound(key);
    })
}

document.addEventListener("keypress",function(obj){
    makeSound(obj.key);
})
function makeSound(keypress){
    switch(keypress){
        case "a" : let s1 = new Audio("sounds/1.mp3");
        s1.play();
        break;

        case "s" : let s2 = new Audio("sounds/2.mp3");
        s2.play();
        break;

        case "w" : let s3 = new Audio("sounds/3.mp3");
        s3.play();
        break;

        case "d" : let s4 = new Audio("sounds/4.mp3");
        s4.play();
        break;

        case "j" : let s5 = new Audio("sounds/5.mp3");
        s5.play();
        break;

        case "k" : let s6 = new Audio("sounds/6.mp3");
        s6.play();
        break;

        case "l" : let s7 = new Audio("sounds/7.mp3");
        s7.play();
        break;
    }
   
}