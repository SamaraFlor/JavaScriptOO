// class User {
//     constructor(nome, email, cpf) {
//      this.nome = nome
//      this.email = email
//      this.cpf = cpf
//    }
//    exibirInfos() {
//      return `${this.nome}, ${this.email}, ${this.cpf}`
//    }
//    }


/*Não recebemos mais um erro, pois agora o método é static e é executado a partir da 
própria classe, e não de uma instância dela
*/

class User {
    constructor(nome, email, cpf) {
     this.nome = nome
     this.email = email
     this.cpf = cpf
   }
   static exibirInfos() {
     return `${this.nome}, ${this.email}, ${this.cpf}`
   }
   }

//    const novoUser = new User('Carol', 'c@c.com', '12312312312')
// console.log(novoUser.exibirInfos()) //Carol, c@c.com, 12312312312


/*Criamos uma nova instância de User e agora temos acesso à propriedade 
nome desta instância, que estamos chamando de novoUser. Agora podemos atribuir a 
propriedade novouser.nome à uma variável (que chamamos de nomeUser) e passar o valor dessa variável 
como parâmetro para a chamada do método estático User.exibeNome().
*/
const novoUser = new User('Carol', 'c@c.com', '12312312312')
const nomeUser = novoUser.nome
console.log(User.exibeNome(nomeUser)) //Camila