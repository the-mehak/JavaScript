function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
  }
  

  const word = "level";
  console.log(`Is "${word}" a palindrome? ${isPalindrome(word)}`);