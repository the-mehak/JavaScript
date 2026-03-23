var array = new Array([45, 74, 11, 96, 48, 30]);

async function fetchData(arr) {
    return new Promise((resolve, reject) => {
        arr.length > 0 ? resolve(arr) : reject(new Error("Array is empty lol "));
    })
}

async function main() {
    var res = await fetchData(array);
    console.log(res);
}

main()

async function fetchData2() {
    return new Promise(resolve => {
        setTimeout(() => {
            const data = "Async data";
            resolve(data);
        }, 2000);
    });
}

async function main2() {
    console.log("Start of program");
    try {
        const result = await fetchData2();
        console.log("Fetched data:", result);
    } catch (error) {
        console.error("An error occurred:", error);
    }

    console.log("End of program");
}
main2();
