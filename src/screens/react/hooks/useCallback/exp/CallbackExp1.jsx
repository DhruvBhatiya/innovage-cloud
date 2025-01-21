import React from "react";

const CallbackExp1 = () => {
  function add(a, b, callback) {
    console.log(`Callback = The sum of ${a} and ${b} is ${a + b}.`);
    callback();
  }

  // disp() function is called just
  // after the ending of add() function
  function disp() {
    console.log("Callback = This must be printed after addition");
  }

  // Calling add() function
  add(5, 6, disp);

  return <div>Callback Example 1</div>;
};

export default CallbackExp1;
