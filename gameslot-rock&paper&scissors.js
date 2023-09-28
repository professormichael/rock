
    document.getElementById('player').innerText = `Player ${JSON.parse(localStorage.getItem('player'))}`
var click1 = ''
var score = {
    'win':0,
    'lose':0
};

// Function for the player Move
function playerMove(move){

// Getting the neccesary Id's for the Game Production
var image = document.getElementById('move') ;
var computer = computerGuess();
var result1 = document.getElementById('p') ;
var result3 = document.getElementById('pa') ;
var result2 = '';

var result4 = '';
var result5 = '';

// The If statement for the score at -1 or lesser
if(score.win<0){
    score.win = 0,
    score.lose = 0
}

// Gathering the move and computer to one of the above paragraph
result1.innerText = `You Picked ${move} and The Computer Picked: ${computer}`;

// Identifying The Player Move
if(move ==='Rock'){
    image.src = 'rock-emoji.png'
}
if(move ==='Paper'){
    image.src = 'paper-emoji.png'
}
if(move === 'Scissors'){
    image.src = 'scissors-emoji.png'
}

//Scissors Move
if(move === 'Rock' && computer === 'Rock'){
    result2 = 'Tie';
    score.win +=0
    result4 = '';
    result5 = '';
    
    

}
if(move === 'Rock' && computer === 'Scissors'){
    result2 = ''
    score.win +=1
    result4 = 'You Win';
    result5 = 'You Lose';
}
if(move === 'Rock' && computer=== 'Paper'){
    result2 = ''
    score.lose +=1
    result5 = 'You Win';
    result4 = 'You Lose';
}

// Paper Move
if(move === 'Paper' && computer === 'Paper'){
    result2 = 'Tie'
    score.win +=0
    result4 = '';
    result5 = '';
}
if(move === 'Paper' && computer === 'Rock'){
    result2 = ''
    score.win +=1
    result4 = 'You Win';
    result5 = 'Computer Lose';
}
if(move === 'Paper' && computer === 'Scissors'){        
    result2 = ''
    score.lose +=1
    result5 = 'You Win';
    result4 = 'You Lose';
}

// Scissors Move
if(move === 'Scissors' && computer=== 'Scissors'){
    result2 = 'Tie'
    score.win +=0
    result4 = '';
    result5 = '';
}
if(move === 'Scissors' && computer === 'Paper'){
    result2 = ''
    score.win +=1
    result4 = 'You Win';
    result5 = 'You Lose';
}
if(move === 'Scissors' && computer === 'Rock'){        
    result2 = ''
    score.lose +=1
    result5 = 'You Win';
    result4 = 'You Lose';
    
}

// Result Confirming

console.log(score.win)
result3.innerText = result2

document.getElementById('para').innerText = `Player ${JSON.parse(localStorage.getItem('player'))}: ${score.win}`;
document.getElementById('parb').innerText = `Computer: ${score.lose}`;
document.getElementById('par').innerText = result4;
document.getElementById('parab').innerText = result5;
console.log(score)
console.log(click1)
if(click1===true){
    alert('Game End Time To Announce The Winner')
    if(score.win>score.lose){
        alert('The Winner is Player')
        window.location.href = 'rock.html';
    }
    if(score.lose>score.win){
        alert('The Winner is The Computer')
        window.location.href = 'rock.html';
    }
}
}

// Function for the computer Guess
function computerGuess(){
    // Getting the needed ID'S
    var image1 = document.getElementById('computer') ;
    computerRandom = Math.random()

    // Result needed
    var result = '';

    // if statement for recognizing the code by the computer
    if(computerRandom >=0 && computerRandom<1/3){
        result = 'Rock'
        image1.src = 'C:/Users/HP/PycharmProjects/untitled/rock-emoji.png'
    }
    if(computerRandom >=1/3 && computerRandom<2/3){
        result = 'Paper'
        image1.src = 'C:/Users/HP/PycharmProjects/untitled/paper-emoji.png'
    }
    
    if(computerRandom >=2/3 && computerRandom<1){
        result = 'Scissors'
        image1.src = 'C:/Users/HP/PycharmProjects/untitled/scissors-emoji.png'
    }
    return result
}
var hour = JSON.parse(localStorage.getItem('minute'));
var minute =  JSON.parse(localStorage.getItem('second'));
var timeout = '';        
        
function click2(){
    function calc(){
            if(hour >=0){
                minute -=1
                var time1 = `${hour}:${minute}`;
                document.getElementById('time').innerText = time1;
            
            }
             if(hour<=0 && minute ===0){
                hour = 0;
                minute = 1;
                document.getElementById('time').innerText = 'Time Out';    
                click1 = true
            }
            if(minute ===-1){
                minute = 59;
            }
            
             if(minute === 0){
                hour = hour-1;
                minute = 59;
                var time1 = `${hour}:${minute}`;
            document.getElementById('time').innerText = time1;
            
             }
             
    
            
        }    
        setInterval(calc, 1000)
    
        
    
}
click2()

