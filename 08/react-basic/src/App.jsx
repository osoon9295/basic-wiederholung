import { useState } from "react";
import TodoList from "./TodoList";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const changePasswordConfirm = (e) => {
    setPasswordConfirm(e.target.value);
  };

  const onSingupSubmit = (e) => {
    e.preventDefault();
    // 만약 이메일에 아무것도 입력하지 않았다면
    if (!email) {
      alert("이메일을 입력하세요.");
      return;
    }
    if (!password) {
      alert("비밀번호를 입력하세요.");
      return;
    }
    if (password !== passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다. ");
      return;
    }
    if (password.length < 8) {
      alert("비밀번호는 8자 이상");
      return;
    }
    alert(`이메일은 ${email}이고, 비밀번호는 ${password}다아아`);
  };

  return (
    <form onSubmit={onSingupSubmit}>
      <div>
        <label>이메일:</label>
        <input type="email" id="email" value={email} onChange={changeEmail} />
      </div>
      <div>
        <label>비밀번호:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={changePassword}
        />
      </div>
      <div>
        <label>비밀번호 확인</label>
        <input
          type="password"
          id="passwordConfirm"
          value={passwordConfirm}
          onChange={changePasswordConfirm}
        />
      </div>
      <button type="submit">회원가입</button>
      <TodoList />
    </form>
  );
};

export default App;
