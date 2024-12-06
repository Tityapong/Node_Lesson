function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let x =0 
        if (x=0){
            resolve("data");

        }else{
            reject("error")
        }
        // console.log('fetching data...');
        
      }, 2000);
    });
}

fetchData().then((data) => {
    console.log(" received data:", data);
  });