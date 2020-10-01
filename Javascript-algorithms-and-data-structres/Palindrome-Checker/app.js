function palindrome(str) {
  let givenString = str.replace(/\W+|_/g, "").toLowerCase();
  let changedString = givenString.split("").reverse().join("");
  console.log(givenString, changedString);
  if (givenString != changedString) {
    return false;
  }
  return true;
}

palindrome("eye");
