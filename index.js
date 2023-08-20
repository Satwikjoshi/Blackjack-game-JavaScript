
let card=[]
let sum = 0
let hasBlackjack=false
let isAlive=false

let message=""
let messageEl= document.getElementById("message-el")
let sumEL= document.getElementById("sum")
let cardsEl= document.getElementById("cards-el")

playerEl=document.getElementById("player-el")

function startgame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    card=[firstCard,secondCard]
    sum=firstCard+secondCard
    renderGame()

}

function getRandomCard()
{
    let randomnumber =   Math.floor(Math.random() * 13) +1 
    if(randomnumber > 10){
        return 10
    }
    else if(randomnumber === 1){
        return 11
    }
    else{
        return randomnumber
    }

}

function renderGame()
{
    cardsEl.textContent = "Cards: " 

    for(let i=0;i<card.length;i+=1)
    {
        cardsEl.textContent+=card[i] + " "
    }

    sumEL.textContent="Sum: "+sum
if (sum < 21)
{
    message="Do you want to draw a new card?"
}
else if (sum === 21)
{
    message="Wohoo! You've got the Blackjack!"
    hasBlackjack=true
}
else{
    message="You're out of game!"
    isAlive=false
}
messageEl.textContent=message
}

function newCard(){
    if(isAlive===true && hasBlackjack===false)
    {
    let cardNew = getRandomCard()
    card.push(cardNew)
    sum+=cardNew
    renderGame()
    }
}
