function stringCalculator(numbers):number {
  if(numbers === '') {
    return 0;
  }
  return -1;
}

function resultAsMessage(testCaseName, number, actual): string {
  const expected: string  =  number === '' ? 'empty' : number;
  return number === actual
    ? `${testCaseName}: PASS`
    : `${testCaseName}: FAIL (expected ${expected}, actual ${actual})`;
}

function main1(number, expected):number {
  console.log("Running tests 1...");

  // Requirement 1
  let result: number = stringCalculator(number);
  resultAsMessage("Requirement 1", expected, result);
  return result;
}

function main2 (number): number {
  console.log("Running tests 2...");
  // Requirement 2
  let result: number = stringCalculator(number);
  console.log(resultAsMessage(`Requirement 2 (${number})`, number, result));
  return result;
}


module.exports = main1;
module.exports = main2;
