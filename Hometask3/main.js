var book1 = {
	title: "The Hobbit",
	pageNumber: 300,
	isInteresting: true,
	author: {
		firstName: "John Ronald Reuel",
		lastName: "Tolkien"
	},
	descriptInner: function () {
		console.log("Author", this.author.firstName, this.author.lastName, "\n", this.title, "\n", this.pageNumber, "pages");
		//console.log("Author", book1.author.firstName, book1.author.lastName, "\n", book1.title, "\n", book1.pageNumber, "pages");
	},
	matchInner: function(someAnotherBook) {
		if (this.pageNumber > someAnotherBook.pageNumber) {
			console.log(this.title, "has more pages than", someAnotherBook.title);
		} else if (this.pageNumber < someAnotherBook.pageNumber) {
			console.log(someAnotherBook.title, "has more pages than", this.title);
		} else {
			console.log("Number of pages in", this.title, "and", someAnotherBook.title, "is equal");
		}
	},
	descriptOuter: function (someBook) {
		console.log("Author", someBook.author.firstName, someBook.author.lastName, "\n", someBook.title, "\n", someBook.pageNumber, "pages");
	},
	matchOuter: function(firstBook, secondBook) {
		if (firstBook.pageNumber > secondBook.pageNumber) {
			console.log(firstBook.title, "has more pages than", someAnotherBook.title);
		} else if (firstBook.pageNumber < secondBook.pageNumber) {
			console.log(secondBook.title, "has more pages than", firstBook.title);
		} else {
			console.log("Number of pages in", firstBook.title, "and", secondBook.title, "is equal");
		}
	}
};

var book2 = {
	title: "The American Tragedy",
	pageNumber: 550,
	isInteresting: true,
	author: {
		firstName: "Theodore",
		lastName: "Dreiser"
	}
};

var book3 = {
	title: "I Am Charlotte Simmons",
	pageNumber: 900,
	isInteresting: true,
	author: {
		firstName: "Tom",
		lastName: "Wolfe"
	}
};

var book4 = {
	title: "The Lord of the Rings",
	pageNumber: 900,
	isInteresting: true,
	author: {
		firstName: "John Ronald Reuel",
		lastName: "Tolkien"
	}
};

function matchTwoBooks(firstBook, secondBook) {
	if (firstBook.pageNumber > secondBook.pageNumber) {
			return firstBook.title + "has more pages than" + someAnotherBook.title;
			//console.log(firstBook.title, "has more pages than", someAnotherBook.title);
		} else if (firstBook.pageNumber < secondBook.pageNumber) {
			return secondBook.title + "has more pages than" + firstBook.title;
			//console.log(secondBook.title, "has more pages than", firstBook.title);
		} else {
			return "Number of pages in" + firstBook.title + "and" + secondBook.title + "is equal";
			//console.log("Number of pages in", firstBook.title, "and", secondBook.title, "is equal");
		}
};

function findWordInTitle(book, word) {
	if (book.title.toLowerCase().indexOf(word.toLowerCase()) != -1) {
		return true;
	} else {
		return false;
	}
};

book1.descriptInner();
book1.descriptOuter(book2);
book1.matchInner(book2);
book1.matchOuter(book3, book4);
console.log(matchTwoBooks(book1, book3));
console.log(matchTwoBooks(book4, book3));
console.log("Does the book's title consist 'the' word? -", findWordInTitle(book1, "the"));