const regexCharacters = /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ, ]+$/;
const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/;


export const validateFirstName = (firstName) => {
    const trimmedFirstName = firstName?.trim();
    if (!trimmedFirstName.length) {
        return "errors.firstNameEmpty"
    }
    if (trimmedFirstName.length < 2) {
        return "errors.firstNameShort"
    }
    if (trimmedFirstName.length > 15) {
        return "errors.firstNameLong"
    }
    if (!regexCharacters.test(trimmedFirstName)) {
        return "errors.firstNameInvalid"
    } else {
        return ""
    }
}

export const validateLastName = (lastName) => {
    const trimmedLastName = lastName?.trim();
    if (!trimmedLastName.length) {
        return "errors.lastNameEmpty"
    }
    if (trimmedLastName.length < 2) {
        return "errors.lastNameShort"
    }
    if (trimmedLastName.length > 15) {
        return "errors.lastNameLong"
    }
    if (!regexCharacters.test(trimmedLastName)) {
        return "errors.lastNameInvalid"
    } else {
        return ""
    }
}

export const validateEmail = (email) => {
    const trimmedEmail = email?.trim();
    if (!trimmedEmail?.length) {
        return "errors.emailEmpty"
    }
    if (!regexEmail.test(trimmedEmail)) {
        return "errors.emailInvalid"
    } else {
        return ""
    }
}

export const validateConfirmEmail = (confirmEmail, email) => {
    const trimmedConfirmEmail = confirmEmail?.trim();
    if (!trimmedConfirmEmail.length) {
        return "errors.confirmEmailEmpty"
    }
    if (!regexEmail.test(trimmedConfirmEmail)) {
        return "errors.confirmEmailInvalid"
    }
    if (email !== trimmedConfirmEmail) {
        return "errors.confirmEmailDiscrepance"
    } else {
        return ""
    }
}

export const validatePassword = (password) => {
    const trimmedPassword = password?.trim();
    if (!trimmedPassword.length) {
        return "errors.passwordEmpty"
    }
    if (trimmedPassword.length < 8) {
        return "errors.passwordShort"
    }
    if(!regexPassword.test(trimmedPassword)) {
        return "errors.passwordInvalid"
    }
    if (trimmedPassword.length > 20) {
        return "errors.passwordLong"
    } else {
        return ""
    }
}

export const validateConfirmPassword = (confirmPassword, password) => {
    const trimmedConfirmPassword = confirmPassword?.trim();
    if (!trimmedConfirmPassword.length) {
        return "errors.confirmPasswordEmpty"
    }
    if (trimmedConfirmPassword.length < 8) {
        return "errors.confirmPasswordShort"
    }
    if (trimmedConfirmPassword.length > 20) {
        return "errors.confirmPasswordLong"
    }
    if (trimmedConfirmPassword.length < 8) {
        return "errors.confirmPasswordShort"
    }
    if (password !== trimmedConfirmPassword) {
        return "errors.confirmPasswordDiscrepance"
    }
    else {
        return ""
    }
}

export const validateBirthday = (birthday) => {
    if (!birthday?.length) {
        return "errors.birthdayEmpty"
    }
    const [day, month, year] = birthday?.split('/').map(Number);
    const birthdayDate = new Date(year, month - 1, day, 12, 0, 0, 0);
    const currentDate = new Date();

    let yearOld = currentDate.getFullYear() - birthdayDate.getFullYear();

    if (birthdayDate.getMonth() > currentDate.getMonth() || (birthdayDate.getMonth() === currentDate.getMonth() && birthdayDate.getDate() > currentDate.getDate())) {
        yearOld--;
    }
    if (yearOld < 18) {
        return "errors.birthdayAge"
    } else {
        return ""
    }
}

export const validatePhoneNumber = (codeNumber, phoneNumber) => {
    const trimmedPhoneNumber = phoneNumber?.trim();
    if (!codeNumber?.length) {
        return "errors.codeNumberEmpty"
    }
    if (!trimmedPhoneNumber?.length) {
        return "errors.phoneNumberEmpty"
    }
    if (trimmedPhoneNumber?.length < 6) {
        return "errors.phoneNumberShort"
    } else {
        return ""
    }
}

export const validateCountry = (country) => {
    const trimmedCountry = country?.trim();
    if (!trimmedCountry?.length) {
        return "errors.countryEmpty"
    } else {
        return ""
    }
}

export const validateCity = (city) => {
    const trimmedCity = city;
    if (!trimmedCity?.length) {
        return "errors.cityEmpty"
    } else {
        return ""
    }
}

export const validateAll = (form, birthday) => {
    const firstName = validateFirstName(form.firstName)
    const lastName = validateLastName(form.lastName)
    const email = validateEmail(form.email)
    const confirmEmail = validateConfirmEmail(form.confirmEmail, form.email)
    const password = validatePassword(form.password)
    const confirmPassword = validateConfirmPassword(form.confirmPassword, form.password)
    const phoneNumber = validatePhoneNumber(form.codeNumber, form.phoneNumber)
    const country = validateCountry(form.country)
    const city = validateCity(form.city)
    const dateBirthday = validateBirthday(birthday)
    const error = {
        firstName,
        lastName,
        email,
        confirmEmail,
        password,
        confirmPassword,
        phoneNumber,
        country,
        city,
        birthday: dateBirthday
    }
    return error
}