// accessing the model
const Task = require("../models/task");

// Create task Controller
module.exports.createtask = function (req, res) {
  Task.create(
    {
      description: req.body.description,
      category: req.body.category,
      duedate: req.body.duedate,
    },
    function (err, newTask) {
      console.log(err);
      if (err) {
        console.log("Error in creating the contact!");
        return;
      }

      console.log("*******", newTask);
      return res.redirect("back");
    }
  );
};
