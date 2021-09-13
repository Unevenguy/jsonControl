let simpleJSON = JSON.parse(`
  {
    "status": "ok",
    "testList": [{
      "id": 2,
      "date": "01/01/1985"
    }, {
      "id": 1,
      "date": "01/01/2010"
    }, {
      "id": 9999,
      "date": "01/01/2099"
    }]
  }
`);

jsonAddTimestampsTests('jsonAddTimestamps');
function jsonAddTimestampsTests(testName, testsBad = 0) {
  jsonAddTimestamps(simpleJSON.testList, 'date', 'timeStamp');
  
  let text = simpleJSON.testList[0].timeStamp;
  testsBad += test(testName, text, 473403600);

  text = simpleJSON.testList[1].timeStamp;
  testsBad += test(testName, text, 1262322000);
  
  testConsoleLog(testName, testsBad);
}

jsonSortTests('jsonSort');
function jsonSortTests(testName, testsBad = 0) {
  jsonSort(simpleJSON.testList, 'id');
  
  testName = 'jsonSort';
  
  testsBad += test(testName, simpleJSON.testList[0].id, 1);
  testsBad += test(testName, simpleJSON.testList[1].id, 2);
  testsBad += test(testName, simpleJSON.testList.TEMPlastSortKey, 'id');
  testsBad += test(testName, simpleJSON.testList.TEMPlastSortOrder, 'forward');

  jsonSort(simpleJSON.testList, 'id');

  testsBad += test(testName, simpleJSON.testList[0].id, 9999);
  testsBad += test(testName, simpleJSON.testList.TEMPlastSortOrder, 'reverse');
  
  testConsoleLog(testName, testsBad);
}
  
let inputModelJSON = JSON.parse(`
{
  "model": [{
      "id": "22000",
      "class": "signingInformation",
      "name": "signingInformationSigningWithX",
      "placeholder": "Is the Resident signing with an X?",
      "enabled": "True",
      "required": "True",
      "inputType": "inputBooleanButton",
      "options": [{
          "name": "Yes",
          "value": true,
          "edit": [{
            "all": false,
            "admin": true,
            "visitor": false
          }],
          "edit": [{
            "all": false,
            "admin": true,
            "visitor": false
          }],
          "run": [{
            "onLoad": "",
            "onChange": ""
          }]
        },
        {
          "name": "No",
          "value": false
        }
      ],
      "optionsNamed": ["Yes", "No"],
      "optionsActual": ["True", "False"],
      "optionsRun": ["", ""],
      "value": "myJSON.resident.signingWithX",
      "valueOld": "",
      "validators": [],
      "tabbable": "True",
      "toLoad": "fillSignatures();",
      "ifEmpty": "warningColor",
      "onChange": "",
      "onError": "XXXX",
      "onExit": "XXXX"
    },
    {}
  ]
}
`);