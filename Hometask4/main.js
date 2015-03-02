var state = 1;

var favBook = {
	author: {
	}
};

function printBanner() {
	console.log("========================");
	console.log("= Welcome to Book Worm =");
	console.log("========================");
	console.log("(input 'exit' at any time to quit)\n");
	console.log("What is the title of your favorite book?");	
};

function openUserInput() {
	process.stdin.setEncoding("utf-8");
	process.stdin.resume();
	process.stdin.on("data", onUserInput);
};

function onUserInput(input) {
	input = input.trim();
	if (input == "exit") {
		process.exit();
			
	} else if (input == "again") {
		state = 1;
		console.log("What is the title of your favorite book?");
	} else {
		if (state == 1) {
			favBook.title = input;
			state = 2;
			console.log("What is a genre of the book?");
		} else if (state == 2) {
			favBook.genre = input;
			state = 3;
			console.log("How many pages does it have?");
		} else if (state == 3) {
			if (!isNumberOfPages(input)) {
				console.log("How many pages does it have?");
			} else {
				favBook.numPages = input;
				state = 4;
				console.log("What is the name of the author?");
			}				
		} else if (state == 4) {				
			if (!isNameOfAuthor(input)) {
				console.log("What is the name of the author?");
			} else {
				favBook.author.name = input;
				state = 5;
				console.log("Where he lived?");
			}
		} else if (state == 5) {				
			favBook.author.city = input;
			bookInfo(favBook);
		}


			/*
			switch(state) {
				case 1: 
					console.log("What is the title of your favorite book?");
					favBook.title = input;

					state = 2;
					break;
				case 2: 
					console.log("What is a genre of the book?");
					favBook.genre = input;
					state = 3;
					break;
				case 3: 
					console.log("How many pages does it have?");
					
					check = isNumberOfPages(input);
					favBook.numPages = input;
					state = 4;
					break;
				case 4:
					console.log("What is the name of the author?");
					
					check = isNameOfAuthor(input);
					favBook.author.name = input;
					state = 5;
					break;
				case 5:
					console.log("Where he lived?");
					favBook.author.city = input;
					bookInfo(favBook);
					break;
			}
			*/
			
	}
};

function bookInfo(book) {
	console.log("Thank you!\nYour favourite book is", book.title, "by", book.author.name, "(", book.author.city, ")", ". This book has", book.numPages, "pages. Type 'exit' to quit or 'again' to enter the data again.");
}


function isNumberOfPages(pagesNumber) {
	pagesNumber = pagesNumber.trim();
	if (pagesNumber == "") {
		console.log("Error, you did not enter anything!");
		return false;
	} else if (pagesNumber == 0 || pagesNumber < 0) {
		console.log("Book with no pages? Don't think so!");
		return false;
	} else if (pagesNumber / pagesNumber != 1) {
		console.log("Error,", pagesNumber, "is not a number");
		return false;
	} else {
		return true;
	}
};

function isNameOfAuthor(name) {
	name = name.trim();
	var checkCount = 0;
	var temp = "qazwsxedcrfvtgbyhnujmikolp. ";
	for (var i = 0; i < name.length; i++) {
		if (temp.indexOf(name[i].toLowerCase()) == -1) {
			checkCount++;
		}
	}
	if (checkCount != 0) {
		console.log(name, "has invalid format");
		return false;
	} else {
		return true;
	}
};

openUserInput();
printBanner();


/*
console.log(isNumberOfPages("4"));
console.log(isNameOfAuthor("J. R. R. Tolkien"));
console.log("Enter a title of your favourite book");
*/
