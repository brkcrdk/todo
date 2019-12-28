export const todoFilter = (array, section, search) => {
  const filteredItems =
    array &&
    array
      .filter((todo, index) => {
        if (section === "Aktif Görevler") {
          return todo.isDone === false;
        } else if (section === "Biten Görevler") {
          return todo.isDone === true;
        } else {
          return todo;
        }
      })
      .filter((todo) => {
        if (search !== "") {
          const regExp = new RegExp(search, "gi");
          return todo.job.match(regExp);
        } else {
          return todo;
        }
      });
  return filteredItems;
};
