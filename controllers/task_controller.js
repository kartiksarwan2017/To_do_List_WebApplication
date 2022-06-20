const Task = require("../models/task");

// var taskList = [
//     {
//         description: "get vegetables",
//         category: "Perosal",
//         duedate: "12/10/23"

//     },
//     {
//         description: "Home Work",
//         category: "School",
//         duedate: "12/10/23"
//     },
//     {
//         description: "Exercise",
//         category: "Others",
//         duedate: "12/10/23"
//     }
// ]

// Creating a home controller
module.exports.home = function (req, res) {
  Task.find({}, function (err, tasks) {
    if (err) {
      console.log("Error in fetching contacts from db");
      return;
    }

    return res.render("home", {
      title: "TO DO List Web Application",
      task_list: tasks,
    });
  });
};
