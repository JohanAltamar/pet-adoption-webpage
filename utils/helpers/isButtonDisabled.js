import isEmailValid from "./isEmailValid";

export const resetPasswordCase = (newPass, confirmedPass) => {
  const passwordsLength = newPass.length && confirmedPass.length ? true : false;
  const samePasswords = newPass === confirmedPass;

  const isButtonDisabled =
    passwordsLength && samePasswords
      ? false // button NOT disabled
      : true; // button disabled

  return isButtonDisabled;
};

export const loginCase = (email, password) => {
  return isEmailValid(email) && password.length > 0 ? false : true;
};
