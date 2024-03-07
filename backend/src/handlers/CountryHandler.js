const getAllCountries = require("../controllers/CountryController/getAllCountries");
const getStateByCountryId = require("../controllers/CountryController/getStateByCountryId");


const getAllCountriesHandler = async (req, res) => {
    try {
        const response = await getAllCountries();
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

const getStateByCountryIdHandler = async (req, res) => {
    try {
        const response = await getStateByCountryId(req.params);
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

module.exports = {
    getAllCountriesHandler,
    getStateByCountryIdHandler
}