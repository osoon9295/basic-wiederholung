import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [isDark, setIsDark] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const plusNum = () => {
    setCount(count + 1);
  };

  const minusNum = () => {
    setCount(count - 1);
  };

  const changeMode = () => {
    setIsDark(!isDark);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    alert(`입력한 값 : ${inputValue}`);
    setInputValue("");
  };

  return (
    <div
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
      }}
    >
      <div>
        Count: {count}
        <button onClick={plusNum}>+</button>
        <button onClick={minusNum}>-</button>
      </div>
      <div>
        {isDark ? "다크모드" : "화이트모드"}
        <button onClick={changeMode}>change</button>
      </div>
      <div>
        <input
          type="text"
          placeholder="입력하세요"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleSubmit}>제출</button>
      </div>
    </div>
  );
}

export default App;
