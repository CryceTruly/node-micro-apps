const todosController = require("../controllers").todos;
const todoItemsController = require("../controllers").todoItems;
const todoController = require("../controllers").todo;

module.exports = (app) => {
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "Welcome to the Todos API!",
    })
  );

  app.post("/api/todos", todosController.create);
  app.get("/api/todos", todosController.list);
  app.post("/api/todos/:todoId/items", todoItemsController.create);
  app.get("/api/todos/:todoId", todoController.retrieve);
  app.put("/api/todos/:todoId", todoController.update);
  app.delete("/api/todos/:todoId", todoController.destroy);
};
