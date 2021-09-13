formatTitleCaseTests('formatTitleCase');
function formatTitleCaseTests(testName, testsBad = 0) {
  let text = formatTitleCase('test');
  testsBad += test(testName, text, 'Test');

  text = formatTitleCase('TEST TEST1 TEST2');
  testsBad += test(testName, text, 'Test Test1 Test2');
  
  testConsoleLog(testName, testsBad);
}

dateToTimeStampTests('dateToTimeStampTests');
function dateToTimeStampTests(testName, testsBad = 0) {
  let text = dateToTimeStamp('01/01/1985');
  testsBad += test('dateToTimeStamp', text, 473403600);
  
  testConsoleLog(testName, testsBad);
}

numberWithDecimalTests('numberWithDecimalTests');
function numberWithDecimalTests(testName, testsBad = 0) {
  let text = numberWithDecimal(100);
  testsBad += test('numberWithDecimalTests', text, 100);
  
  text = numberWithDecimal('-600.85', 0);
  testsBad += test('numberWithDecimalTests', text, -600);

  text = numberWithDecimal(199.99, 2);
  testsBad += test('numberWithDecimalTests', text, 199.99);
  
  text = numberWithDecimal(-980, 2);
  testsBad += test('numberWithDecimalTests', text, -980.00);

  text = numberWithDecimal(-1635.785, 2);
  testsBad += test('numberWithDecimalTests', text, -1635.79);

  text = numberWithDecimal(105851.785842, 4);
  testsBad += test('numberWithDecimalTests', text, 105851.7858);

  text = numberWithDecimal("1308.11", 2);
  for (i = 0; i < 100; i++) {
    text = numberWithDecimal(text, 2);
  }
  testsBad += test('numberWithDecimalTests', text, 1308.11);

  testConsoleLog(testName, testsBad);
}