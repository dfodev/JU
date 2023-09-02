const simButtons = document.querySelectorAll('.sim-button');
const naoButton = document.querySelector('.nao-button');
const h2 = document.querySelector('h2');
let clickCount = 0;
let naoButtonState = 'default'; // Estado inicial

simButtons.forEach(function (simButton) {
  simButton.addEventListener('click', function () {
    clickCount++;

    if (clickCount === 1) {
      h2.textContent = 'Me te tirar do sério?';
    } else if (clickCount === 2) {
      h2.textContent =
        'Aceita namorar comigo e me provocar a ter os melhores sorrisos com voce?';
    } else if (clickCount === 3) {
      h2.textContent = 'UUUUUHHHUUUUUUUUUUU🥰🥰😍😍 ';
      // Após a terceira vez que "Sim" é clicado, aguarde 2 segundos e, em seguida, abra o link
      setTimeout(function () {
        window.location.href = 'https://vm.tiktok.com/ZMjNasu53/'; // Substitua pelo link desejado
      }, 1000); // 1000 milissegundos = 1 segundos
    }

    // Reposicionar o botão "Não" ao lado dos botões "Sim"
    if (naoButtonState === 'default') {
      naoButton.style.left = 'auto'; // Limpar a posição "left"
    }
  });
});

naoButton.addEventListener('click', function () {
  // Quando o botão "Não" é clicado, defina o estado como "desviado"
  naoButtonState = 'desviado';
  desvia(naoButton);
});

function desvia(t) {
  var naoButton = t;
  naoButton.style.position = 'absolute';
  naoButton.style.bottom = geraPosicao(20, 70);
  naoButton.style.left = geraPosicao(20, 70);
  console.log('opa, desviei...');
}

function geraPosicao(min, max) {
  return Math.random() * (max - min) + min + '%';
}
