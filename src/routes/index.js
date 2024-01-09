const express = require("express");
const routeUser = require("./routeUser");
const routeWorkout = require("./routeWorkout");
const routeCategory = require("./routeCategory");
const routeSelectWorkout = require("./routeSelectWorkout");
;
const routeExercises = require("./routeExercises");
const routeMeals = require("./routeMeals");
const routeDailyComplete = require("./routeDailyComplete");

const routes = express.Router();

routes.use("/user", routeUser);
routes.use("/workout", routeWorkout);
routes.use("/category", routeCategory);
routes.use("/selectworkout", routeSelectWorkout);
routes.use("/meals", routeMeals);
routes.use("/exercises", routeExercises);
routes.use("/dailycomplete", routeDailyComplete);

module.exports = routes;
