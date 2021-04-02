function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
  
  }
  
  checkEqual(1, 2);
console.log(checkEqual(2, 2));

function checkSign(num) {
    return ( num === 0) ? "zero"
    : (num > 0) ? "positive"
    : "negative";
    
  }
  
  checkSign(10);