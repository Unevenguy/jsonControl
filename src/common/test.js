const test = (testName, test, expect) => {
  if (test === expect) { return 0; }
  else { 
    let text = `Test: ${testName} Failed. Returned: ${test} Expected: ${expect}`;
    console.log(text);
    return 1;
  }
}

const testConsoleLog = (testName, testBadCount, logGood = 'no') => {
  if (testBadCount > 0) {
    let text = `Test: ${testName} Failed ${testBadCount} test`;
    if (testBadCount > 1) { text +='s'; }
    console.log(text);
  }
  if ((testBadCount == 0) && (logGood == 'logGood')) {
    let text = `${testName} Passed`;
    console.log(text);
  }
}