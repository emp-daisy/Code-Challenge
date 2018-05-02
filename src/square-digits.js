const squareDigits = (value) => {
  if (typeof value === "number" && value % 1 === 0) {
    const digits = value.toString().split('');
    const squared = digits.map(digit => {
      if (digit === "-" || digit === "+") {
        return digit;
      } else {
        return digit * digit;
      }
    });
    if (typeof parseInt(squared.join(''), 10) !== 'number') {
      return 'Invalid value';
    }
    return parseInt(squared.join(''), 10);
  } else {
    return 'Invalid value';
  }
};

export default squareDigits;