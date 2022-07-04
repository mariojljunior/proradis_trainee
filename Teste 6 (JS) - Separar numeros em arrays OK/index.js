
function myFunction (a){


  const numStr = (typeof a === 'number') ? String(a) : '';
  const arr = numStr.split('');
  const intArr = arr.map((digit) => Number(digit));

  return intArr;

}

console.log(myFunction(10));
console.log(myFunction(931));
console.log(myFunction(193278));