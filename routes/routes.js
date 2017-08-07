const express = require('express');
const routes = express.Router();

const Collection = require('../models/collection');

routes.get('/', (req, res) => {
  Collection.find()
    // then show my contacts
    .then(collections => res.render('listFabric', { collections: collections }))
    // handle errors
    .catch(err => res.send('there was an error :('));
});

routes.get('/fabricForm', (req, res) => {
  if (req.query.id) {
    Collection.findById(req.query.id)
      // render form with this contact
      .then(collections => res.render('fabricForm', { collections: collections }));
  } else {
    res.render('fabricForm');
  }
});

routes.post('/addFabric', (req, res) => {
  if (req.body.id) {
    Contact.findById(req.body.id)
  } else {
    new Collection(req.body)
      .save()
      // then redirect to the homepage
      .then(() => res.redirect('/'))
      // catch validation errors
      .catch(err => {
        console.log(err.errors);
        res.render('fabricForm', {
          errors: err.errors,
          collections: req.body
        });
      });
  }

});

routes.get('/deleteFabric', (req, res) => {
  Collection.findById(req.query.id)
    .remove()
    // then redirect to the homepage
    .then(() => res.redirect('/'));
});

module.exports = routes;
