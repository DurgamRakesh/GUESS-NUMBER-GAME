let startingvalue=20;
let record=null;
let randomnumber = generateRandomInteger(20);

let inputnumber = document.getElementById('guessid');
let chances = document.querySelector('.score');
let startguessing = document.querySelector('#sc');
let number = document.querySelector('.number');


// <--------------------------start again button-------------------------->

function againbtn(){
    inputnumber.value='';
    chances.textContent= '20';
    startguessing.textContent="Start guessing...";
    number.textContent = '?';
    document.body.style.backgroundColor="#222";
    randomnumber = generateRandomInteger(20);
    console.log(randomnumber);
}

function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}


let highscorepara = document.querySelector('.highscore');

// <--------------------------number button-------------------------->

function checkbtns(){
let inputnumber1 = document.querySelector('#guessid');
  if(inputnumber1.value == ''){
    alert('HI BUDDY INPUT VALUE IS EMPTY!!')
  }
  else if(startingvalue !== 0){
        if(inputnumber1.value > randomnumber){
            document.querySelector('.message').textContent = 'Your Guess Is High';
            startingvalue--;
            document.querySelector('.score').textContent = startingvalue;
        }
        else if(inputnumber1.value < randomnumber){
            document.querySelector('.message').textContent = 'Your Guess Is Low';
            startingvalue--;
            document.querySelector('.score').textContent = startingvalue;
        }
        else{
            document.querySelector('.message').textContent = '🤩🤩 Hurray You Won 🤩🤩';
            startingvalue--;
            document.querySelector('.score').textContent = startingvalue;
            number.textContent = randomnumber;
            number.style.color = 'blue';
            record = startingvalue;
            highscorepara.textContent = record;
            document.body.style.backgroundColor = 'green';
        }
    }
    else{
        document.querySelector('.message').textContent = 'Game Over 🙂 🙂 your score is 0';
    }
    
    console.log(inputnumber1.value);
    inputnumber1.value = ''
}
