module.exports = function getZerosCount(number, base) {

  let result = 0, //  Количество нулей
    base_temp = base,
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

  return Math.floor(result);
  
}