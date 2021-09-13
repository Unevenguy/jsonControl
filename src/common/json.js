const jsonAddTimestamps = (json, dateKey, newTimestampKey) => {
    if (json[0][dateKey] == undefined) { return; }

    for (var i in json) {
        json[i][newTimestampKey] = dateToTimeStamp(json[i][dateKey]);
    }
}

const jsonSort = (sortJSON, key) => {

    if ((sortJSON == undefined) || (sortJSON == null)) { return; }

    if (sortJSON.TEMPlastSortOrder == undefined) { sortJSON.TEMPlastSortOrder = "forward"; }
    if (sortJSON.TEMPlastSortKey == undefined) { sortJSON.TEMPlastSortKey = ""; }

    if ((sortJSON.TEMPlastSortKey == key) && (sortJSON.TEMPlastSortOrder == "forward")) {
        sortReverse(sortJSON, key);
        sortJSON.TEMPlastSortOrder = "reverse";
    }
    else {
        sortForward(sortJSON, key);
        sortJSON.TEMPlastSortOrder = "forward";
    }

    sortJSON.TEMPlastSortKey = key;

    function sortForward(sortJSON, key) {
        sortJSON = sortJSON.sort(function (a, b) {
            var x = a[key]; var y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    }

    function sortReverse(sortJSON, key) {
        sortJSON = sortJSON.sort(function (b, a) {
            var x = a[key]; var y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    }
}

const jsonIndexFromNameValue  = (json, name, value) => {
  
    for (var i in json) {
      if (json[i][name] == value) {
        return i;
      }
    }
  
}

const jsonSearchNameEqualsValueToArray  = (json, name, value) => {
    let array = [];
  
    for (var i in json) {
      if (json[i][name] == value) {
        array.push(json[i].id);
        //console.log(json[i].id);
      }
    }
  
    return array;
}

