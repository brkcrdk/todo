import { generateKey } from "./generateKey";
import { alertOpen, alertClose } from "./alertToggle";
import { closeModal } from "../Modal/modalToggle";

export const input = (e, setTodoValue) => {
  setTodoValue(e.target.value.trim());
};

export const remove = (id, todos, setTodos) => {
  const newArray = todos.filter((todo) => {
    return todo.id !== id;
  });
  setTodos(newArray);
};

export const add = (todoValue, setTodos, todos, setTodoValue) => {
  if (todoValue !== "") {
    const newTodo = {
      job: todoValue,
      isDone: false,
      id: generateKey(todoValue[0])
    };
    const local = JSON.stringify(newTodo);
    setTodos([...todos, newTodo]);
    setTodoValue("");
    closeModal();
    localStorage.setItem(`todo-${newTodo.id}`, local);
  } else {
    alertOpen();
    setTimeout(() => {
      alertClose();
    }, 3000);
  }
};

export const up = (index, todos, setTodos) => {
  if (index > 0) {
    const newArray = todos.slice();
    newArray[index] = todos[index - 1];
    newArray[index - 1] = todos[index];
    setTodos(newArray);
  }
};

export const down = (index, todos, setTodos) => {
  if (index <= todos.length - 1) {
    const newArray = todos.slice();
    newArray[index] = todos[index + 1];
    newArray[index + 1] = todos[index];
    setTodos(newArray);
  }
};

export const done = (id, todos, setTodos) => {
  const newArray = todos.map((obj) =>
    obj.id === id ? { ...obj, isDone: true } : obj
  );
  setTodos(newArray);
};
