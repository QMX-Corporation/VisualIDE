/** MIT License.
   Copyright (C) QMX Corporation.
*/

/* Libs */
import { maskApply, unmaskApply, gerKey, MASK_KEY } from "security/masks.js";
import { write } from "print/print.js";

/* A Variable for User Credentials */
let loggedUser = {
  email: "",
  githubAccount: "",
  password: "",
  appPassword: "",
  githubToken: "",
  name: ""
};

/** 
   @param {object} userData
   The Function for login
  */ 
function loginUser(userData) {
  loggedUser.email = maskApply(userData.email);
  loggedUser.githubAccount = maskApply(userData.githubAccount);
  loggedUser.password = maskApply(userData.password);
  loggedUser.appPassword = maskApply(userData.appPassword);
  loggedUser.githubToken = maskApply(userData.githubToken);
  loggedUser.name = maskApply(userData.name);
  /* Unmask */
  let userName = unmaskApply(loggedUser.name);
  /* Login terminated */
  write("Login terminated, " + userName);
  /* Mask */
  userName = maskApply(loggedUser.name);
}