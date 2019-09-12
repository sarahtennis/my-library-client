export const authStates = {
  SIGN_IN: "signin",
  REGISTER: "register",
  FORGOT_PASSWORD: "forgotpassword"
};

export const authStatesSet = new Set([
  authStates.SIGN_IN,
  authStates.REGISTER,
  authStates.FORGOT_PASSWORD
]);
