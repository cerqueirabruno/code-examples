/*

CLASSES | OBJETOS(INSTANCIAS) | ATRIBUTOS | MÉTODOS

#################### PILARES POO;
ABSTRAÇÃO;
ENCAPSULAMENTO: princípio de esconder os detalhes internos de um objeto e expor apenas o que é necessário; (public, private, protected, readonly);
HERANÇA: mecanismo pelo qual uma classe (subclasse) pode herdar propriedades e métodos de outra classe (superclasse), promovendo reutilização e organização do código;
POLIMORFISMO: 


#################### MODIFICADORES DE VISIBILIDADE;
PUBLIC;
PRIVATE;
PROTECTED;
READONLY;

#################### INTERFACE;

*/

/*

herança(superclasse e subclasse): extends
interface: implements


*/

class Pessoa {
  // atributos
  nome: string;
  altura: number;
  idade: number;

  // métodos
  // contrutor
  constructor(n: string, i: number, a: number) {
    console.log(`teste`);
    this.nome = n;
    this.altura = i;
    this.idade = a; 
  }

  // método
  sleep() {
    console.log(`${this.nome} está dormindo`);
  }
};

// ======================================== //

class Superclass{
  public isSuper = true;

  sayHello() {
    console.log('Olá Mundo!');
  }
}

class Subclass extends Superclass{
  
}

function myFunc(Superclass) {
  Superclass.sayHello;
}

const c1 = new Superclass;

myFunc(c1);
myFunc(c1);