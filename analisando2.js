var idade = 67 // Variável chamada idade
console.log(`Você tem ${idade} anos.`) // Mostra no console a frase ( você tem (idade) anos)
if (idade < 16) { //Condição
    console.log("Não vota.") // Se a pessoa tiver menos de 16 anos, mostra: não vota
} else if (idade < 18 || idade > 65) { // Se não for menor que 16, o código verifica uma segunda condição
        console.log("Voto opcional.") // Se a condição acima for verdadeira, mostra; "Voto opcional."
    } else { // Se nenhuma das condições anteriores for verdadeira, entra aqui.
        console.log("Voto obrigatório.") // Mostra: "Voto obrigatório."
    }