// A = [1, 2, 3], B = [1, 2, 3, 4, 5], A é uma sublista de B

// A = [3, 4, 5], B = [1, 2, 3, 4, 5], A é uma sublista de B

// A = [3, 4], B = [1, 2, 3, 4, 5], A é uma sublista de B

// A = [1, 2, 3], B = [1, 2, 3], A é igual a B


const A = [1, 2, 3, 4, 5];
const B = [1, 3, 4];

function compararListas(a, b) {

  let resultado = a.filter(item => {
    return b.indexOf(item) > -1
  });

  return resultado.length;

}

//TO DO
//comparar listas
console.log("A lista A",A,"é uma sublista de B",B,": ", compararListas(A,B) === A.length);
console.log("--------------------------------------------------------------------");
console.log("A lista B",B,"é uma sublista de A",A,": ", compararListas(B,A) === B.length);
console.log("--------------------------------------------------------------------");
console.log("As listas A",A,"e B",B,"são iguais:", JSON.stringify(A) === JSON.stringify(B) );


