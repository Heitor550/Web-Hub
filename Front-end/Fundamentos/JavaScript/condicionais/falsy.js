// Valores falsy
console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean(0n)); // false
console.log(Boolean('')); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

// Valores truthy
console.log(Boolean(true)); // true
console.log(Boolean(42)); // true
console.log(Boolean(-10)); // true
console.log(Boolean('hello')); // true
console.log(Boolean({})); // true
console.log(Boolean([])); // true
console.log(Boolean(function () {})); // true

// Uso em condicional if/else
let valor = 0;
if (valor) {
	console.log('O valor é truthy');
} else {
	console.log('O valor é falsy');
}
// Saída: "O valor é falsy"

// Uso em operações lógicas
let nome = '';
let idade = 25;
console.log(nome || 'Usuário Anônimo'); // Saída: "Usuário Anônimo"
console.log(idade && 'Idade válida'); // Saída: "Idade válida"

// Conversão implícita
console.log(Boolean(0)); // false
console.log(Boolean('hello')); // true
