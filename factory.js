function criaUser(nome, email) {
    return {
      nome,
      email,
      exibeInfos() {
        return `${nome}, ${email}`
      }
    }
   }

const newUser = criaUser('Rodrigo', 'r@r.com')
console.log(newUser)
console.log(newUser.exibeInfos())


// funções construtora

function User(nome, email) {
    this.nome = nome
    this.email = email
   
    this.exibeInfos = function() {
      return `${nome}, ${email}`
    }
   }

   const newUser1 = new User('Mariana', 'm@m.com')
console.log(newUser1)
console.log(newUser1.exibeInfos())