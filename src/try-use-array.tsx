import React from "react";
import { useMount, useArray } from "./utils/util";
export const TsReactTest = () => {
  const persons: { name: string; age: number }[] = [
    { name: "sam", age: 22 },
    { name: "lili", age: 24 },
  ];

  const { value, add, removeIndex, clear } = useArray(persons);

  useMount(() => {});

  return (
    <div>
      <button onClick={() => add({ name: "john", age: 27 })}>add john</button>
      <button onClick={() => removeIndex(0)}>remove 0</button>
      <button style={{ marginBottom: "50px" }} onClick={() => clear()}>
        clear
      </button>
      {value.map((person, index) => (
        <div key={index} style={{ marginBottom: "30px" }}>
          <span style={{ color: "red" }}>{index}</span>
          <span>{person.name}</span>
          <span>{person.age}</span>
        </div>
      ))}
    </div>
  );
};
