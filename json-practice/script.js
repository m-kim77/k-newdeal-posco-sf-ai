// 케이스 1
const bookJson = `{
  "title": "어린 왕자",
  "author": "생텍쥐페리",
  "year": 1943,
  "available": true
}`;

console.log(bookJson);
console.log(typeof bookJson);

const book = JSON.parse(bookJson);
console.log(book);
console.log(typeof book);

console.log("전체 객체:", book);

console.log("도서명:", book.title);
console.log("저자:", book.author);
console.log("출판년도:", book.year);
console.log("대여 가능 여부:", book.available);

// 케이스 2
const menuJson = `{
  "name": "아메리카노",
  "price": 4500,
  "size": "Grande",
  "ice": true
}`;
const menu = JSON.parse(menuJson);
console.log("객체 전체", menu);

//케이스 3
const memberJson = `{
  "name": "김철수",
  "age": 28,
  "membership": "3개월",
  "pt": false
}`;

const member = JSON.parse(memberJson);
console.log("객체 전체", member);
