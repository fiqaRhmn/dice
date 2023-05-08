var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var imageElements1 = document.getElementsByClassName('img1');
for (var i = 0; i < imageElements1.length; i++) {
  var imageElement1 = imageElements1[i];
  imageElement1.setAttribute('src', 'images/dice' + randomNumber1 + '.png');
}

var imageElements2 = document.getElementsByClassName('img2');
for (var i = 0; i < imageElements2.length; i++) {
  var imageElement2 = imageElements2[i];
  imageElement2.setAttribute('src', 'images/dice' + randomNumber2 + '.png');
}

var paragraphElement = document.querySelector('h1');
 if (randomNumber2>randomNumber1){
	paragraphElement.textContent = 'Player 2 Wins 🚩 ';
}

else if (randomNumber1>randomNumber2){
	paragraphElement.textContent = '🚩Player 1 Wins';
}

else if(randomNumber1===randomNumber2){
	paragraphElement.textContent = 'Draw';
} 