import { generateKey } from "./generateKey";
import { alertOpen, alertClose } from "./alertToggle";
import { closeModal } from "../Modal/modalToggle";

const updateLocalStorage = (array) => {
  localStorage.clear();
  array.map((item) => {
    const local = JSON.stringify(item);
    return localStorage.setItem(`todo-${item.id}`, local);
  });
};

export const input = (e, setTodoValue) => {
  setTodoValue(e.target.value.trimLeft());
};

export const remove = (id, todos, setTodos) => {
  const newArray = todos.filter((todo) => {
    return todo.id !== id;
  });
  setTodos(newArray);
  if (`todo-${id}` in localStorage) {
    localStorage.removeItem(`todo-${id}`);
  }
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
    updateLocalStorage(newArray);
  }
};

export const down = (index, todos, setTodos) => {
  if (index <= todos.length - 1) {
    const newArray = todos.slice();
    newArray[index] = todos[index + 1];
    newArray[index + 1] = todos[index];
    setTodos(newArray);
    updateLocalStorage(newArray);
  }
};

export const done = (id, todos, setTodos) => {
  const newArray = todos.map((obj) =>
    obj.id === id ? { ...obj, isDone: true } : obj
  );
  setTodos(newArray);
  updateLocalStorage(newArray);
};

export const fetchLocal = () => {
  const local = { ...localStorage };
  const newArray = [];
  Object.keys(local).map((key) => {
    const item = localStorage.getItem(key);
    if (item !== null) {
      const todo = JSON.parse(item);
      newArray.push(todo);
    }
    return item;
  });
  return newArray;
};
