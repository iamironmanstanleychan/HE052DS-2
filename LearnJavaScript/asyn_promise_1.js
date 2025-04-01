function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      const data = { message: "Data fetched successfully!" };
      resolve(data); // Resolve with data when the operation is successful
      reject("Error: Failed to fetch data.");
      //  Reject with an error when the operation fails
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log("Success:", data.message);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
