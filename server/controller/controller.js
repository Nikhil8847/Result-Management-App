const Result = require("../model/model");

// create and save new result
exports.create = (req, res) => {
  // validate reques
  if (!req.body) {
    res.status(400).send({ message: "Content cannot be empty" });
    return;
  }

  var result = Result.build({
    name: req.body.name,
    rollno: req.body.rollno,
    dateOfBirth: req.body.dateOfBirth,
    score: req.body.score,
  });

  result
    .save()
    .then((data) => res.redirect("/add-result"))
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while storing result",
      });
    });
};

// retrieve and return all results/ retrieve and return a single result
exports.find = (req, res) => {
  if (req.query.rollno && req.query.dateOfBirth) {
    Result.findOne({
      where: {
        rollno: req.query.rollno,
        dateOfBirth: req.query.dateOfBirth,
      },
    })
      .then((result) => res.send(result))
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Error occurred while retrieving the information",
        });
      });
  } else if (req.query.rollno || req.query.dateOfBirth) {
    res.status(404).send({ message: "Empty fields are allowed" });
  } else {
    Result.findAll()
      .then((results) => res.send(results))
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Error occurred while retrieving the information",
        });
      });
  }
};

// update a new identified user by user id
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update cannot be empty" });
  }

  console.log(req.params.rollno, req.body.rollno);

  Result.destroy({
    where: {
      rollno: req.params.rollno,
    },
  }).then((rowNumber) => {
    var result = Result.build({
      name: req.body.name,
      rollno: req.body.rollno,
      dateOfBirth: req.body.dateOfBirth,
      score: req.body.score,
    });

    result
      .save()
      .then((data) => {
        console.log(data);
        res.send(
          {redirect: `/update-result?rollno=${data.rollno}&dob=${data.dateOfBirth}`}
        );
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while updating result",
        });
      });
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while updating result",
    });
  })
};

// Delete a user with specified user id
exports.delete = (req, res) => {
  const id = req.params.rollno;

  Result.destroy({
    where: {
      rollno: id,
    },
  })
    .then((rowDeleted) => {
      if (rowDeleted === 1) {
        res.send({
          message: "Result was deleted successfully",
        });
      } else {
        res
          .status(404)
          .send({ message: `Cannot deleted with id ${id}. Maybe id is wrong` });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: `Couldn't delete student with roll no = ${id}` });
    });
};
