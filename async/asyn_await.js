function getData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("data fetched");
      }, 2000);
    });
}

async function fetchData() {
    const data =  await getData();
    console.log(" received data:", data);
  }

fetchData();