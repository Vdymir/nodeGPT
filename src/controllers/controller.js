const Model = require('../models/model');

const controller = {};

controller.create = (req, res) => {
  const model = new Model(req.body);

  model.save().then(() => {
    res.send('Created successfully');
  }).catch((error) => {
    res.status(400).send(error);
  });
};

controller.read = (req, res) => {
  Model.find().then((models) => {
    res.send(models);
  }).catch((error) => {
    res.status(400).send(error);
  });
};

controller.update = (req, res) => {
  const id = req.params.id;

  Model.findByIdAndUpdate(id, req.body).then(() => {
    res.send('Updated successfully');
  }).catch((error) => {
    res.status(400).send(error);
  });
};

controller.delete = (req, res) => {
  const id = req.params.id;

  Model.findByIdAndDelete(id).then(() => {
    res.send('Deleted successfully');
  }).catch((error) => {
    res.status(400).send(error);
  });
};

module.exports = controller;
