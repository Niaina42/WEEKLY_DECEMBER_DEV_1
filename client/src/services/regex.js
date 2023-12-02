const isEmailValid = (email) => {
    if((email == null)||(email == undefined)) return false;
    const regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    return email !== undefined && regexEmail.test(email.trim());
};

export {
    isEmailValid
}