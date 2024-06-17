class StringCalculator {
  static add(numbers): string {
    if (numbers) {
      return parseInt(numbers);
    } else {
      return 0;
    }
  }
}

class StringCalculatorTest {
  constructor(args: string) {
    this.stringToCheck = args;
  }

  static resultAsMessage(testCaseName, expected, actual): string {
    return expected === actual
      ? `${testCaseName}: PASS`
      : `${testCaseName}: FAIL (expected ${expected}, actual ${actual})`;
  }
   main(): string {
     console.log("Running tests...");
     let result: string;
     // Requirement 1
     result = StringCalculator.add(this.stringToCheck);
     console.log(StringCalculatorTest.resultAsMessage("Requirement 1", 0, result));
     //Requirement 2
     console.log(StringCalculatorTest.resultAsMessage("Requirement 2", 1, result));
     console.log(StringCalculatorTest.resultAsMessage("Requirement 2", 321, result));
     
     return result;
  }
}


export default StringCalculatorTest;

