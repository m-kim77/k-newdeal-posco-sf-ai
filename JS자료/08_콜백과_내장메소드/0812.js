// ✏️ 직접 해보기 3 — repeat 로 1부터 4까지의 제곱을 출력해 보세요.

function repeat(count, callback) {
  for (let i = 1; i <= count; i++) {
    callback(i); // 몇 번째인지 콜백에 넘겨 줍니다
  }
}

repeat(4, (n) => {
  console.log(n * n);
});

// ✏️ 직접 해보기 1 — 숫자 배열 [10, 20, 30] 을 forEach 로 출력해 보세요.
[10, 20, 30].forEach((element) => console.log(element));
// 10
// 20
// 30

// ✏️ 직접 해보기 2 — 아래 배열을 "1. 국어" 형태로 출력해 보세요.
//                    const subjects = ["국어", "영어", "수학"];
const subjects = ["국어", "영어", "수학"];
subjects.forEach((subject, index) => console.log(`${index + 1}. ${subject}`));
// 1. 국어
// 2. 영어
// 3. 수학

// (합계는 개념05의 reduce 로 더 깔끔하게 쓸 수 있습니다)
const cart = [
  { name: "아메리카노", price: 4000, count: 2 },
  { name: "케이크", price: 6000, count: 1 },
];
// ✏️ 직접 해보기 3 — cart 의 상품 이름만 한 줄씩 출력해 보세요.
cart.forEach((item) => console.log(item.name));
// 아메리카노
// 케이크

// ✏️ 직접 해보기 4 — forEach 로 짝수만 출력해 보세요. (홀수는 return 으로 건너뛰기)
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
nums.forEach((num) => {
  if (num % 2) return;
  else console.log(num);
});
// 2
// 4
// 6
// 8
// 10

// ✏️ 직접 해보기 1 — [1, 2, 3] 의 각 값을 10배로 만든 새 배열을 만들어 보세요.
const numbers = [1, 2, 3];
const numbers_x10 = numbers.map((n) => n * 10);
console.log(numbers_x10);
// [ 10, 20, 30 ]

const new_numbers_x10 = numbers.map((n) => {
  n * 10;
  // return n * 10;
});
console.log(new_numbers_x10);
// 중괄호는 reutun!!!

// ✏️ 직접 해보기 3 — ["1", "2", "3"] 을 숫자 배열로 바꿔 보세요.
const inputs = ["10", "20", "30"];
const numarr = inputs.map((v) => Number(v));
console.log(numarr);
// [ 10, 20, 30 ]

// ✏️ 직접 해보기 4 — users 에서 이름만 뽑아 " / " 로 이어 출력해 보세요.
// 실무에서 가장 많이 쓰는 형태입니다.
const users = [
  { name: "김민준", age: 20 },
  { name: "이서연", age: 22 },
  { name: "박지훈", age: 28 },
];

users_name = users.map((users) => users.name);
console.log(users_name.join(" / "));
// 김민준 / 이서연 / 박지훈

// ✏️ 직접 해보기 5 — 아래 배열에 번호를 붙인 새 배열을 만들어 보세요.
//                    const fruits = ["사과", "포도"];
//                    결과는 [ '1 사과', '2 포도' ] 형태면 됩니다.
const fruits = ["사과", "포도"];
const new_fruits = fruits.map((fruit, index) => `${index + 1} ${fruit}`);
console.log(new_fruits);
// [ '1 사과', '2 포도' ]

// ✏️ 직접 해보기 1 — [12, 7, 30, 5] 에서 10 이상인 값만 골라 보세요.
const arr = [12, 7, 30, 5];
console.log(arr.filter((a) => a >= 10));

// ✏️ 직접 해보기 2 — ["a", "", "b", ""] 에서 빈 문자열을 걸러 보세요.
const arr2 = ["a", "", "b", ""];
console.log(arr2.filter((arr2) => arr2));
// [ 'a', 'b' ]

// ✏️ 직접 해보기 3 — products 에서 5000원 이상인 상품 이름만 뽑아 보세요.
const products = [
  { name: "아메리카노", price: 4000, stock: 10 },
  { name: "라떼", price: 4500, stock: 0 },
  { name: "케이크", price: 6000, stock: 3 },
  { name: "쿠키", price: 3000, stock: 0 },
];
console.log(
  products.filter((item) => item.price >= 5000).map((item) => item.name),
);
// [ '케이크' ]

// ✏️ 직접 해보기 4 — products 에서 이름이 "쿠키" 인 상품의 가격을 출력해 보세요.
console.log(products.find((p) => p.name == "쿠키").price);

// ✏️ 직접 해보기 5 — products 에서 재고가 0인 첫 상품의 위치를 출력해 보세요.
console.log(`${products.findIndex((p) => p.stock == 0) + 1} 번째 상품입니다.`);

// ✏️ 직접 해보기 6 — scores 에 90점 이상이 하나라도 있는지 확인해 보세요.
const scores = [90, 55, 78, 40, 88];
console.log(scores.some((score) => score >= 90));
// true

// ✏️ 직접 해보기 1 — [1, 2, 3, 4, 5] 의 합을 reduce 로 구해 보세요.
console.log([1, 2, 3, 4, 5].reduce((acc, n) => acc + n, 0));
// 15

// ✏️ 직접 해보기 2 — ["안", "녕", "하", "세", "요"] 를 reduce 로 이어붙여 보세요.
console.log(["안", "녕", "하", "세", "요"].reduce((acc, n) => acc + n));
// 안녕하세요

// ✏️ 직접 해보기 3 — cart 에서 단가(price)의 합만 구해 보세요.
const cart_1 = [
  { name: "아메리카노", price: 4000, count: 2 },
  { name: "케이크", price: 6000, count: 1 },
  { name: "쿠키", price: 3000, count: 3 },
];
console.log(cart_1.reduce((acc, item) => acc + item.price, 0));
// 13000

// ✏️ 직접 해보기 4 — scores 의 최솟값을 reduce 로 구해 보세요.
// const scores = [90, 55, 78, 40, 88];
console.log(scores.reduce((acc, n) => (acc < n ? acc : n)));
// 40

// ✏️ 직접 해보기 5 — ["A", "B", "A", "A"] 의 개수를 세어 보세요.
const count = ["A", "B", "A", "A"].reduce((acc, item) => {
  acc[item] = (acc[item] ?? 0) + 1;
  return acc;
}, {});
console.log(count);
// { A: 3, B: 1 }

// ✏️ 직접 해보기 2 — 아래 배열의 원본은 그대로 두고 정렬된 복사본을 만들어 보세요.
//                    const origin = [3, 1, 2];
//                    (힌트: 06단원에서 배운 slice() 로 먼저 복사합니다)
const origin = [3, 1, 2];
const copy_origin = origin.toSorted((a, b) => a - b);
console.log(origin);
console.log(copy_origin);
// [ 3, 1, 2 ]
// [ 1, 2, 3 ]
const copy_origin2 = origin.slice().sort((a, b) => a - b);
console.log(origin);
console.log(copy_origin2);
// [ 3, 1, 2 ]
// [ 1, 2, 3 ]
const copy_origin3 = [...origin].sort((a, b) => a - b);
console.log(origin);
console.log(copy_origin3);
// [ 3, 1, 2 ]
// [ 1, 2, 3 ]
