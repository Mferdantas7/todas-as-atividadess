function saudacaoDoDia() {
    const hora = new Date().getHours();
    const saudacaoElement = document.getElementById("greeting");
    const imagemElement = document.getElementById("greeting-image");
  
    let saudacao = "";
    let imagemSrc = "";
  
    if (hora >= 6 && hora < 12) {
      saudacao = "Bom dia!";
      imagemSrc = "bom-dia.png";
    } else if (hora >= 12 && hora < 18) {
      saudacao = "Boa tarde!";
      imagemSrc = "boa-tarde.png";
    } else {
      saudacao = "Boa noite!";
      imagemSrc = "boa-noite.png";
    }
  
    saudacaoElement.textContent = saudacao;
    imagemElement.src = imagemSrc;
  }
  
  window.onload = saudacaoDoDia;
  