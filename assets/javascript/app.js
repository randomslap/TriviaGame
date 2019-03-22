var time = 30;
var intervalId;
var timerOn = false;
var choiceCounter = 0;
var questionCounter = 0;
var correctCounter = 0;
var incorrectCounter = 0;
var trivia = [
	{
		question: "In what year did the Apollo 7 human spaceflight take place?",
		choices: ["1970", "1924", "1968", "1965"],
		answer: "1968",
		image: "assets/images/apollo.jpg"
	},
	{
		question: "In which country did cheddar cheese originate?",
		choices: ["Ireland", "England", "Russia", "United States"],
		answer: "England",
		image: "assets/images/england.jpg"
	},
	{
		question:
			"The island of Great Britain is made up of what three somewhat autonomous regions?",
		choices: [
			"England, Scotland, and Wales",
			"Switzerland, England, and Wales",
			"Scotland, Poland, and England",
			"Germany, United States, and Russia"
		],
		answer: "England, Scotland, and Wales",
		image: "assets/images/greatBritain.jpg"
	},
	{
		question: "Which team won the National Football League’s first Super Bowl?",
		choices: [
			"The Los Angeles Chargers",
			"The Miami Dolphins",
			"The Green Bay Packers",
			"The New England Patriots"
		],
		answer: "The Green Bay Packers",
		image: "assets/images/packers.jpg"
	},
	{
		question: "The Mexican city of Tijuana borders what U.S city?",
		choices: ["San Diego", "San Francisco", "Austin", "Phoenix"],
		answer: "San Diego",
		image: "assets/images/sanDiego.jpg"
	},
	{
		question: "Which city is located both in Asia and Europe?",
		choices: ["Fallujah", "Istanbul", "Tokyo", "Moscow"],
		answer: "Istanbul",
		image: "assets/images/istanbul.jpg"
	},
	{
		question: "What city in Australia has the highest population?",
		choices: ["Sydney", "Melbourne", "Aukland", "Brisbane"],
		answer: "Sydney",
		image: "assets/images/sydney.jpg"
	}
];
$(document).ready(function() {
	function resetGame() {
		if (questionCounter === 6 && timerOn == true) {
			time = 30;
			intervalId;
			timerOn = false;
			choiceCounter = 0;
			questionCounter = 0;
			correctCounter = 0;
			incorrectCounter = 0;
		}
	}
	function getResult() {
		if (questionCounter < 6) {
			$("#question").empty();
			$("#choices").empty();
			$("#status").show();
			clearInterval(intervalId);
			choiceCounter = 0;
			questionCounter++;
			time = 30;
			$("#time").text("Time: " + time + " seconds");
			setTimeout(() => {
				startGame();
			}, 1000 * 1);
			$("#question").text(
				"The correct answer was " + trivia[questionCounter - 1].answer
			);
			$("#question").append(
				"<img src=" + trivia[questionCounter - 1].image + ">"
			);
		} else {
			clearInterval(intervalId);
			$("#question").empty();
			$("#choices").empty();
			$("#question").text("That's it! Game over");
			$("#startBtn").show();
			$("#startBtn").text("Restart");
			console.log("Game Over");
		}
		$("#correct").text("Correct guesses: " + correctCounter);
		$("#missed").text("Missed: " + incorrectCounter);
	}
	function userCorrect() {
		correctCounter++;
		getResult();
		$("#status").text("Correct!");
	}
	function userIncorrect() {
		incorrectCounter++;
		getResult();
		$("#status").text("Incorrect!");
	}
	function noAnswer() {
		incorrectCounter++;
		getResult();
		$("#status").text("You ran out of time!");
	}
	function startGame() {
		resetGame();
		$("#startBtn").hide();
		$("#status").hide();
		timerOn === false;
		if (timerOn === false) {
			intervalId = setInterval(function() {
				time--;
				$("#time").text("Time: " + time + " seconds");
				if (time <= 0) {
					noAnswer();
					console.log("Time has ended");
				}
			}, 1000);
			console.log("Timer Started");
			isTimerOn = true;
		}
		console.log(time);
		console.log(timerOn);
		if (questionCounter <= 6) {
			$("#question").text(trivia[questionCounter].question);
			$(trivia[questionCounter].choices).map(function(i) {
				$("#choices").append(
					"<li><button id='choices" +
						[choiceCounter] +
						"' value='" +
						trivia[questionCounter].choices[i] +
						"'>" +
						trivia[questionCounter].choices[i] +
						"</button></li>"
				);
				choiceCounter++;
			});
		}
		$("#correct").text("Correct guesses: " + correctCounter);
		$("#missed").text("Missed: " + incorrectCounter);
	}
	$("#startBtn").on("click", function() {
		startGame();
		console.log(questionCounter);
	});
	$("body").on("click", "#choices0", function() {
		console.log($(this).val());
		console.log(trivia[questionCounter].answer);
		console.log("selected");
		if (trivia[questionCounter].answer == $(this).val()) {
			userCorrect();
			console.log("CORRECT");
		} else {
			userIncorrect();
			console.log("INCORRECT");
		}
	});
	$("body").on("click", "#choices1", function() {
		console.log($(this).val());
		console.log(trivia[questionCounter].answer);
		console.log("selected");
		if (trivia[questionCounter].answer == $(this).val()) {
			userCorrect();
			console.log("CORRECT");
		} else {
			userIncorrect();
			console.log("INCORRECT");
		}
	});
	$("body").on("click", "#choices2", function() {
		console.log($(this).val());
		console.log(trivia[questionCounter].answer);
		console.log("selected");
		if (trivia[questionCounter].answer == $(this).val()) {
			userCorrect();
			console.log("CORRECT");
		} else {
			userIncorrect();
			console.log("INCORRECT");
		}
	});
	$("body").on("click", "#choices3", function() {
		console.log($(this).val());
		console.log(trivia[questionCounter].answer);
		console.log("selected");
		if (trivia[questionCounter].answer == $(this).val()) {
			userCorrect();
			console.log("CORRECT");
		} else {
			userIncorrect();
			console.log("INCORRECT");
		}
	});
});
