// Question 7: Coding Challenge - Error Handling
// Write a function called safeFetch that wraps a fetch call with proper error handling. It should:

// Take a URL as parameter
// Try to fetch the data
// Return the JSON if successful
// Return null and log the error if it fails

const safeFetch = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error.message);
    return null;
  }
};

const data = await safeFetch("https://api.example.com/data");
if (data) {
  console.log("Success:", data);
} else {
  console.log("Failed to fetch");
}
