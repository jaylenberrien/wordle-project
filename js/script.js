let words = require('an-array-of-english-words')



function startGame(){
    
}

//how we get the word for the game
let fiveWords = []

for(let i = 0; i <= words.length; i++){
    if(words[i].length === 5){
        fiveWords.push(words[i])
    }
    else{
        i++
    }
}


function getRandomindex(min, max){
    return Math.random() * (6458 - 0) + 0;
}


gameWord = fiveWords[(Math.round(getRandomindex()))]


console.log(gameWord)

