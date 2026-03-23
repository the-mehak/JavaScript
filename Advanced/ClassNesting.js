const OuterClass = class {
    constructor() {
        this.outerProperty = "Outer Property";
    };

    InnerClass = class {
        constructor() {
            this.innerProperty = "Inner Property";
        }

        innerMethod() {
            console.log("Inner Method");
        }
    };
};

// Example usage
const outerInstance = new OuterClass();
console.log(outerInstance.outerProperty);

const innerInstance = new outerInstance.InnerClass();
console.log(innerInstance.innerProperty);
innerInstance.innerMethod();
