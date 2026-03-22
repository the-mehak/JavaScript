//clouseres

function counter() {
  let count = 0;
  return {
    increment: function () {
      count++;
    },
    getcount: function () {
      return count;
    },
  };
}
let countfun = counter();
console.log(countfun.increment);
function createLocker(secretPin) {
  // Ye 'secretPin' variable closure ke andar "kaid" ho jayega
  let balance = 1000;

  return {
    checkBalance: function (inputPin) {
      if (inputPin === secretPin) {
        return `Aapka balance hai: ${balance}`;
      } else {
        return "Galat PIN!";
      }
    },
    deposit: function (amount) {
      balance += amount;
      return `Naya balance: ${balance}`;
    },
  };
}

const myLocker = createLocker(12374);
for (var i = 1; i <= 3; i++) {
  console.log(i); // setTimeout nahi hai yahan!
}

function multiplier(factor) {
  let val;
  return function (num) {
    return num * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // Output aana chahiye: 10

const triple = multiplier(3);
console.log(triple(5)); // Output aana chahiye: 15
function createOnce() {
  let hasRun = false; // Private variable (Closure)

  return function () {
    if (!hasRun) {
      console.log("Initializing... (Running for the first time)");
      hasRun = true;
    } else {
      console.log("Already initialized. I won't run again.");
    }
  };
}

const initialize = createOnce();
initialize(); // Output: Initializing...
initialize(); // Output: Already initialized...
