// classes: define um tipo de objeto, especificando seus atributos e métodos. ela serve como um modelo para criar instâncias individuais desse tipo de objeto.

class Personal {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  speak() {
    console.log(`${this.name}: talking`);
  };

  eat() {
    console.log(`${this.name}: eating`);
  }

  beer() {
    console.log(`${this.name}: drinking`);
  }

}

const personal1 = new Personal('jõao', 'silva');
const personal2 = new Personal('maria', 'joaquina');

// GET and SET
