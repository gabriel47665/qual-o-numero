let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 10;
let palpites = [];

document.querySelector("input[type='number']").addEventListener("change", function() {
  let palpite = parseInt(this.value);

  if (isNaN(palpite)) {
    alert("Escolha um número válido");
    return;
  }

  if (palpite < 1 || palpite > 100) {
    alert("Escolha um número entre 1 e 100");
    return;
  }

  if (palpites.includes(palpite)) {
    alert("Esse palpite já foi dado");
    return;
  }

  tentativas--;
  palpites.push(palpite);
  document.querySelector(".palpite").textContent = palpites.join(" - ");

  if (palpite === numeroAleatorio) {
    document.querySelector(".resultado span").textContent = numeroAleatorio;
    document.querySelector(".resultado span").style.color = "#FFB431";
    document.querySelector(".resultado").removeAttribute("hidden");
    document.querySelector("input[type='number']").setAttribute("hidden", "");
    document.getElementById("imagemBia").src = "img/Bia-correto.png";
    document.querySelector(".resultado").style.margin = "58px 0 31px 0";
    alert("Parabéns, você acertou o número!");
    return;
  }

  if (tentativas === 0) {
    document.querySelector(".resultadoErrado span").textContent = numeroAleatorio;
    document.querySelector(".resultadoErrado span").style.color = "#FFB431";
    document.querySelector(".resultadoErrado").removeAttribute("hidden");
    document.querySelector("input[type='number']").setAttribute("hidden", "");
    document.querySelector("button").removeAttribute("hidden");
    document.getElementById("imagemBia").src = "img/Bia-errado.png";
    alert("Você não acertou o número :(");
    return;
  }

  if (palpite < numeroAleatorio) {
    alert("Seu palpite é menor");
  } else {
    alert("Seu palpite é maior");
  }
});

document.querySelector("button").addEventListener("click", function() {
  location.reload();
});
