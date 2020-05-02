var pickQuestion, answer, score = 0;                            //Declaring global variables
var Questions = function(question, answers, correctAnswer){     //function constructor
    this.question = question;
    this.answers= answers;
    this.correctAnswer = correctAnswer;
}


var firstQuestion = {
question : 'What is my name?',
answers : ['Shivani' ,'Dhaval'],
correctAnswer : 0

}

var secondQuestion = {
    question : 'What is my fav hobby?',
    answers : ['Dance' ,'Singing'],
    correctAnswer : 0
    
    }

    var thirdQuestion = {
        question : 'What is my fav food?',
        answers : ['Chocolate' ,'Indian sweets'],
        correctAnswer : 1
        
        }

var listOfQuestions = [firstQuestion, secondQuestion, thirdQuestion]; // store list of questions
repeatQuestion();
function repeatQuestion(){
var randomNumber = Math.floor(Math.random()*listOfQuestions.length); // generate random number
 pickQuestion = listOfQuestions[randomNumber];                       //assign the random question to a variable to manipulate it 

console.log(pickQuestion.question);                                  // print answers with index number
for (var i = 0; i < pickQuestion.answers.length; i++) {
    console.log(i + ': ' + pickQuestion.answers[i]);
}
answer = prompt('Enter correct answer')
correctAnswer();
}
function correctAnswer(){                                            // check if the answer is correct and update score count
    if (answer == pickQuestion.correctAnswer){
        console.log('Bingo! Correct answer')
        score ++
        console.log('Your current score is' + ' ' + score)
        repeatQuestion();
    } else if(answer == 'EXIT'){
        console.log('You have exit the game!');
    }
    else {
        console.log('Try again!')
        repeatQuestion();
    }
}
