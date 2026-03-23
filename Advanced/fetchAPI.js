async function fetchData() {
    try {
      // Specify the URL of the resource you want to fetch
      const url = 'https://api.example.com/api/';
  
      // Make the fetch request
      const response = await fetch(url);
  
      // Check for successful response (status code 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // Parse the response as JSON
      const data = await response.json();
  
      // Do something with the fetched data
      console.log('Fetched data:', data);
  
    } catch (error) {
      console.error('Error fetching data:', error);
    }
}
  
// Call the function to initiate the fetch
fetchData();  