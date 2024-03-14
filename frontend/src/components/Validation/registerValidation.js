const regexCharacters = /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ, ]+$/;
const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


export const validateFirstName = (form, setErrors, errors) => {
    const firstName = form.firstName.trim();
    if (!firstName.length) {
        setErrors({
            ...errors,
            firstName: "errors.firstNameEmpty"
        })
        return;
    }
    if (firstName.length < 2) {
        setErrors({
            ...errors,
            firstName: "errors.firstNameShort"
        })
        return;
    }
    if (firstName.length > 15) {
        setErrors({
            ...errors,
            firstName: "errors.firstNameLong"
        })
        return;
    }
    if (!regexCharacters.test(firstName)) {
        setErrors({
            ...errors,
            firstName: "errors.firstNameInvalid"
        })
        return;
    } else {
        setErrors({
            ...errors,
            firstName: ""
        })
    }
}

export const validateLastName = (form, setErrors, errors) => {
    const lastName = form.lastName.trim();
    if (!lastName.length) {
        setErrors({
            ...errors,
            lastName: "errors.lastNameEmpty"
        })
        return;
    }
    if (lastName.length < 2) {
        setErrors({
            ...errors,
            lastName: "errors.lastNameShort"
        })
        return;
    }
    if (lastName.length > 15) {
        setErrors({
            ...errors,
            lastName: "errors.lastNameLong"
        })
        return;
    }
    if (!regexCharacters.test(lastName)) {
        setErrors({
            ...errors,
            lastName: "errors.lastNameInvalid"
        })
        return;
    } else {
        setErrors({
            ...errors,
            lastName: ""
        })
    }
}

export const validateEmail = (form, setErrors, errors) => {
    const email = form.email.trim();
    if (!email.length) {
        setErrors({
            ...errors,
            email: "errors.emailEmpty"
        })
        return;
    }
    if (!regexEmail.test(email)) {
        setErrors({
            ...errors,
            email: "errors.emailInvalid"
        })
        return;
    } else {
        setErrors({
            ...errors,
            email: ""
        })
    }
}

export const validateConfirmEmail = (form, setErrors, errors) => {
    const confirmEmail = form.confirmEmail.trim();
    if (!confirmEmail.length) {
        setErrors({
            ...errors,
            confirmEmail: "errors.confirmEmailEmpty"
        })
        return;
    }
    if (!regexEmail.test(confirmEmail)) {
        setErrors({
            ...errors,
            confirmEmail: "errors.confirmEmailInvalid"
        })
        return;
    }
    if (form.email !== confirmEmail) {
        setErrors({
            ...errors,
            confirmEmail: "errors.confirmEmailDiscrepance"
        })
        return;
    } else {
        setErrors({
            ...errors,
            confirmEmail: ""
        })
    }
}

export const validatePassword = (form, setErrors, errors) => {
    const password = form.password.trim();
    if (!password.length) {
        setErrors({
            ...errors,
            password: "errors.passwordEmpty"
        })
        return;
    }
    if (password.length < 8) {
        setErrors({
            ...errors,
            password: "errors.passwordShort"
        })
        return;
    }
    if (password.length > 20) {
        setErrors({
            ...errors,
            password: "errors.passwordLong"
        })
        return;
    } else {
        setErrors({
            ...errors,
            password: ""
        })
    }
}

export const validateConfirmPassword = (form, setErrors, errors) => {
    const confirmPassword = form.confirmPassword.trim();
    if (!confirmPassword.length) {
        setErrors({
            ...errors,
            confirmPassword: "errors.confirmPasswordEmpty"
        })
        return;
    }
    if (confirmPassword.length < 8) {
        setErrors({
            ...errors,
            confirmPassword: "errors.confirmPasswordShort"
        })
        return;
    }
    if (confirmPassword.length > 20) {
        setErrors({
            ...errors,
            confirmPassword: "errors.confirmPasswordLong"
        })
        return;
    }
    if (confirmPassword.length < 8) {
        setErrors({
            ...errors,
            confirmPassword: "errors.confirmPasswordShort"
        })
        return;
    }
    if (form.password !== confirmPassword) {
        setErrors({
            ...errors,
            confirmPassword: "errors.confirmPasswordDiscrepance"
        })
        return;
    }
    else {
        setErrors({
            ...errors,
            confirmPassword: ""
        })
    }
}

export const validateBirthday = (formattedDate, setErrors, errors) => {
    const [day, month, year] = formattedDate?.split('/').map(Number);
    const birthdayDate = new Date(year, month - 1, day, 12, 0, 0, 0);
    const currentDate = new Date();

    let yearOld = currentDate.getFullYear() - birthdayDate.getFullYear();

    if (birthdayDate.getMonth() > currentDate.getMonth() || (birthdayDate.getMonth() === currentDate.getMonth() && birthdayDate.getDate() > currentDate.getDate())) {
        yearOld--;
    }
    if (!formattedDate?.length) {
        setErrors({
            ...errors,
            birthday: "errors.birthdayEmpty"
        })
        return;
    }
    if (yearOld < 18) {
        setErrors({
            ...errors,
            birthday: "errors.birthdayAge"
        })
        return;
    } else {
        setErrors({
            ...errors,
            birthday: ""
        })
    }
}

export const validatePhoneNumber = (form, setErrors, errors) => {
    const code = form?.codeNumber;
    const phoneNumber = form?.phoneNumber?.trim();
    console.log(!code.length);
    if (!code.length) {
        setErrors({
            ...errors,
            phoneNumber: "errors.codeNumberEmpty"
        })
        return
    }
    if (!phoneNumber.length) {
        setErrors({
            ...errors,
            phoneNumber: "errors.phoneNumberEmpty"
        })
        return
    }
    if (phoneNumber.length < 6) {
        setErrors({
            ...errors,
            phoneNumber: "errors.phoneNumberShort"
        })
        return
    } else {
        setErrors({
            ...errors,
            phoneNumber: ""
        })
    }
}

export const validateCodeNumber = (form, setErrors, errors) => {
    const code = form.codeNumber;
    if (!code) {
        setErrors({
            ...errors,
            codeNumber: "errors.codeNumberEmpty"
        })
        return
    } else {
        setErrors({
            ...errors,
            codeNumber: ""
        })
    }
    if (errors?.phoneNumber) {
        validatePhoneNumber(form, setErrors, errors)
    }
}

export const validateCountry = (form, setErrors, errors) => {
    const country = form?.country?.trim();
    if (!country?.length) {
        setErrors({
            ...errors,
            country: "errors.countryEmpty"
        })
        return
    } else {
        setErrors({
            ...errors,
            country: ""
        })
    }
}

export const validateCity = (form, setErrors, errors) => {
    const city = form?.city?.trim();
    if (!city?.length) {
        setErrors({
            ...errors,
            city: "errors.cityEmpty"
        })
        return
    } else {
        setErrors({
            ...errors,
            city: ""
        })
    }
}