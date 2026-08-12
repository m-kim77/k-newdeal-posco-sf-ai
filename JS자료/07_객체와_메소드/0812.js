const user = {
  name: "김민준",
  age: 20,
  city: "부산",
};

for (const key in user) {
  console.log(key, user[key]);
}
// 출력: name
// 출력: age
// 출력: city

// 값만 필요할 때 편합니다.
const scores = { 국어: 90, 영어: 85, 수학: 70 };
const scoreList = Object.values(scores);

// ✏️ 직접 해보기 3 — scores 의 값 중 최고점을 구해 보세요.
console.log(Math.max(...scoreList));
// 출력 : 90

// ✏️ 직접 해보기 4 — Object.entries 로 scores 를 "과목: 점수" 형태로 출력해 보세요.
for (const [key, value] of Object.entries(scores)) {
  console.log(key, value);
}
