module.exports = todosRepository => {
  return {
    delete(id) {
      return todosRepository.delete(todo, id);
    }
  };
};
