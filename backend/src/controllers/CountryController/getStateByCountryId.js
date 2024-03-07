const apiStates = require('../../api/apiStates.json')

const getStateByCountryId = ({ id }) => {
    const response = apiStates.find(state => state.id === id);
    return response
}

module.exports = getStateByCountryId;