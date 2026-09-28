/** 
   MIT License.
   Copyright (C) QMX Corporation.
*/

/* Libs */
import { readInput } from "../../Keyboard/read.js";
import { loginUser } from "../../auth.js";

/* The Function of Click */
export function eventListener() {
  /* Read the User Credentials */
  let name = readInput("#name");
  let email = readInput("#email");
  let password = readInput("#password");
  let appPassword = readInput("#appPassword");
  let githubAccount = readInput("#githubAccount");
  let githubToken = readInput("#githubToken");
  /* All Data Readed in a Object */
  let userData = {
    email,
    githubAccount,
    password,
    appPassword,
    githubToken,
    name
  }
  /* Login! */
  loginUser(userData);
}

/* The MainFunction */
export function logginder() {
  /* Add a Click Event */
  let result = document.querySelector("#loginBtn")
          .addEventListener("click",
          eventListener);
}


/* Call the logginder() for
  login */
logginder();