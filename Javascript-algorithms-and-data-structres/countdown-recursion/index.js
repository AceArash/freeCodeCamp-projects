// console.log();
// Only change code below this line
function countdown(n){
    if ( n < 1) {
      return [];
    } else {
      const countArray = countdown(n-1);
      countArray.unshift(n);
      return countArray;
    }
    
  }
  
  countdown(10);
  // Only change code above this line


  function rangeOfNumbers(startNum, endNum) {
    if (endNum === startNum ) {
      return [startNum];
    } else {
      var numbers = rangeOfNumbers(startNum, endNum - 1);
      numbers.push(endNum);
      return numbers;
    }
  }
  
  console.log(rangeOfNumbers(6, 9));