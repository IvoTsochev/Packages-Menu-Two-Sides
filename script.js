let firstH2 = document.getElementById('firstTitle');
let secondH2 = document.getElementById('secondTitle');
let thirdH2 = document.getElementById('thirdTitle');
let fourthH2 = document.getElementById('fourthTitle');

let firstTxt = document.getElementById('firstTxt');
let secondTxt = document.getElementById('secondTxt');
let thirdTxt = document.getElementById('thirdTxt');
let fourthTxt = document.getElementById('fourthTxt');

let firstTitleHr = document.getElementById('first--services--line');
let secondTitleHr = document.getElementById('second--services--line');
let thirdTitleHr = document.getElementById('third--services--line');
let fourthTitleHr = document.getElementById('fourth--services--line');

secondTxt.hidden = true;
thirdTxt.hidden = true;
fourthTxt.hidden = true;

firstTitleHr.hidden = true;
secondTitleHr.hidden = true;
thirdTitleHr.hidden = true;
fourthTitleHr.hidden = true;

firstTitleHr.classList.add('active--pkg');

firstH2.addEventListener('click', firstTitle);

function firstTitle() {
	firstTxt.hidden = false;
	secondTxt.hidden = true;
	thirdTxt.hidden = true;
	fourthTxt.hidden = true;

	firstTitleHr.classList.add('active--pkg');
	if (secondTitleHr.classList.contains('active--pkg')) {
		secondTitleHr.classList.remove('active--pkg');
	}
	if (thirdTitleHr.classList.contains('active--pkg')) {
		thirdTitleHr.classList.remove('active--pkg');
	}
	if (fourthTitleHr.classList.contains('active--pkg')) {
		fourthTitleHr.classList.remove('active--pkg');
	}
}

secondH2.addEventListener('click', secondTitle);

function secondTitle() {
	firstTxt.hidden = true;
	secondTxt.hidden = false;
	thirdTxt.hidden = true;
	fourthTxt.hidden = true;

	secondTitleHr.classList.add('active--pkg');
	if (firstTitleHr.classList.contains('active--pkg')) {
		firstTitleHr.classList.remove('active--pkg');
	}
	if (thirdTitleHr.classList.contains('active--pkg')) {
		thirdTitleHr.classList.remove('active--pkg');
	}
	if (fourthTitleHr.classList.contains('active--pkg')) {
		fourthTitleHr.classList.remove('active--pkg');
	}
}

thirdH2.addEventListener('click', thirdTitle);

function thirdTitle() {
	firstTxt.hidden = true;
	secondTxt.hidden = true;
	thirdTxt.hidden = false;
	fourthTxt.hidden = true;

	thirdTitleHr.classList.add('active--pkg');
	if (firstTitleHr.classList.contains('active--pkg')) {
		firstTitleHr.classList.remove('active--pkg');
	}
	if (secondTitleHr.classList.contains('active--pkg')) {
		secondTitleHr.classList.remove('active--pkg');
	}
	if (fourthTitleHr.classList.contains('active--pkg')) {
		fourthTitleHr.classList.remove('active--pkg');
	}
}

fourthH2.addEventListener('click', fourthTitle);

function fourthTitle() {
	firstTxt.hidden = true;
	secondTxt.hidden = true;
	thirdTxt.hidden = true;
	fourthTxt.hidden = false;

	fourthTitleHr.classList.add('active--pkg');
	if (firstTitleHr.classList.contains('active--pkg')) {
		firstTitleHr.classList.remove('active--pkg');
	}
	if (secondTitleHr.classList.contains('active--pkg')) {
		secondTitleHr.classList.remove('active--pkg');
	}
	if (thirdTitleHr.classList.contains('active--pkg')) {
		thirdTitleHr.classList.remove('active--pkg');
	}
}
