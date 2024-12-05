//? 7. Write a function to:
// todo1: find every item with more than 6 characters
// todo2: then check, if all of them have less than 10 characters return true, otherwise return false

const array = ["hello Jo", "fish", "birmingham", "periodic table", "phone"];
//!  Answer:
function characters(num) {
  let words = num.filter((c) => c.length > 6);
  return words.every((a) => a.length > 10);
}
console.log(characters(array));