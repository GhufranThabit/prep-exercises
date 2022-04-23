import { modules, students, mentors, classes } from "./hyf.js";

/**
 * Tjebbe would like help to get a list of possible mentors for a module.
 * Fill in this function that finds all the mentors that can teach the given module.
 *
 * It should return an array of names. So something like:
 *  ['John', 'Mary']
 */
const possibleMentorsForModule = mentors.map((mentor) => mentor.name);
console.log(possibleMentorsForModule);

// const possibleMentorsForModule = (moduleName) => {
//   // TODO complete this function
// };
// You can uncomment out this line to try your function
// console.log(possibleMentorsForModule('using-apis'));

/**
 * Tjebbe wants to make it even easier for himself.
 * Fill in this function that chooses a random mentor to teach the given module.
 *
 * It should return a single name.
 */
// const findMentorForModule = Math.floor(
//   Math.random() * possibleMentorsForModule.length
// );
// console.log(possibleMentorsForModule[findMentorForModule]);

// console.log(findMentorForModule("javascript"));
const findMentorForModule = (random) => {
  const random = Math.floor(Math.random() * possibleMentorsForModule.length);
  return possibleMentorsForModule[random];
};
// You can uncomment out this line to try your function
console.log(findMentorForModule("javascript"));
