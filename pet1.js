//////////////DISPLAY
const health = document.getElementById("health");
const thirst = document.getElementById("thirst");
const hunger = document.getElementById("hunger");
const happiness = document.getElementById("happiness");
const cleanliness = document.getElementById("cleanliness");

////////BUTTONS
const feed = document.getElementById("feed");
const play = document.getElementById("play");
const givedrink = document.getElementById("drink");
const clean = document.getElementById("clean");
const image = document.getElementById("caty");
const myHeading = document.getElementsByTagName("h1")[0];
const choName = document.querySelector(".choName");
const select = document.querySelector("#petType");
const but = document.getElementById("submit");
const input = document.getElementById("input")
const header = document.getElementById("headi")
////////Start choosing name and type
let mate = ""
but.addEventListener("click", ()=>{
    
   if(select.value === "Cat"){
    image.src = "./catNor.gif";
   mate = Cat}
   

});

but.addEventListener("click", ()=>{
    
    if(select.value === "Dog"){
    mate = Dog
      image.src = "./dogNor.gif"}
 
 });

 but.addEventListener("click", ()=>{
    
    if(select.value == "Rabbit"){
    mate = Rabbit
     image.src = "./rabbitNor.gif"}
 
 });

 but.addEventListener("click", ()=>{
    
    if(select.value == "Monekey"){
    mate = Monekey
     image.src = "./monkeyNor.gif"}
 
 });

 but.addEventListener("click", ()=>{
    
    if(select.value == "Dunekey"){
    mate = Dunekey
     image.src = "./dunkeyNor.gif"}
 
 });








but.addEventListener("click",()=>{
    if(input.value!=="")
    header.textContent=`Your ${select.value} name is:${input.value}`

})



class pet {
    constructor(  happiness, cleanliness, hunger, thirst, health){
        this.happiness = happiness;
        this.cleanliness = cleanliness;
        this.hunger =hunger;
        this.thirst =thirst;
        this.health =health
    }
}

let Cat = new pet(50,50,50,50,50);
const Dog = new pet(50,50,50,50,50);
const Rabbit = new pet(50,50,50,50,50);
const Monekey = new pet(50,50,50,50,50);
const Dunekey = new pet(50,50,50,50,50);

function  feedPet() {
    // con
    mate.hunger -= 10;
    mate.cleanliness -= 1;
    mate.happiness -= 1;
    // pro
    mate.thirst += 1;
    mate.health -= 1;
};
function giveDrink() {
    // con
    mate.thirst -= 10;
    mate.cleanliness -= 1;
   
    // pro
    mate.happiness += 1;
    mate.health += 1;
};
function playwithpet() {
    // con
    mate.happiness +=10;
    mate.health += 1;
    mate.hunger += 1
    mate.thirst += 1
}
function cleanPet() {
    // con
    mate.health += 10;
    mate.hunger += 1;
    mate.cleanliness += 10;
    // pro
    mate.happiness -= 1;
};

function condi(){
    if (mate.health >= 100)
        mate.health = 100;
        if (mate.health <= 0){
            mate.health = 0;
        }
        if (mate.hunger <= 0){
            mate.hunger = 0;
        } 
        if (mate.hunger >= 100){
            mate.hunger = 100;
        } 
        if (mate.thirst >= 100){
            mate.thirst = 100;
        } 
        if (mate.thirst <= 0){
            mate.thirst = 0;
        } 
        if (mate.happiness >= 100){
            mate.happiness = 100;
        } 
        if (mate.happiness <= 0){
            mate.happiness = 0;
        } 
        if (mate.cleanliness <= 0){
            mate.cleanliness = 0;
        } 
        if (mate.cleanliness >= 100){
            mate.cleanliness =100;
        } 
    

}





function renderData() {
    health.textContent = `health: ${mate.health}`;
    thirst.textContent = `thirst: ${mate.thirst}`;
    hunger.textContent = `hunger: ${mate.hunger}`;
    happiness.textContent = `happiness: ${mate.happiness}`;
    cleanliness.textContent = `cleanliness: ${mate.cleanliness}`;
    }


    feed.addEventListener("click", () => {
        this.feedPet();
        condi()
        renderData();
        });

        givedrink.addEventListener("click", () => {
            this.giveDrink();
            condi()
            renderData();
            });
            play.addEventListener("click", () => {
            this.playwithpet();
            condi()
            renderData();
            });
            
            clean.addEventListener("click", () => {
            this.cleanPet();
            condi()
            renderData();
            });
            

        renderData() 



 ///////TIMERR
 const timingFunction = () => {
    window.setTimeout(() => {
        mate.hunger += 3;
        mate.thirst += 3;
        mate.happiness -= 2;
        mate.cleanliness -= 2;
        mate.health -= 1;
        
        condi()
        renderData();
        timingFunction();
        
    }, 1000);
}
timingFunction();

 const randomgift=() => {
    window.setTimeout(() => {
        let num1 = Math.ceil(Math.random()*100)
        if (num1 == 20){
            mate.health =0;
        }

            renderData();
            randomgift();

    },3000)
 }

 randomgift()
