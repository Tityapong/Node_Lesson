async function getData(){
    const result =  await  fetch('https://fakestoreapi.com/products')
    const json = await result.json();
    console.log(json);
}

getData();
