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

async function api(username) {
  try {
    let response = await fetch(`https://api.github.com/users/${username}`);
    let result = await response.json();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

api("the-mehak");
// ("https://dummyjson.com/products/sum?a=3&b=5");
