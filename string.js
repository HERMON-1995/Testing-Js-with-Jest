const stringLength = string => {
    if (string.length >= 1 && string.length <= 10) {
      return string.length;
    }
  
    return 'Invalid string!';
  };
  
  const reverseString = string => string.split('').reverse().join('');
  
  const math = {
    sum(a, b) {
      return a + b;
    },
    subtract(a, b) {
      return a - b;
    },
    multiply(a, b) {
      return a * b;
    },
    division(a, b) {
      return a / b;
    },
  };
  
  const capitaliseString = (string) => string.charAt(0).toUpperCase() + string.slice(1);


 module.exports = stringLength;
 module.exports = reverseString;
 module.exports = capitaliseString;
 module.exports = math;