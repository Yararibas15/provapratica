//Crie uma condicional para avaliar uma nota: maior ou igual a 8 "Muito bom", maior ou igual a 6 "Satisfatório" senão "Insuficiente"
let nota = parseFloat(prompt("Digite a nota:"));

if (nota >= 8) {
    console.log("muito bom");
} else if (nota >= 6) {
    console.log("muito satisfatório");
} else {
    console.log("insuficiente");
}