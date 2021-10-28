const db = require("../models");
const Anounce = db.anounces;

/*
router.post("/anounces", (req, res) => {
  const myData = new Anounce(req.body);
  console.log(req);
 
  myData.save()
  .then(item => {
  res.send("item saved to database");
  })
  .catch(err => {
  res.status(400).send("unable to save to database");
  });
 
 });
 */

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
/*
    if (!req.body.Name) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  */
    // Create a Tutorial
    const anounce = new Anounce(req.body);
    console.log(req.body);
      /*
      {
      Id: req.body.Id,
      Name: req.body.Name,
      Date: req.body.Date,
      Text: req.body.Text,
      New: req.body.New,
      Link: req.body.Link,
      // published: req.body.published ? req.body.published : false
    }
    */
    // );
  
    // Save Tutorial in the database
    anounce
      .save(anounce)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Anounce."
        });
      });
  };

// Retrieve all Anouncess from the database.


exports.findAll = (req, res) => {
        const Name = req.query.Name;
        var condition = Name ? { Name: { $regex: new RegExp(Name), $options: "i" } } : {};
      
        Anounce.find(condition)
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while retrieving anouncess."
            });
          });
};  
  


// Find a single Anounce with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Anounce.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Anounce with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Anounce with id=" + id });
      });
  };

// Update a Anounce by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Anounce.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Anounce with id=${id}. Maybe Anounce was not found!`
          });
        } else res.send({ message: "Anounce was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Anounce with id=" + id
        });
      });
  };

// Delete a Anounce with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Anounce.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Anounce with id=${id}. Maybe Anounce was not found!`
          });
        } else {
          res.send({
            message: "Anounce was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Anounce with id=" + id
        });
      });
  };

// Delete all Anounces from the database.
exports.deleteAll = (req, res) => {
    Anounce.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Anounces were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all anounces."
        });
      });
  };

// Find all published Anouncess
/*
exports.findAllPublished = (req, res) => {
    Anounce.find({ New: true })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving anouncess."
        });
      });
  };
  */