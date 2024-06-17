class StringCalculator {
  static add(numbers): string {
    if (numbers.length === 0) {
      return 0;
    }
  }
}

class StringCalculatorTest {
  constructor(args: any) {
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
     
    return result;
  }
}


export default StringCalculatorTest;

