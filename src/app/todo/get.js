module.exports = todosRepository => {
  return {
    all() {
      return todosRepository.findAll();
    },
    byId(id) {
      return todosRepository.findById(id);
    }
  };
};
