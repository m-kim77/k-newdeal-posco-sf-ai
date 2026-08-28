import React from "react";

export default function MenuRow2({ name, price }) {
  return (
    <div>
      <strong>{name}</strong> — {price}원
      <br />
      <small>오늘의 추천</small>
    </div>
  );
}
