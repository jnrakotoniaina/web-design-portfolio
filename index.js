
var numberOfDrums = document.getElementsByClassName("drum").length; //get drum  count
var allTheDrums = document.getElementsByClassName("drum");//declare all drums var

//for loop to Set all the button the create an event
for (var i=0;i<numberOfDrums;i++)
    {
//Add the eventlistner as Click
    allTheDrums[i].addEventListener("click",function (){
//set the event listener according to the InnerHTML of the elemet
    var buttonInnerHTML = this.innerHTML;
//send the event listener to tht the make sound function
    makeSound(buttonInnerHTML)
    //Sedn the event listener to the flash function
    flashButton(buttonInnerHTML);})

    }

//Set the event listener to keyboard press
document.addEventListener("keypress", function(event/* the name of this input does not matter as long as it's called properly in a function
    that will be trigger by this eventlistener */){
//Send the event listener to the make sound function with correpandent keyboard pressed
    makeSound(event.key);
    flashButton(event.key);
})

//Make sound function that is tied to for loop and the keyboard press event listner
function makeSound(key){
//Set the switch to keyboard pressed
    switch(key){
        /* In case of the hey "W" is pressed or the InnerHTML that contains the letter"W" is clicked */
            case ("w"):
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
            
            case("a"):
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
            break;

            case("s"):
                var tom3 = new Audio ("sounds/tom-3.mp3");
                tom3.play();
            break;

            case("d"):
                var tom4 = new Audio ("sounds/tom-4.mp3");
                tom4.play();
            break;

            case("j"):
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
            break;

            case("k"):
                var crash=new Audio("sounds/crash.mp3");
                crash.play();
            break;

            case("l"):
                var bass = new Audio("sounds/kick-bass.mp3");
                bass.play();
            break;

        default: console.log(this.innerHTML)
            }
        };

//Set the function for the animation to make the button flash
function flashButton (currentKey){
//select the button that will perform the animation by using concatenation
    var activeButton = document.querySelector("."+currentKey);
//Integrate the CSS (pressed) animation to the selected button above
    activeButton.classList.add("pressed");
//Make the button flash by using timeOut method
    setTimeout(function() {
        activeButton.classList.remove("pressed")
    },100);

}