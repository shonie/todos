module.exports = todosRepository => {
  return {
    patch(todo, id) {
      return todosRepository.update(todo, id);
    }
  };
};
