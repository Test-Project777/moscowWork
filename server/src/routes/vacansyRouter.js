const express = require('express');
const { Vacansy } = require('../../db/models');

const vacancyRouter = express.Router();

vacancyRouter.get('/', async (req, res) => {
  const vacancies = await Vacansy.findAll();
  res.json(vacancies);
});
vacancyRouter.post('/', async (req, res) => {
  try {
    const { name, info, image, company, format, expireance, education } = req.body;
    const newVacancy = await Vacansy.create({
      ...req.body,
    });
    res.status(201).json(newVacancy);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = vacancyRouter;
