import axios from 'axios'

export const getAllCountries = async (setCountries, setCodes) => {
    try {
        const { data } = await axios("/country/all");
        const codes = data?.map(country => country.code);
        const sortByCode = (a, b) => {
            const codeA = parseInt(a.replace(/\D/g, ''), 10);
            const codeB = parseInt(b.replace(/\D/g, ''), 10);
            return codeA - codeB;
        };
        const uniqueCodes = [...new Set(codes)].sort(sortByCode);
        
        setCountries(data)
        setCodes(uniqueCodes);
    } catch (error) {
        throw Error({ error })
    }
}