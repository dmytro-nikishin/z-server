module.exports = app => {
    const anounces = require("../controllers/anounce.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", anounces.create);
  
    // Retrieve all Tutorials
    router.get("/", anounces.findAll);
  
    // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", anounces.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", anounces.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", anounces.delete);
  
    // Create a new Tutorial
    router.delete("/", anounces.deleteAll);
  
    app.use('/api/anounces', router);
  };
  