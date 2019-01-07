const fetch = require("src/interfaces/http/fetch");

module.exports = ({ config }) => {
  const URL = config.get("TODOS_REMOTE_URL");

  return {
    async findAll() {
      return fetch(URL);
    },
    async findById(id) {
      return fetch(`${URL}/${id}`);
    },
    async create(todo) {
      return fetch(URL, {
        method: "POST",
        body: todo
      });
    },
    async update(update, id) {
      return fetch(`${URL}/${id}`, {
        method: "PATCH",
        body: update
      });
    },
    async delete(id) {
      return fetch(`${URL}/${id}`, {
        method: "DELETE"
      });
    }
  };
};
