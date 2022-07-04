

function myFunction (a){

  let filtrar = a.filter(item => {
    return item > 0;
  });

  return filtrar;

}


const A = [1,2,3,null,4,null,5];
const B = [1,2,3,null,4,null,5,-1,6,7];
const C = [1,2,3,null,4,null,5,6,7,8,9];
const D = [1,2,3,null,4,null,5];

console.log(A);
console.log(B);
console.log(C);
console.log(D);

console.log(myFunction(A));
console.log(myFunction(B));
console.log(myFunction(C));
console.log(myFunction(D));