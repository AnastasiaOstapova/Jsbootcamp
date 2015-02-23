// var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae fringilla ligula, mattis bibendum arcu. Curabitur finibus eleifend scelerisque. Aliquam convallis turpis sit amet augue tincidunt, ac ultricies magna porttitor. Vivamus posuere non leo vitae pretium. Pellentesque facilisis pellentesque molestie. Phasellus consequat euismod odio vel tincidunt. Vivamus laoreet purus quis molestie facilisis. Donec et sollicitudin diam, suscipit dignissim tortor. Aliquam faucibus interdum tortor quis lacinia. Pellentesque a consectetur urna. Proin at elit elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vehicula tristique ligula mollis dapibus. Aenean in felis justo. Nullam eget elit in quam blandit finibus. Lorem ipsum.";
 var text = "A quick black fox jumped over the lazy dog";

var counter = 0;
var notAlphabet = " ,.!?";

var wordsLessThan4SymbolsLength = 0;
var wordsBetween4And6SymbolsLength = 0;
var wordsMoreThan6SymbolsLength = 0;


while (counter < text.length) {
	var currentWord = "";
	while (notAlphabet.indexOf(text[counter]) == -1 && counter != text.length - 1) {
		currentWord += text[counter];
		counter++;
	}
	if (currentWord.length != 0 && currentWord.length < 4) {
		wordsLessThan4SymbolsLength++;
	} else if (currentWord.length != 0 && currentWord.length > 6) {
		wordsMoreThan6SymbolsLength++;
	} else if (currentWord.length != 0) {
		wordsBetween4And6SymbolsLength++;
	}
	counter++;
}

console.log("Words with length less than 4 letters: " + wordsLessThan4SymbolsLength);
console.log("Words with length between 4 and 6 letters: " + wordsBetween4And6SymbolsLength);
console.log("Words with length more than 6 letters: " + wordsMoreThan6SymbolsLength);