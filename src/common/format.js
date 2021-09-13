const formatTitleCase = (text) => {
  text = text.replace(/\S+/g, text => text.charAt(0).toUpperCase() + text.substr(1).toLowerCase());
  return text;
}

const dateToTimeStamp = (dateString) => {
  let tempDate = new Date(dateString);
  return tempDate.getTime() / 1000;
}

const numberWithDecimal = (number, decimalCount = 0) => {
  if (decimalCount == 0) {
    return parseInt(number);
  }
  number = parseFloat(number);

  //let multiplier = tensMultiplier(decimalCount)

  number = number.toFixed(decimalCount);
  number = parseFloat(number);
  return number;

  //let goodNumber = parseInt(number * multiplier);
  //goodNumber = goodNumber / multiplier;
 
  //return goodNumber;

}

const tensMultiplier = (tens = 1) => {
  let multiplier = 1;

  for (let i = 0; i < tens; i++) {
    multiplier = multiplier * 10;
  }

  return multiplier;
}

