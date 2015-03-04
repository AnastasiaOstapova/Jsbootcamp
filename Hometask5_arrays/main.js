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
	process.stdin.on("data", onUserInput);
};

function onUserInput(input) {
	input = input.trim();

	switch(input.toLowerCase()) {
		case "again":
			state = STATE_TITLE;
			console.log("What is the title of your favorite book?");

		break;
		case "delete":
			state = STATE_DELETE;
			console.log("Enter name of the book you want to delete:");
		break;
		case "exit":
			process.exit();
		break;
		case "edit":
			state = STATE_EDIT;
			console.log("Enter name of the book you want to edit:");
		break;
		default:
			switch (state) {
				case STATE_TITLE:
					
					favBook.title = input;
					state = STATE_NUM_PAGES;
					console.log("What is a genre of the book?");
				break;
				case STATE_NUM_PAGES:
					favBook.genre = input;

					state = 3;
					console.log("How many pages does it have?");
				break;
				case 3:
					if (!isNumberOfPages(input)) {
						console.log("How many pages does it have?");
					} else {
						favBook.numPages = input;
						state = 4;
						console.log("What is the name of the author?");
					}	
				break;
				case 4:
					if (!isNameOfAuthor(input)) {
						console.log("What is the name of the author?");
					} else {
						favBook.author.name = input;
						state = 5;
						console.log("Where he lived?");
					}
				break;
				case 5:
					favBook.author.city = input;
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
					deleteBook(input);
					console.log(booksArray);
				break;
				case STATE_EDIT:
					console.log("editing");
					updateBook(input);
				break;
		}
		break;
	}
};

function bookInfo(book) {
	console.log("Thank you!\nYour favourite book is", book.title, "by", book.author.name, "(" + book.author.city + ")", ". This book has", book.numPages, "pages. Type 'exit' to quit or 'again' to enter the data again.");
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

/*
function updateBook(bookTitle, input) {
	for (var i = 0; i < booksArray.length; i++) {
		if (booksArray[i].title == bookTitle) {
			state = 11;
			switch (state) {
				case 11:
						console.log(input);	
						booksArray[i].title = input;
						state = 12;
						console.log("What is a genre of the book?");
					break;
					case 12:
						booksArray[i].genre = input;

						state = 13;
						console.log("How many pages does it have?");
					break;
					case 13:
						if (!isNumberOfPages(input)) {
							console.log("How many pages does it have?");
						} else {
							booksArray[i].numPages = input;
							state = 14;
							console.log("What is the name of the author?");
						}	
					break;
					case 14:
						if (!isNameOfAuthor(input)) {
							console.log("What is the name of the author?");
						} else {
							booksArray[i].author.name = input;
							state = 15;
							console.log("Where he lived?");
						}
					break;
					case 15:
						booksArray[i].author.city = input;
						bookInfo(booksArray[i]);			
					break;
			}
		}
	}
};
*/


openUserInput();
printBanner();