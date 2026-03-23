function outerFunction(outerValue) {
    // This inner function has access to outerValue due to closure
    function innerFunction(innerValue) {
        console.log("Outer value: " + outerValue);
        console.log("Inner value: " + innerValue);
    }

    // Returning the inner function, creating a closure
    return innerFunction;
}

// Creating closures by calling outerFunction with different values
const closure1 = outerFunction("Closure 1");
const closure2 = outerFunction("Closure 2");

// Invoking the closures with inner values
closure1("Inner 1");
closure2("Inner 2");
