const regexMoney = (amount) => {
  amount = amount.replace(/[^0-9.]/g, '');

  returnText = '';
  if (amount != '') {
    if (isNaN(amount) == true) { return returnText; }
    amount = amount * 100;
    amount = parseInt(amount);
    amount = amount / 100;
    amount = amount.toString();
    var re = /[0-9+][.][0-9]$/i;
    returnText = amount.replace(re, '$&' + '0');
  }
  return returnText;
}

const regexDate = (date) => {
  date = date.replace(/\-/g, '\/');
  date = date.replace(/(^\d\/)(.*)/, '0$1$2');
  date = date.replace(/(.*\/)(\d)(\/.*)/, '$10$2$3');
  date = date.replace(/(.*\/\d\d\/)(\d\d)$/, '$120$2');
  if (date.length == 10) {
    var timestamp = Date.parse(date);

    if (isNaN(timestamp) == false) { } //good date
    else { return ''; }

    var checkDate = new Date(Date.parse(date));
    options = {
        year: 'numeric', month: '2-digit', day: '2-digit',
    };

    if (checkDate.toLocaleDateString('en-US', options) != date) {
        return '';
    }
  }
  else { return ''; }
  return date;
}

const regexPhone = (phone) => {
  phone = phone.replace(/[^0-9]/g, '');
  let goodPhone = '';

  if (phone.length == 10) {
    goodPhone = phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  }
  if ((phone.length > 10) && (phone.length <= 13)) {
    goodPhone = phone.replace(/(\d{1,3})(\d{3})(\d{3})(\d{4})$/, '$1 ($2) $3-$4');
  }

  return goodPhone;
}

const regexDigits = (digits) => {
  digits = digits.replace(/[^0-9]/g, '');
  return digits;
}

