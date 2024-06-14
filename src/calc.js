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
  console.log("Running tests 3 case 4...");
  // Requirement 2 step 4
  let result: number = stringCalculatorFor3(number);
  console.log(resultAsMessage(`Requirement 3 (${number})`, number, result));
  return result;
}

////////////////////////////////////////////////////////////////////////////////////////


function stringCalculatorForRequirement3(string): number {
  if(string.includes('.')) {
    const number = string.split('.');
    return +number[0] + +number[1];
  }
  
  return +string;
}

export function requirement3 (string, expected): number {
  console.log("Running tests 3...");
  // Requirement 3
  let result: number = stringCalculatorForRequirement3(string);
  console.log(resultAsMessage(`Requirement 3 (${expected})`, expected, result));
  return result;
}

/////////////////////////////////////////////////////////////////////////////////////////////////

function stringCalculatorForRequirement4(string): number {
  if(string.includes('.')) {
    const stringsInArray = string.split('.');
    if(stringsInArray.length >= 3) {
      let sum = 0;
      stringsInArray.forEach((number): void => {
        sum = +number + sum;
      })
      
      return sum;
    }
  }
  
  return +string;
}

export function requirement4 (string, expected): number {
  console.log("Running tests 4...");
  // Requirement 4
  let result: number = stringCalculatorForRequirement4(string);
  console.log(resultAsMessage(`Requirement 4 (${expected})`, expected, result));
  return result;
}


///////////////////////////////////////////////////////////////////////////////////////////////////

function stringCalculatorForRequirement5 (string): number {
  if(string.includes('.')) {
    const regex = /[^0-9\.,]/;
    const stringsOnlyWithReplacedSymbols = string.replace(regex, '.');
    const stringsInArray = stringsOnlyWithReplacedSymbols.split('.');
    let sum = 0;
    stringsInArray.forEach((number): void => {
      sum = +number + sum;
    })
    
    return sum;
  }
  
  return +string;
}

export function requirement5 (string, expected): number {
  console.log("Running tests 5...");
  // Requirement 5
  let result: number = stringCalculatorForRequirement5(string);
  console.log(resultAsMessage(`Requirement 5 (${expected})`, expected, result));
  return result;
}
