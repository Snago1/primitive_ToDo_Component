import { useState } from "react";
import { Button } from "antd";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput("");
    }
  };
  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };
  return (
    <div>
      <input
        style={{ marginRight: 20 }}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button type="primary" onClick={addTodo}>
        Добавить задачу
      </Button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <Button
              danger
              style={{ marginLeft: 20 }}
              onClick={() => removeTodo(index)}
            >
              Удалить
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
