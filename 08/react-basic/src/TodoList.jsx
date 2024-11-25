import { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([
    { id: 1, text: "잠자기", completed: true },
    { id: 2, text: "일찍 일어나기", completed: false },
  ]);

  const handleTodo = (e) => {
    setTodo(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    if (!todo.trim()) return;
    const newTodo = {
      id: Date.now(),
      text: todo,
      completed: false,
    };
    setTodoList([...todoList, newTodo]);
    setTodo("");
  };

  const handleDeleteTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const handleToggleTodo = (id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <h1>할 일 목록</h1>
      <div>
        <input
          type="text"
          placeholder="할 일을 추가하세요"
          value={todo}
          onChange={handleTodo}
        />
        <button onClick={addTodo}>추가</button>
      </div>
      <ul>
        {todoList.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
            <button onClick={() => handleToggleTodo(todo.id)}>
              {todo.completed ? "취소" : "완료"}
            </button>
            <button onClick={() => handleDeleteTodo(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
