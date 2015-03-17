var books = [
	book1 = {
		title: "The Hobbit",
		genre: "fantasy",
		numPages: 350,
		author: {
			name: "J. R. R. Tolkien",
			city: "England"
		}
	},
	book2 = {
		title: "The American Tragedy",
		genre: "drama",
		numPages: 600,
		author: {
			name: "Theodore Draiser",
			city: "USA"
		}
	},
	book3 = {
		title: "I am Scharlotta Simmons",
		genre: "novel",
		numPages: 650,
		author: {
			name: "Tom Volfe",
			city: "America"
		}
	},
	book4 = {
		title: "Three Comrades",
		genre: "novel",
		numPages: 240,
		author: {
			name: "E. M. Remark",
			city: "German"
		}
	},
	book5 = {
		title: "The last secret",
		genre: "detective",
		numPages: 280,
		author: {
			name: "B. Werber",
			city: "France"
		}
	},
	book6 = {
		title: "Deception Point",
		genre: "detective",
		numPages: 320,
		author: {
			name: "Dan Brown",
			city: "America"
		}
	}
];

books.sort(function(bookA, bookB) {
	return bookA.numPages - bookB.numPages;
}).forEach(function(book) {
	console.log(book);
});

//console.log(books);

books.sort(function(bookB, bookA) {
	return bookA.numPages - bookB.numPages;
}).forEach(function(book) {
	console.log(book);
});