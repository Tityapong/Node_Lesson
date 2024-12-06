function fetchData(callback) {
    setTimeout(() => {
        console.log('fetching data...');
      callback("data");
    }, 2000);
  }
  
  fetchData((data) => {
    console.log(" received data:", data);
  });   
console.log("hello");