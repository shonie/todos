module.exports = todosRepository => {
  return {
    async post(todo) {
      return todosRepository.create(todo);
    }
  };
};
