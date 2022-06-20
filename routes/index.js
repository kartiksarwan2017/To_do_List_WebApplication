// Accessing the express Router
const express = require("express");
const router = express.Router();
const taskController = require("../controllers/task_controller");
const createTaskController = require("../controllers/create_task_controller");
const deleteTaskController = require("../controllers/delete_task_controller");

console.log("Router loaded");

// Accessing the Routes
router.get("/", taskController.home);
router.post("/createtodolist", createTaskController.createtask);
router.get("/delete-contact", deleteTaskController.deleteTask);

module.exports = router;
