const { Router } = require('express');
const { getAllCountriesHandler, getStateByCountryIdHandler } = require('../handlers/CountryHandler');
const countryRouter = Router();


countryRouter.get("/all", getAllCountriesHandler)
countryRouter.get("/:id", getStateByCountryIdHandler)

module.exports = countryRouter;