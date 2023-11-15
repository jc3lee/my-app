import React from "react";

export default function Friend({ gender, age, name }: Friend) {
  return (
    <>
      <h3>Friend characteristics</h3>
      <p className="font-bold text-lg">Name: {name}</p>
      <p className="font-semibold mt-2">Gender: {gender}</p>
      <p className="font-bold mt-1 text-sm">Age: {age}</p>
    </>
  );
}
