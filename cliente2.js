const cliente = {
    nome: "Robson",
    idade: 29,
    cpf: "05086678086",
    email: "robinho@polo.com.br",
  };

  const cliente2 = {
    nome: "Nãosei",
    idade: 50,
    cpf: "12345678998",
    email: "vaisaber@polo.com.br"
  }

  const cliente3 = {
    nome: "Robson",
    idade: 29,
    cpf: "05086678086",
    email: "robinho@polo.com.br",
  };

  const cliente4 = {
    nome: "Nãosei",
    idade: 50,
    cpf: "12345678998",
    email: "vaisaber@polo.com.br"
  }
 
  const chaves = ["nome", "idade", "cpf", "email"];
  chaves.forEach((chave) => {
    console.log(`O campo ${chave} tem valor ${cliente[chave]}`);
  });

  const tabela = ["nome", "idade", "cpf", "email"];
  tabela.forEach((tabela) => {
    console.log(`O campo ${tabela} tem valor ${cliente2[tabela]}`);
  });

  const chave_b = ["nome", "idade", "cpf", "email"];
  chave_b.forEach((chave_b) => {
    console.log(`O campo ${chave_b} tem valor ${cliente3[chave_b]}`);
  });

  const tabela_b = ["nome", "idade", "cpf", "email"];
  tabela_b.forEach((tabela_b) => {
    console.log(`O campo ${tabela_b} tem valor ${cliente4[tabela_b]}`);
  });