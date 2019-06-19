"use strict";
/*
 * Create a list that holds all of your cards
 */
// getting element by id
let main = document.getElementById("deck");
// getting getElementsByClassName
// Slice method
let subList = [].slice.call(document.getElementsByClassName("card"));
// time variable declaration
let timeCount = 0;
let time;
let seconds = 0;
let min = 0;
let hour = 0;
let timeSpace = document.getElementById("time");
// moves variable declaration
let movesCount = 0;
let movesSection = document.getElementById("movesCount");
// card storage
let storeCard = [];
// Star variable declaration
let starSection = [...document.getElementsByClassName("fa-star")];
let starCount = 3;
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
// Shuffle function from http://stackoverflow.com/a/2450976
// shuffling the cards
function shuffle(array) {
	var currentIndex = array.length,
		temporaryValue, randomIndex;
	// to shuffle randomly
	while (currentIndex !== 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}
main.onload = insideGame();

function insideGame() {
	var changedCards = shuffle(subList);
	for (var k in changedCards) {
		main.append(changedCards[k]);
	}
}
// to show the card
var p = 0;
while (p < subList.length) {
	subList[p].addEventListener("click", viewCard);
	p++;
}
// timeCount
function viewCard() {
	if (timeCount == 0) {
		startTime();
		timeCount = timeCount + 1;
	}
	// unmatch
	this.classList.add("card", "open", "show", "disable");
	storeCard.push(this);
	// movesCount
	if (storeCard.length == 2) {
		movesCount = movesCount + 1;
		movesSection.innerHTML = movesCount;
		starlevel();
		if (storeCard[0].children[0].classList.item(1) == storeCard[1].children[0].classList.item(1)) {
			console.log("matched");
			storeCard[0].classList.add("match", "disable");
			storeCard[1].classList.add("match", "disable");
			if (cardMatched.length == 16) {
				clearInterval(time);
				// sweetalert
				Swal.fire({
					title: "congratulations gameover",
					html: 'you have got<strong style="color:#F9030E;text-shadow:3px 3px 3px #000">' + starCount + ' <i class="fa fa-star"> </i></strong> <br> Completed Time : ' + hour + ' hours:' + min + ' minutes:' + seconds + ' seconds' + '<br>No.of.Moves : ' + movesCount,
					confirmButtonText: '<i class="fa fa-thumbs-up"></i> Restart',
				}).then(() => {
					document.location.reload();
				});
			}
			storeCard = [];
		} else {
			storeCard[0].classList.add("unmatched");
			storeCard[1].classList.add("unmatched");
			storeCard.map((card) => {
				setTimeout(() => {
					card.classList.remove("unmatched", "open", "show", "disable");
				}, 300);
			})
			storeCard = [];
			starlevel();
		}
	}
}
var cardMatched = document.getElementsByClassName("match");
// to start the time
function startTime() {
	time = setInterval(() => {
		seconds = seconds + 1;
		if (seconds == 59) {
			seconds = 0;
			min = min + 1;
		}
		if (min == 60) {
			min = 0;
			hour = hour + 1;
		}
		timeSpace.innerHTML = "h" + hour + ":" + min + "m : " + seconds + "s";
		// to Show time
	}, 1000)
}
// for refreshing the game to starting position
function getback() {
	document.location.reload();
}
/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
// star ratings
function starlevel() {
	if (movesCount >= 14 && movesCount <= 20) {
		starCount = 2;
		starSection[2].style.display = "none";
	}
	if (movesCount > 20) {
		starCount = 1;
		starSection[1].style.display = "none";
	}
}
