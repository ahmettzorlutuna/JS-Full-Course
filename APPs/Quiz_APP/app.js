function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

//Question checkanswer function prototype
Question.prototype.checkAnswer = function (answer) {
    return this.answer === answer; //Doğru cevap kontrolü
}

//Quiz constructor (haydi quiz yapısını oluşturalım)
function Quiz(quesitons) {
    this.quesitons = quesitons;
    this.score = 0;
    this.questionIndex = 0;
}

//Quiz getQuestion Prototype method(getQuestion methodu ile question index e göre soru getirme)
Quiz.prototype.getQuestion = function () {
    return this.quesitons[this.questionIndex];
}

//Quiz isFinish Prototype method
Quiz.prototype.isFinish = function () {
    //console.log(quiz.score);
    return this.quesitons.length === this.questionIndex;

}

//Quiz guess proto method (question index deki soru sırasına göre doğru cevabı tahmin etme)
Quiz.prototype.guess = function (answer) {
    var question = this.getQuestion();

    if (question.checkAnswer(answer)) {
        this.score = this.score + 1;
    }
    this.questionIndex = this.questionIndex + 1;
}


var q1 = new Question(
    "what's the best programming language ?", ["C#", "javascript", "pyhton", "asp.net"], "javascript"
);

var q2 = new Question(
    "what's the most popular programming language ?", ["C#", "visual basic", "nodejs", "javascript"], "C#"
);

var q3 = new Question(
    "what's the best modern programming language ?", ["C#", "javascript", "pyhton", "asp.net"], "python"
);

var q4 = new Question(
    "what's the best good programming language ?", ["Ruby", "javascript", "pyhton", "asp.net"], "Ruby"
);

var q5 = new Question(
    "what's the best bad programming language ?", ["c++", "javascript", "go", "asp.net"], "go"
);

var questions = [q1, q2, q3, q4, q5]

//Starting Quiz
var quiz = new Quiz(questions);

loadQuestion();

function loadQuestion() {
    if (quiz.isFinish()) {
        return
    } else {
        var question = quiz.getQuestion();
        var choices = question.choices;
        document.querySelector('#question').textContent = question.text;

        for (let i = 0; i < choices.length; i++) {
            var button = document.querySelector('#choice' + i);
            button.innerHTML = choices[i];
            
            dogrumu("btn"+i,choices[i]);
        }
    }
}

function dogrumu(btn,ındex) {
    var button = document.getElementById(btn);
    button.onclick = function(){
        quiz.guess(ındex);
        loadQuestion();
    }
    
}



// console.log(quiz.isFinish());

// console.log(quiz.getQuestion());
// quiz.guess('javascript');

// console.log(quiz.getQuestion());
// quiz.guess('javascript');

// console.log(quiz.getQuestion());
// quiz.guess('javascript');

// console.log(quiz.getQuestion());
// quiz.guess('Ruby');



// console.log(questions.length);
// console.log(quiz.questionIndex);


// console.log(quiz.isFinish());


// var footer = document.getElementById("progress");
            // footer.innerHTML = ("Score..: " + 0 + "\n" + "Index..:" + 0);
            // btn.onclick = function () {
            //     if (choices[i] == question.answer) {
            //         quiz.questionIndex++;
            //         quiz.score = quiz.score + 1;
            //         footer.innerHTML = ("Score..: " + quiz.score + "\n" + "Index..:" + quiz.questionIndex);

            //     }


            //     loadQuestion();
            // }