const get = require("src/app/todo/get");
const patch = require("src/app/todo/patch");
const post = require("src/app/todo/post");
const deleteCase = require("src/app/todo/delete");

module.exports = {
  get,
  patch,
  post,
  delete: deleteCase
};
