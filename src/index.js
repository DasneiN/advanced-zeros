module.exports = function getZerosCount(number, base) {

  let result = 0,
    base_temp = base,
    simpleDigits = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113],
    dividers = new Map();

  // Раскладываем систему счисления на простые множители
  let base = 6,
      base_temp = base,
      simpleDigits = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113],
      dividers = new Map();

  while (base_temp > 1) {
    
    for (let i = 0; i < simpleDigits.length; i++) {
      if (base_temp % simpleDigits[i] == 0) {
        base_temp = base_temp / simpleDigits[i];

        if (dividers.has(simpleDigits[i]) ) {
          console.log('+');
          dividers.set(simpleDigits[i], (dividers.get(simpleDigits[i]) + 1) );
        } else {
          console.log('-');
          dividers.set(simpleDigits[i], 1);
        }

        break;

      }
    }
    
  }

  console.log(dividers);


  // for (let i = 0; i < simpleDigits.length &&  simpleDigits[i] <= base && base_temp != 1; i++) {
  //   if (base_temp % simpleDigits[i] == 0) {
  //     base_temp -= Math.floor(base_temp / simpleDigits[i]) * simpleDigits[i];

  //     if (dividers.has(simpleDigits[i]) ) {
  //       console.log('+');
  //       dividers.set(simpleDigits[i], (dividers.get(simpleDigits[i]) + 1) );
  //     } else {
  //       console.log('-');
  //       dividers.set(simpleDigits[i], 1);
  //     }

  //     i = 0;

  //   }
  // }
  
  
}