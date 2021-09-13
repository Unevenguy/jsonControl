regexMoneyTests('regexMoney');
function regexMoneyTests(testName, testsBad = 0) {
  let text = regexMoney('$21,000');
  testsBad += test(testName, text, '21000');

  text = regexMoney('21');
  testsBad += test(testName, text, '21');
  
  text = regexMoney('21.22');
  testsBad += test(testName, text, '21.22');
  
  text = regexMoney('21.756');
  testsBad += test(testName, text, '21.75');
  
  text = regexMoney('21.7');
  testsBad += test(testName, text, '21.70');
  
  text = regexMoney('21.90');
  testsBad += test(testName, text, '21.90');
  
  text = regexMoney('a21.90');
  testsBad += test(testName, text, '21.90');
  
  text = regexMoney('0');
  testsBad += test(testName, text, '0');
  
  text = regexMoney('01');
  testsBad += test(testName, text, '1');
  
  text = regexMoney('.90c');
  testsBad += test(testName, text, '0.90');
  
  text = regexMoney('.01');
  testsBad += test(testName, text, '0.01');
  
  text = regexMoney('a2.1.90');
  testsBad += test(testName, text, '');
  
  text = regexMoney('aa');
  testsBad += test(testName, text, '');
  
  testConsoleLog(testName, testsBad);
}

regexDateTests('regexDate');
function regexDateTests(testName, testsBad = 0) {
  let text = regexDate('11/11/2020');
  testsBad += test(testName, text, '11/11/2020');
  
  text = regexDate('1/11/2020');
  testsBad += test(testName, text, '01/11/2020');
  
  text = regexDate('1/1/2020');
  testsBad += test(testName, text, '01/01/2020');
  
  text = regexDate('1/1/21');
  testsBad += test(testName, text, '01/01/2021');
  
  text = regexDate('1/1/0');
  testsBad += test(testName, text, '');
  
  text = regexDate('6/30/20200');
  testsBad += test(testName, text, '');
  
  text = regexDate('6/31/2020');
  testsBad += test(testName, text, '');
  
  text = regexDate('2/29/2020');
  testsBad += test(testName, text, '02/29/2020');
  
  text = regexDate('2/29/2021');
  testsBad += test(testName, text, '');
  
  text = regexDate('1/1/01');
  testsBad += test(testName, text, '01/01/2001');
  
  text = regexDate('12/31/99');
  testsBad += test(testName, text, '12/31/2099');
  
  text = regexDate('12/32/2099');
  testsBad += test(testName, text, '');
  
  text = regexDate('10-11-12');
  testsBad += test(testName, text, '10/11/2012');
  
  testConsoleLog(testName, testsBad);
}

regexPhoneTests('regexPhone');
function regexPhoneTests(testName, testsBad = 0) {
  let text = regexPhone('(105) 111 - 1952');
  testsBad += test(testName, text, '(105) 111-1952');
  
  text = regexPhone('11 (105) 111 - 1952');
  testsBad += test(testName, text, '11 (105) 111-1952');
  
  text = regexPhone('001 (105) 111 - 1952');
  testsBad += test(testName, text, '001 (105) 111-1952');
  
  text = regexPhone('0011051111952a');
  testsBad += test(testName, text, '001 (105) 111-1952');

  text = regexPhone('11234567890');
  testsBad += test(testName, text, '1 (123) 456-7890');
  
  testConsoleLog(testName, testsBad);
}

regexDigitsTests('regexDigits');
function regexDigitsTests(testName, testsBad = 0) {
  let text = regexDigits('11');
  testsBad += test(testName, text, '11');
  
  text = regexDigits('a10981');
  testsBad += test(testName, text, '10981');
  
  text = regexDigits('a1b2c');
  testsBad += test(testName, text, '12');
  
  text = regexDigits(' a1b.!@#$%^&*()(2c');
  testsBad += test(testName, text, '12');
  
  testConsoleLog(testName, testsBad);
}