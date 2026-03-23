// Fetch API example
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched data:', data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// XMLHttpRequest (XHR) example
function fetchDataWithXHR() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.example.com/data');
    xhr.onload = () => {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            console.log('Fetched data (XHR):', data);
        } else {
            console.error('Error fetching data (XHR):', xhr.statusText);
        }
    };
    xhr.onerror = () => {
        console.error('Network error occurred (XHR)!');
    };
    xhr.send();
}

// setTimeout() example
setTimeout(() => {
    console.log('Delayed message after 2 seconds');
}, 2000);

// setInterval() example
const intervalId = setInterval(() => {
    console.log('Repeated message every second');
}, 1000);

// Clear the interval after 5 seconds
setTimeout(() => {
    clearInterval(intervalId);
}, 5000);

// requestAnimationFrame() example
const animationLoop = () => {
    requestAnimationFrame(() => {
        // Update animation state here
        console.log('Animation frame');
        animationLoop(); // Schedule the next frame
    });
};

animationLoop(); // Start the animation loop

// Basic Promise example
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise resolved after 1 second');
    }, 1000);
});

myPromise.then(result => console.log(result));