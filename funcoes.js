// tipos de Funções

//A primeira versão, mais “clássica” e muito parecida com outras linguagens:“declaração de função”.

function soma1(num1, num2) {
    return num1 + num2;
   }


   console.log(soma1(21,28));

   //A segunda forma atribui a função a uma variável, 
   //funcionalidade que já não é tão comum em outras linguagens:expressão de função
   const soma2 = function(num1, num2) {
    return num1 + num2;
   }


   console.log(soma2(21,28));

   //A terceira e última forma é a arrow function ou “função de seta”, 
   //caracterizada pelo operador =>:

   const soma3 = (num1, num2) => {
    return num1 + num2;
   }

   console.log(soma2(21,28));

   //Ou, no caso de blocos de código com apenas uma linha, podemos omitir o return e as chaves {}:
   const soma4 = (num1, num2) => num1 + num2;

   console.log(soma4(21,29));

