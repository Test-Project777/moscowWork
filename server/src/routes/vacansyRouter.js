const express = require('express');
const { Vacansy } = require('../../db/models');

const vacancyRouter = express.Router();

vacancyRouter.get('/', async (req, res) => {
  const vacancies = await Vacansy.findAll();
  res.json(vacancies);
});

module.exports = vacancyRouter;
