//Crie ima condicional para salário: maior ou igual a 3000 "alto", maior ou igual a 1500 "médio", senão "baixo"import java.util.Scanner;
let salario = 2000; // exemplo de salário
let categoria;

if (salario >= 3000) {
    categoria = "alto";
} else if (salario >= 1500) {
    categoria = "médio";
} else {
    categoria = "baixo";
}

console.log("Salário:", salario, "Categoria:", categoria);