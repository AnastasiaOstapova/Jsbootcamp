var state = 1;
var STATE_TITLE = 1;
var STATE_NUM_PAGES = 2;
var STATE_DELETE = 6;
var STATE_END = 8;
var STATE_EDIT = 9;

var favBook = {
		author: {
		}
	};

var booksArray = [];

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
	//process.stdin.on("data", inputValue);
	process.stdin.on("data", userInput);
};

function inputValue(input) {
	var inputValue = input.trim();
	return inputValue;
}

/*
function testTest(inputValue) {
	favBook.title = inputValue;
	console.log("What is a genre of the book?");
	favBook.genre = inputValue;
	console.log("How many pages does it have?");
	while (!isNumberOfPages(inputValue)) {
		favBook.numPages = inputValue;
	};
	console.log("What is the name of the author?");
	while (!isNameOfAuthor(inputValue)) {
		favBook.author.name = inputValue;
	};
	console.log("Where he lived?");
	favBook.author.city = inputValue;
	bookInfo(favBook);
};
*/

function test() {

}


function userInput(input) {
	

	switch(inputValue(input).toLowerCase()) {
		case "again":
			state = STATE_TITLE;
			console.log("What is the title of your favorite book?");

		break;
		case "delete":
			state = STATE_DELETE;
			console.log("Enter name of the book you want to delete:");
		break;
		case "exit":
			console.log("Bye!");/
			process.exit();
		break;
		case "edit":
			state = STATE_EDIT;
			console.log("Enter name of the book you want to edit:");
		break;
		default:
			switch (state) {
				case STATE_TITLE:
					
					favBook.title = inputValue(input);
					state = STATE_NUM_PAGES;
					console.log("What is a genre of the book?");
				break;
				case STATE_NUM_PAGES:
					favBook.genre = inputValue(input);
					state = 3;
					console.log("How many pages does it have?");
				break;
				case 3:
					if (!isNumberOfPages(inputValue(input))) {
						console.log("How many pages does it have?");
					} else {
						favBook.numPages = inputValue(input);
						state = 4;
						console.log("What is the name of the author?");
					}	
				break;
				case 4:
					if (!isNameOfAuthor(inputValue(input))) {
						console.log("What is the name of the author?");
					} else {
						favBook.author.name = inputValue(input);
						state = 5;
						console.log("Where he lived?");
					}
				break;
				case 5:
					favBook.author.city = inputValue(input);
					bookInfo(favBook);	
					addNewBook(favBook);
					favBook = {
						author: {
						}
					};
					console.log(booksArray);		
				break;
				case STATE_DELETE:
					console.log("deleting");
					deleteBook(inputValue(input));
					console.log(booksArray);
				break;
				case STATE_EDIT:
					console.log("editing");
					updateBook(inputValue);
				break;
		}
		break;
	}
};




function bookInfo(book) {
	console.log("Thank you!\nYour favourite book is", book.title, "by", book.author.name, "(" + book.author.city + ")", ". This book has", book.numPages, "pages. Type 'exit' to quit or 'again' to enter the data again.");
}

function isNumberOfPages(pagesNumber) {
	//pagesNumber = pagesNumber.trim();
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
	//name = name.trim();
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

function addNewBook(book) {
	booksArray.push(book);
};

function deleteBook(bookTitle) {
	for (var i = 0; i < booksArray.length; i++) {
		if (booksArray[i].title == bookTitle) {
			booksArray.splice(i, 1);
		}
	}
};

openUserInput();
printBanner();
