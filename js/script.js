
const startbtn = document.getElementById("start");


startbtn.addEventListener("click", startScreen);

const startScr = document.getElementById("start-popup")

function startScreen(evt){
    startScr.remove()
}

let userGuess = [
    [],
    [],
    [],
    [],
    [],
    [],
]

let words = [
    "which",
    "there",
    "their",
    "about",
    "would",
    "these",
    "other",
    "words",
    'could',
    'write',
    'first',
    'water',
    'after',
    'where',
    'right',
    'think',
    'three',
    'years',
    'place',
    'sound',
    'great',
    'again',
    'still',
    'every',
    'small',
    'found',
    'those',
    'never',
    'under',
    'might',
    'while',
    'house',
    'world',
    'below',
    'asked',
    'going',
    'large',
    'until',
    'along',
    'shall',
    'being',
    'often',
    'earth',
    'began',
    'since',
    'study',
    'night',
    'light',
    'above',
    'paper',
    'parts',
    'young',
    'story',
    'point',
    'times',
    'heard',
    'whole',
    'white',
    'given',
    'means',
    'music',
    'miles',
    'thing',
    'today',
    'later',
    'using',
    'money',
    'lines',
    'order',
    'group',
    'among',
    'learn',
    'known',
    'space',
    'table',
    'early',
    'trees',
    'short',
    'hands',
    'state',
    'black',
    'shown',
    'stood',
    'front',
    'voice',
    'kinds',
    'makes',
    'comes',
    'close',
    'power',
    'lived',
    'vowel',
    'taken',
    'built',
    'heart',
    'ready',
    'quite',
    'class',
    'bring',
    'round',
    'horse',
    'shows',
    'piece',
    'green',
    'stand',
    'birds',
    'start',
    'river',
    'tried',
    'least',
    'field',
    'whose',
    'girls',
    'leave',
    'added',
    'color',
    'third',
    'hours',
    'moved',
    'plant',
    'doing',
    'names',
    'forms',
    'heavy',
    'ideas',
    'cried',
    'check',
    'floor',
    'begin',
    'woman',
    'alone',
    'plane',
    'spell',
    'watch',
    'carry',
    'wrote',
    'clear',
    'named',
    'books',
    'child',
    'glass',
    'human',
    'takes',
    'party',
    'build',
    'seems',
    'blood',
    'sides',
    'seven',
    'mouth',
    'solve',
    'north',
    'value',
    'death',
    'maybe',
    'happy',
    'tells',
    'gives',
    'looks',
    'shape',
    'lives',
    'steps',
    'areas',
    'sense',
    'speak',
    'force',
    'ocean',
    'speed',
    'women',
    'metal',
    'south',
    'grass',
    'scale',
    'cells',
    'lower',
    'sleep',
    'wrong',
    'pages',
    'ships',
    'needs',
    'rocks',
    'eight',
    'major',
    'level',
    'total',
    'ahead',
    'reach',
    'stars',
    'store',
    'sight',
    'terms',
    'catch',
    'board',
    'cover',
    'songs',
    'equal',
    'stone',
    'waves',
    'guess',
    'dance',
    'spoke',
    'break',
    'cause',
    'radio',
    'weeks',
    'lands',
    'basic',
    'liked',
    'trade',
    'fresh',
    'final',
    'fight',
    'meant',
    'drive',
    'spent',
    'local',
    'waxes',
    'knows',
    'train',
    'bread',
    'homes',
    'teeth',
    'coast',
    'thick',
    'brown',
    'clean',
    'quiet',
    'sugar',
    'facts',
    'steel',
    'forth',
    'rules',
    'notes',
    'units',
    'peace',
    'month',
    'verbs',
    'seeds',
    'helps',
    'sharp',
    'visit',
    'woods',
    'chief',
    'walls',
    'cross',
    'wings',
    'grown',
    'cases',
    'foods',
    'crops',
    'fruit',
    'stick',
    'wants',
    'stage',
    'sheep',
    'nouns',
    'plain',
    'drink',
    'bones',
    'apart',
    'turns',
    'moves',
    'touch',
    'angle',
    'based',
    'range',
    'marks',
    'tired',
    'older',
    'farms',
    'spend',
    'shoes',
    'goods',
    'chair',
    'twice',
    'cents',
    'empty',
    'alike',
    'style',
    'broke',
    'pairs',
    'count',
    'enjoy',
    'score',
    'shore',
    'roots',
    'paint',
    'heads',
    'shook',
    'serve',
    'angry',
    'crowd',
    'wheel',
    'quick',
    'dress',
    'share',
    'alive',
    'noise',
    'solid',
    'cloth',
    'signs',
    'hills',
    'types',
    'drawn',
    'worth',
    'truck',
    'piano',
    'upper',
    'loved',
    'usual',
    'faces',
    'drove',
    'cabin',
    'boats',
    'towns',
    'proud',
    'court',
    'model',
    'prime',
    'fifty',
    'plans',
    'yards',
    'prove',
    'tools',
    'price',
    'sheet',
    'smell',
    'boxes',
    'raise',
    'match',
    'truth',
    'roads',
    'threw',
    'enemy',
    'lunch',
    'chart',
    'scene',
    'graph',
    'doubt',
    'guide',
    'winds',
    'block',
    'grain',
    'smoke',
    'mixed',
    'games',
    'wagon',
    'sweet',
    'topic',
    'extra',
    'plate',
    'title',
    'knife',
    'fence',
    'falls',
    'cloud',
    'wheat',
    'plays',
    'enter',
    'broad',
    'steam',
    'atoms',
    "press",
    "lying",
    "basis",
    "clock",
    "taste",
    "grows",
    "thank",
    "storm",
    "agree",
    "brain",
    "track",
    "smile",
    "funny",
    "beach",
    "stock",
    "hurry",
    "saved",
    "sorry",
    "giant",
    "trail",
    "offer",
    "ought",
    "rough",
    "daily",
    "avoid",
    "keeps",
    "throw",
    "allow",
    "cream",
    "laugh",
    "edges",
    "teach",
    "frame",
    "bells",
    "occur",
    "ended",
    "chord",
    "false",
    "skill",
    "holes",
    "dozen",
    "brave",
    "apple",
    "climb",
    "outer",
    "pitch",
    "ruler",
    "holds",
    "fixed",
    "costs",
    "calls",
    "blank",
    "staff",
    "labor",
    "eaten",
    "youth",
    "tones",
    "honor",
    "globe",
    "gases",
    "doors",
    "poles",
    "loose",
    "apply",
    "tears"
]
//getting the random word

function getRandomindex(min, max){
    return Math.floor(Math.random() * (427 - 0) + 0);
}
let gameWordIndex = [(Math.round(getRandomindex()))]
let gameWord = words[gameWordIndex];
// let words = []
// for (let i = 0; i < 6; i++){

// }

console.log(gameWord)

//making the keyboard fucntional


const keys = Array.from(document.querySelectorAll(".realKey"));
const letters = Array.from(document.querySelectorAll('.letter'));
const enterKey = document.querySelector("#Enter");
const deleteKey = document.querySelector("#Delete");

enterKey.addEventListener("click", checkLetters);

keys.forEach(function(key) {
    key.addEventListener("click", function(evt) {
        handleClick(evt);
    });
});

deleteKey.addEventListener("click", deleteLetter);

function deleteLetter(){
    if (userLetterTracker > 0) {
        userLetterTracker--;
        userGuess[userGuessTracker][userLetterTracker] = "";
        letters[userGuessTracker * 5 + userGuessTracker].textContent = "";
        console.log(userGuess)
    }
    else if(userLetterTracker>0){
        handleDelete();
    }
}

let userLetterTracker = 0;
let userGuessTracker = 0;
function handleClick(evt){
    if (userLetterTracker <= 4) { 
        let i = keys.indexOf(evt.target);
        let keyId = keys[i].id;    
        userGuess[userGuessTracker][userLetterTracker]= keyId;
        letters[userGuessTracker * 5 + userLetterTracker].textContent = keyId;
        console.log(userGuess)
        userLetterTracker++
    }  
    
}

//checking to see what letters are right/wrong in the users inputs
let i = 0
let j = 0
let correctLetters = 0;

function checkLetters(userGuess){
    
    console.log(gameWord)
    

    let row1 = document.querySelector("#row1").children;
    let row2 = document.querySelector("#row2").children;
    let row3 = document.querySelector("#row3").children;
    let row4 = document.querySelector("#row4").children;
    let row5 = document.querySelector("#row5").children;
    let row6 = document.querySelector("#row6").children;
    let rows = [row1, row2, row3, row4, row5, row6]
    for (let j = 0; j < rows[userGuessTracker].length; j++){
        let letterInThatSpot = gameWord.charAt(j);
        // console.log(letterInThatSpot)
        let letter = rows[userGuessTracker][j].innerText.toLowerCase()
        console.log(letter)
        if (letter == letterInThatSpot){
            rows[userGuessTracker][j].style.backgroundColor = "green";
            // correctLetters++;
        }
        else if(gameWord.includes(letter) && rows[userGuessTracker]!= letterInThatSpot){
            rows[userGuessTracker][j].style.backgroundColor = "rgb(173, 173, 2)";
        }
        else{
            rows[userGuessTracker][j].style.backgroundColor = "rgb(82, 81, 81)";
        }
    }
    //win con


    if (correctLetters === gameWord.length){
        alert("YOU WONNNN")
    }

    //lose con

    let attemptTracker = 6;
        if (attemptTracker == 0){
        alert(`unfortunately you lost the word was ${gameWord}`)
    }
    userGuessTracker++
    userLetterTracker = 0;
    // gameWordIndex = [(Math.round(getRandomindex()))]
    // gameWord = words[gameWordIndex];


}



//le game