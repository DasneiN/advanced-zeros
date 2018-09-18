module.exports = function getZerosCount(number, base) {

  let result = 0, //  Количество нулей
    base_temp = base,
    // simpleDigits = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113],
    simpleDigits = [],  //  Простые числа <= base
    dividers = new Map(); //  Простые делители числа

  //  Находим простые числа от 2 до числа base
  for (let i = 2; i <= base; i++) {
    let isSimple = true;

    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        isSimple = false;
      }
    }

    if (isSimple) {
      simpleDigits.push(i);
    }
  }
  // console.log(simpleDigits);
  
    
  // Раскладываем систему счисления на простые множители
  while (base_temp > 1) {
    
    for (let i = 0; i < simpleDigits.length; i++) {
      if (base_temp % simpleDigits[i] == 0) {
        base_temp = base_temp / simpleDigits[i];

        if (dividers.has(simpleDigits[i]) ) {
          dividers.set(simpleDigits[i], (dividers.get(simpleDigits[i]) + 1) );
        } else {
          dividers.set(simpleDigits[i], 1);
        }

        break;

      }
    }
    
  }

  function getZerosCount(number, n) {
    let result = 0,
      m = n;

    while (true) {
      let x = Math.floor(number / m);

      if (x == 0) {
        return result;
      } else {
        result += x;
        m *= n;
      }

    }
  }

  dividers.forEach( (value, key, map) => {

    let z = getZerosCount(number, key);

    if ( (result != 0) && (z / value < result) ) {
      result = z / value;
    } else if (result == 0) {
      result = z / value;
    }
    
  });
  
  // console.log(number);
  // console.log(dividers);
  // console.log(result);
  

  return Math.floor(result);
  
}