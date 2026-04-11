// async function api() {
//   let response = await fetch("https://dummyjson.com/products")
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//     });

// }
// api();

async function api() {
  try {
    let response = await fetch("https://codethread.cyclic.app/sum?a=3&b=5");
    let result = await response.json();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

api();
// ("https://dummyjson.com/products/sum?a=3&b=5");
