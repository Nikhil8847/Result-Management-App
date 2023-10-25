const express =  require('express');
const route = express.Router();

const services = require("../services/render")
const controller = require("../controller/controller")

route.get("/", services.homeRoutes);
route.get("/dashboard", services.dashboard);
route.get("/add-result", services.add_result);
route.get("/result", services.result)
route.get("/update-result", services.update_result);
route.get("/student-result", services.student_result);

// API
route.post('/api/results', controller.create);
route.get('/api/results', controller.find);
route.put('/api/results/:rollno', controller.update);
route.delete('/api/results/:rollno', controller.delete);

module.exports = route