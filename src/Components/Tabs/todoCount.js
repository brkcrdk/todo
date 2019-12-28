export const todoCount = (array) => {
  const filteredItems =
    array &&
    array.filter((todo) => {
      return todo.isDone === false;
    });
  return filteredItems.length;
};
