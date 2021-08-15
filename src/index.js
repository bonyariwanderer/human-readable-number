module.exports = function toReadable (number) {
    let arr = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    let arrDozens = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    let words = 0;
    
    if(number < 20) {    
      words = arr[number];
      return words;
  } else if((number >= 20) & (number < 100) & (number % 10 == 0)) {
    words = arrDozens[number / 10];
    return words;
  } else if ((number >= 20) & (number < 100) & (number % 10 != 0)) {
    words = arrDozens[Math.floor(number / 10)] + ' ' + arr[number % 10];
    return words;
  } else if (number % 100 == 0) {
    words = arr[number / 100] + ' hundred';
    return words;
  } else if (((number % 100) < 20) & (number % 100 != 0)) {
    words = arr[Math.floor(number / 100)] + ' hundred ' + arr[number % 100];
    return words;
  }else if (((number % 100) >= 20) & (number % 100 != 0) & ((number % 10) != 0)) {
    words = arr[Math.floor(number / 100)] + ' hundred ' + arrDozens[Math.floor((number % 100) / 10)] + ' ' + arr[number % 10];
    return words;
  } else if ((((number % 100) >= 20) & (number % 100 != 0) & ((number % 10) == 0))){
    words = arr[Math.floor(number / 100)] + ' hundred ' + arrDozens[Math.floor((number % 100) / 10)];
    return words;
  }
}
