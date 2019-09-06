const checkBoolean = (value) => {
    // return String(value) && '';
    if (value === 'false' || value === false) {
        return false;
    } else if (value === 'true' || value === true) {
        return true;
    } else {
        return null;
    }
}

const checkCheckbox = (value) => {
    return (typeof value === 'undefined') ? null : value;
    // return (typeof value === 'undefined') ? "" : value
}

const checkString = (value) => {
    return (typeof value === 'undefined') ? null : value
    // return (typeof value === 'undefined') ? "" : value
}

export { checkBoolean, checkString, checkCheckbox }