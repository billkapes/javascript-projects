class Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
       this.title = title;
       this.author = author;
       this.copyright = copyright;
       this.isbn = isbn;
       this.pages = pages;
       this.timesCheckedOut = timesCheckedOut;
       this.discarded = discarded;
    }
 
    checkout(uses=1) {
       this.timesCheckedOut += uses;
    }
 }
 
 class Manual extends Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
       super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
    }
 
    dispose(currentYear){
       if (currentYear-this.copyright > 5) {
          this.discarded = 'Yes';
       }
    }
 }
 
 class Novel extends Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
       super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
    }
 
    dispose(){
       if (this.timesCheckedOut > 100) {
          this.discarded = 'Yes';
       }
    }
 }

 let novel1 = new Novel('Pride and Prejudice', 'Jane Austen', 1813, '1111111111111', 432, 32, 'No');
 let manual1 = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1, 'No');

 manual1.dispose(2024);
 novel1.checkout(5);

 console.log(manual1, novel1);
