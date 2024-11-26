import { useState } from "react";

interface Wrapper<T> {
  value: T;
}

const App = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(0);

  function wrapInArray<T>(value: T): [T] {
    return [value];
  }

  // 사용 예시:
  const numberArray = wrapInArray<number>(5);
  const stringArray = wrapInArray<string>("hello");

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setNum1(e.target.value);
        }}
      />
      <input
        type="text"
        onChange={(e) => {
          setNum2(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setSum(num1 + num2);
        }}
      >
        더하기
      </button>
      <div>{sum}</div>
    </div>
  );
};

export default App;
