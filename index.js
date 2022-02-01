function reverse(word) {
  let reverse = "";

  for(let i = word.length - 1; i >= 0; i-- ) {
    reverse+= word[i]
  } 
  return reverse;
}

function isPalindrome(word) {
    // Write your algorithm here
    const reversedWord = reverse(word)

    return (reversedWord === word)
}

/* 
  Add your pseudocode here
  Reverse a string and if it's exactly the same as the original string it is a Palindrome

  Check whether a string is a Palindrome by using the reversed version and 
  if the reversed is equal to the original 
    return true 
  otherwise
    return false  
  
*/

/*
Add written explanation of your solution here
First function created to reverse the word. Utilizing for loop to decrement/grab each letter from end to begining. Placing it in the empty holder  we created. "reverse" 
The reversed word is passed into our isPalindrome function to be tested for similarity to the original word
The reversedWord variable recieves the reversed word and we return whether it's true or false when compared. 


*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome(""));
}

module.exports = isPalindrome;
