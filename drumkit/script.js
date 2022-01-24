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

        case "s" : let s1 = new Audio("sounds/1.mp3");
        s1.play();
        break;

        case "w" : let s1 = new Audio("sounds/1.mp3");
        s1.play();
        break;

        case "d" : let s1 = new Audio("sounds/1.mp3");
        s1.play();
        break;

        case "j" : let s1 = new Audio("sounds/1.mp3");
        s1.play();
        break;

        case "k" : let s1 = new Audio("sounds/1.mp3");
        s1.play();
        break;

        case "l" : let s1 = new Audio("sounds/1.mp3");
        s1.play();
        break;
    }
   
}