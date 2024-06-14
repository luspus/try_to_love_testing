function stringCalculator(numbers):number {
  if(numbers === '') {
    return 0;
  }
  return -1;
}

function stringCalculatorFor3(numbers): number {
  return parseInt(numbers);
}

function resultAsMessage(testCaseName, number, actual): string {
  const expected: string  =  number === '' ? 'empty' : number;
  return number === actual
    ? `${testCaseName}: PASS`
    : `${testCaseName}: FAIL (expected ${expected}, actual ${actual})`;
}

export function main1(number, expected):number {
  console.log("Running tests 1...");

  // Requirement 1
  let result: number = stringCalculator(number);
  resultAsMessage("Requirement 1", expected, result);
  return result;
}

export function main2 (number): number {
  console.log("Running tests 2...");
  // Requirement 2
  let result: number = stringCalculator(number);
  console.log(resultAsMessage(`Requirement 2 (${number})`, number, result));
  return result;
}


////////////////////////////////////////////////////////////////////////////////////////

export function main3 (number): number {
  console.log("Running tests 3...");
  // Requirement 3
  let result: number = stringCalculatorFor3(number);
  console.log(resultAsMessage(`Requirement 3 (${number})`, number, result));
  return result;
}


