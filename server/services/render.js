const axios = require('axios')

exports.homeRoutes = (req,res) => {
    // Make a get request to /api/results
    res.render("index")
}

exports.student_result = (req, res) => {
    console.log(req.query)
    axios
      .get("http://localhost:3000/api/results", {
        params: { rollno: req.query.rollno, dateOfBirth: req.query.dateOfBirth },
      })
      .then(function (resultData) {
        console.log(resultData)
        if(resultData.data.length === 0){
            res.render("result_form")
        }
        console.log("resultdata : ", resultData.data);
        res.render("student_result", { student: resultData.data });
      });
}
exports.dashboard = (req,res) => {
    // Make a get request to /api/results
    axios.get("http://localhost:3000/api/results").then(function(response) {
        res.render('dashboard', {results: response.data});
        console.log(response.data);
    })
    .catch(err=> {
        res.send(err);
    })
}

exports.update_result = (req, res) => {
    axios.get("http://localhost:3000/api/results", {params: {rollno : req.query.rollno, dateOfBirth : req.query.dob}})
    .then(function(resultdata) {
        console.log("resultdata : ", resultdata.data)
        res.render("update_result", {result: resultdata.data})
    })
    .catch(err => {
        res.send(err);
    })
};

exports.add_result = (req, res) => {
  res.render("add_result");
};

exports.result = (req, res) => {
    res.render("result_form");
}