const express = require('express');
const { Category } = require('../../db/models');

const categoryRouter = express.Router();

categoryRouter.get('/', async (req, res) => {
  const category = await Category.findAll();
  res.json(category);
});


module.exports = categoryRouter;
