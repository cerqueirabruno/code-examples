// string
let nome: string = 'bruno'; // '', "", ``

// number
let idade: number = 30; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744

// boolean
let adulto: boolean = true; // true, false

// symbol
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol

// bigint
let big: bigint = 10n; // bigint

// arrays
const arrayOfNumber: Array<number> = [1, 2, 3];
const arrayOfNumber2: number[] = [1, 2, 3];

const arrayOfString: Array<string> = ['1', '2', '3'];
const arrayOfString2: string[] = ['1', '2', '3'];

// object
let personal: { name: string, age: number, comment?: boolean } = {
  name: 'joão',
  age: 20,
  comment: true,
};

// functions
function sum(x: number, y: number): number {
  return x + y;
};

const sum2: (x: number, y: number) => number = (x, y) => x + y;