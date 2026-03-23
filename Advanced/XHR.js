function fetchDataWithXHR() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.example.com/data');

    xhr.onload = function () {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            console.log('Fetched data:', data);
        } else {
            console.error('Error fetching data:', xhr.statusText);
        }
    };

    xhr.onerror = function () {
        console.error('Network error occurred!');
    };

    xhr.send();
}

fetchDataWithXHR();