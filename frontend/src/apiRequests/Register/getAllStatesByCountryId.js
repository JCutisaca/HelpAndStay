import axios from 'axios'

export const getAllStatesByCountryId = async (setStates, id) => {
    try {
        const { data } = await axios(`/country/${id}`);
        setStates(data.states)
    } catch (error) {
        throw Error({ error })
    }
}