module.exports = function getZerosCount(number, base) {

  let result = 0, //  Количество нулей
    base_temp = base,
    simpleDigits = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113],
    dividers = new Map(), //  Простые делители
    divider,  //  Наименьше встречающийся делитель
    divider_degree, //  Количество раз, сколько встречается делитель
    divider_zeros = 0;  //  Количество нулей в этом делителе

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

  console.log(number);
  console.log(dividers);

  console.log('test1');
  
  dividers.forEach( (value, key, map) => {

    console.log('1');
    
    let t = 0,
      base_temp = key;
    console.log('2');

    while (true) {
      
      let x = Math.floor(number / base_temp);

      if (x =! 0) {
        t += x;
        base_temp *= key;
      } else {
        break;
      }

    }
    console.log('3');

    if (t < divider_zeros || divider_zeros == 0) {
      divider_zeros = t;
      divider = key;
      divider_degree = value;
    }

    console.log('4');
    
  });
  
  console.log('test2');
  

  console.log(divider + '/' +divider_degree+'/' +divider_zeros);
  
  
  return ( divider_zeros / divider_degree );
  
}