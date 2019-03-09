

var display = $("#quizarea");


// Question set
var questions = [{
  question: "Captain America’s shield is made of:  ",
  answers: [" Vibranium ", " Adamantium ", " Kryptonite ", " Aluminium "],
  correctAnswer: "Vibranium"
}, {
  question: "What is the name of Tony Stark’s personal butler?",
  answers: [" Jeeves ", " Jarvis ", " Alfred ", " Geoffrey "],
  correctAnswer: "Jarvis"
}, {
  question: "Who is Thor’s adopted sibling?",
  answers: [" Odin ", " Erik Selvig ", " Laufey ", " Loki "],
  correctAnswer: "Loki"
}, {
  question: "Which X-Men film was released in 2016?",
  answers: [" X-Men: Days of Future Past ", " X-Men: First Class ", " X-Men: The Last Stand ", " X-Men: Apocalypse "],
  correctAnswer: "X-Men: Apocalypse"
}, {
  question: "Who is the director of S.H.I.E.L.D.? ",
  answers: [" Nick Fury ", " Tony Stark ", " Red Skull ", " Captain America "],
  correctAnswer: "Nick Fury"
}, {
  question: "What is Peter Parkers secret identity? ",
  answers: [" Superman ", " Captain America ", " Iron Man ", " Spider Man "],
  correctAnswer: "Spider Man"
}, {
  question: "Who is Iron Man's sidekick? ",
  answers: [" War Machine ", " Hawkeye ", " Jarvis ", " Captain America "],
  correctAnswer: "War Machine"
}, {
  question: "Blade is half human and half _:",
  answers: [" Mutant ", " Vampire ", " Wolf ", " Alien "],
  correctAnswer: "Vampire"
}, {
    question: "Dr. Pym discovered: ",
    answers: [" Pym Particles ", " Gamma Rays ", " Omega Particles ", " The Multiverse "],
    correctAnswer: "Pym Particles"
}, {
    question: "Bruce Banner turns into what fictional superhero when he becomes angry?",
    answers: [" Superman ", " SpiderMan  ", " Iron Man ", " The Hulk "],
    correctAnswer: "The Hulk"
  },];


// Variable that will hold the setInterval
var timer;

// Game Object
var game = {
  correct: 0,
  incorrect: 0,
  counter: 120,
  
  countdown: function() {
    game.counter--;
    $("#counter").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

//   function to start game
  start: function() {
    $("#start").remove();

    timer = setInterval(game.countdown, 1000);


    for (var i = 0; i < questions.length; i++) {
      display.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        display.append("<input type='radio' name='question- " + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j] + " ");
      }
    }
    display.append("<br><button id='done'>Done</button>");
  },

// Q/A validation on complete

  done: function() {
    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });


    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });


    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });


    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });


    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });


    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });


    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });


    $.each($("input[name='question-8']:checked"), function() {
        if ($(this).val() === questions[8].correctAnswer) {
          game.correct++;
        }
        else {
          game.incorrect++;
        }
      });


      $.each($("input[name='question-9']:checked"), function() {
        if ($(this).val() === questions[9].correctAnswer) {
          game.correct++;
        }
        else {
          game.incorrect++;
        }
      });

    this.result();
  },

// show results of quiz
  result: function() {

    clearInterval(timer);
    $("#sub-wrapper h2").remove();
    display.html("<h2>All Done!</h2>");
    display.append("<h3>Correct Answers: " + this.correct + "</h3>");
    display.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    display.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }

};



// CLICK EVENTS
$(document).on("click", "#start", function() {
  game.start();
});
$(document).on("click", "#done", function() {
  game.done();
});