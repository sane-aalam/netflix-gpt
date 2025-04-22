function isValidPassword(password) {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>\-_+=;']).{8,20}$/;
  return passwordRegex.test(password);
}

const password1 = isValidPassword("P@$$wOrd123"); // Output: true
const password2 = isValidPassword("password"); // Output: false (no uppercase, digit, or special char)
const password3 = isValidPassword("Pass1"); // Output: false (too short)
const password4 = isValidPassword("PASSWORD123"); // Output: false (no lowercase)
const password5 = isValidPassword("Pa$$wOrd!"); // Output: true

console.log(password5);
