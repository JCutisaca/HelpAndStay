import axios from 'axios'

export const postUser = async (form, birthday) => {
    const user = {
        firstName: form.firstName,
        lastName: form.lastName,
        city: form.city,
        password: form.password,
        codeNumber: form.codeNumber,
        phoneNumber: form.phoneNumber,
        confirmPassword: form.confirmPassword,
        email: form.email,
        confirmEmail: form.confirmEmail,
        country: form.country,
        birthday
    }
    try {
        const { data } = await axios.post("/user/create", { ...user });
        setStates(data.states)
    } catch (error) {
        throw Error({ error })
    }
}