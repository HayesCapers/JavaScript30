
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');

function setDate(){
	const now = new Date();

	const seconds = now.getSeconds();
	const secondsDegrees = ((seconds / 60) * 360) +90;
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	if (seconds == 0){
		secondHand.style.transition = "hidden"
	}

	const mins = now.getMinutes();
	const minsDegrees = ((mins / 60) * 360) + 90;
	minsHand.style.transform = `rotate(${minsDegrees}deg)`;
	if (mins == 0){
		minsHand.style.transition = "hidden"
	}

	const hours = now.getHours();
	const hoursDegrees = ((hours / 12) * 360) + 90;
	hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
	if (hours == 0){
		minsHand.style.transition = "hidden"
	}
}

setInterval(setDate, 1000);