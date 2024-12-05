//? follow these steps:
// todo1: Write a code that logs “wait 5 sec”
// todo2: and then after 5 seconds logs “ready?”
// todo3: and finally logs “🚀”  every one second
// todo4: (write a condition that cleans up the setInterval after 10 seconds to avoid crashing)

//!   Answer:

console.log("wait 5 sec");
setTimeout(() => {
  console.log("ready?");
}, 5000);
let i = 1;
const timer = setInterval(() => {
  if (i == 10) {
    clearInterval(timer);
  }
  i++;
  console.log("🚀");
}, 1000);
