//exemplo uso de call

function exibeInfos() {
    console.log(this.nome, this.email)
   }
   
   const user = {
    nome: 'Mariana',
    email: 'm@m.com'
   }
   
   exibeInfos.call(user)

   function User(nome, email) {
    this.nome = nome
    this.email = email
   
    this.exibeInfos = function(){
      console.log(this.nome, this.email)
    }
   }
   
   const newUser = new User('mariana', 'm@m.com')

   const outroUser = {
    nome: 'Rodrigo',
    email: 'r@r.com'
   }
   
   newUser.exibeInfos() //mariana m@m.com
   newUser.exibeInfos.call(outroUser) //Rodrigo r@r.com