const checkStringLength =(string,size ) =>
  string.length > size;

const getRandomNumber = function(min, max) {
    if (min < 0  || max < 0 ) {
      throw new RangeError('Only non-negative range allowed([${min}, ${max}])') ;
  }
     return Math.floor(Math.random() * (max-min)) + min;
  }

getRandomNumber();
checkStringLength();
