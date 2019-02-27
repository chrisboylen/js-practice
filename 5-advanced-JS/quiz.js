function Question(question, answers, correct) {
  this.question = question;
  this.answers = answers;
  this.correct = correct;
}

Question.prototype.displayQuestion = function() {
  console.log(this.question);

  for (var i = 0; i < this.answers.length; i++) {
    console.log(i + ": " + this.answers[i]);
  }
};

var q1 = new Question(
  "is Js the coolest programming language in the world?",
  ["yes", "no"],
  0
);
var q2 = new Question(
  "What is the name of this course's teacher",
  ["John", "Michael", "Jonas"],
  2
);
var q3 = new Question(
  "What does best describe coding",
  ["Boring", "Hard", "Fun", "Tedious"],
  2
);
var questions = [q1, q2, q3];
var n = Match.floor(Match.random() * questions.length);

questions[n].displayQuestion();
