function isPalindrome(word) {
  // Write your algorithm here
  let reverseWord = word.split('').reverse().join('');
  return word ===reverseWord;
  }


/* 
  Add your pseudocode here
  the reverseWord variable reverses the word that has been passed in
  and then the function returns true if the reversed word matches the word that was passsed in.
*/


/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
