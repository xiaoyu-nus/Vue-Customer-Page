desensitization = (number, maskLength) => {
  var string = number + "";
  if (string.length !== 10) {
    return;
  }

  if (!maskLength) {
    maskLength = 4;
  }

  return (
    string.slice(0, 3) +
    string.slice(3, 3 + maskLength).replace(/./g, "*") +
    string.slice(2 + maskLength)
  );
};

console.log(desensitization(1366668888, 4));
