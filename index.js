const cardPosition = [
    "left", "middle", "right"
]

//Posiciones iniciales 
let cardA_index = 0; //left
let cardB_index = 1; //middle
let cardC_index = 2; //right

var numOfCards = document.querySelectorAll("#liItem").length;
for (let index = 0; index < numOfCards; index++) {
    let currentCard = document.querySelectorAll("#liItem")[index];
    currentCard.classList.add(cardPosition[index]);
}

var numOfBtns = document.querySelectorAll(".btn").length;

for (let index = 0; index < numOfBtns; index++) {
    document.querySelectorAll(".btn")[index].addEventListener('click',function(){

        let cardA = document.querySelectorAll("#liItem")[cardA_index];
        let cardB = document.querySelectorAll("#liItem")[cardB_index];
        let cardC = document.querySelectorAll("#liItem")[cardC_index];

        cardA.classList.remove(cardPosition[cardA_index]);
        cardB.classList.remove(cardPosition[cardB_index]);
        cardC.classList.remove(cardPosition[cardC_index]);

        var btnPressed = this.innerText;
        if(btnPressed === ">"){
            console.log(btnPressed);
            nextCard(cardA, cardB, cardC);
        }else{
            console.log(btnPressed);
            prevCard(cardA, cardB, cardC);
        }

        cardA.classList.add(cardPosition[cardA_index]);
        cardB.classList.add(cardPosition[cardB_index]);
        cardC.classList.add(cardPosition[cardC_index]);
    });
}

function nextCard(){
    if(cardA_index === 2){
        cardA_index = 0;
    }else{
        cardA_index++;
    }
    if(cardB_index === 2){
        cardB_index = 0;
    }else{
        cardB_index++;
    }
    if(cardC_index === 2){
        cardC_index = 0;
    }else{
        cardC_index++;
    }
}

function prevCard(){
    if(cardA_index === 0){
        cardA_index = 2;
    }else{
        cardA_index--;
    }
    if(cardB_index === 0){
        cardB_index = 2;
    }else{
        cardB_index--;
    }
    if(cardC_index === 0){
        cardC_index = 2;
    }else{
        cardC_index--;
    }
}

