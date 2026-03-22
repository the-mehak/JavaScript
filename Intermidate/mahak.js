async function print(word) {
    for (const char of word) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(char);
    }
  }
  
  const mahak = "<Mahak />";
  print(mahak);
  