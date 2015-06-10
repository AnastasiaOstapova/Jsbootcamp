var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae fringilla ligula, mattis bibendum arcu.";


function cutText(text, border) {
	var endOfWord = " .,?!";
	var index = 0;
	var state = false;
	while (state == false) {
		for (var i = 0; i < text.length; i++) {
			if (endOfWord.indexOf(text[i]) != -1 && i < border) {
				console.log("end of the word");
				state = true;
				index = i - 1;
			}
		}
	}
	return text.substring(0, index);
};

console.log(cutText(text, 20));


