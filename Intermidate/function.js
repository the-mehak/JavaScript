// Simple
function createCounter() {
    let count = 0;
  
    return function() {
      return ++count;
    };
  }
  
  // Create two counter functions
  const counter1 = createCounter();
  const counter2 = createCounter();
  
  console.log(counter1()); 
  console.log(counter1());
  
  console.log(counter2()); 
  console.log(counter2()); 

  
