function checkStringLength(string,size ) {
  if (string > size) {
    return true;
  } else {
    return false;
  }
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomNumber(0,140);
checkStringLength();


