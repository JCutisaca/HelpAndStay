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
    }
    if (password.length < 8) {
        setErrors({
            ...errors,
            password: "errors.passwordShort"
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