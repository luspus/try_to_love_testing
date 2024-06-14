function stringCalculator(numbers):number {
  if(numbers === '') {
    return 0;
  }
  return -1;
}

function resultAsMessage(testCaseName, expected, actual): string {
  console.log(expected, actual)
  return expected === actual
    ? `${testCaseName}: PASS`
    : `${testCaseName}: FAIL (expected ${expected}, actual ${actual})`;
}

function main(number, expected):number {
  console.log("Running tests...");
  
  // Requirement 1
  let result: number = stringCalculator(number);
  resultAsMessage("Requirement 1", expected, result);
  return result;
}



module.exports = main;
