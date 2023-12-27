

// Função para obter detalhes do jogo e suas screenshots
function getGameDetailsAndScreenshots(gameId) {
  return fetch(`https://api.rawg.io/api/games/${gameId}?key=aeea2e7061b34b6a8f48251822f2b2c0`)
    .then(response => response.json())
    .then(data => {
      // Preencher os elementos HTML com as informações do jogo
      const gameImage = document.getElementById('game-image');
      gameImage.src = data.background_image;

      // Lógica para colorir dinamicamente o Metacritic Score
      const gameMetacritic = document.getElementById('game-metacritic');
      const metacriticScore = data.metacritic;
      const gameName = document.getElementById('game-name');
      gameName.textContent = data.name; // Define o nome do jogo
      gameMetacritic.textContent = `Metacritic Score: ${metacriticScore}`;
      if (metacriticScore > 90) {
        gameMetacritic.style.backgroundColor = 'green';
      } else if (metacriticScore > 80) {
        gameMetacritic.style.backgroundColor = 'yellow';
      } else {
        gameMetacritic.style.backgroundColor = 'orange';
      }
      
      return fetch(`https://api.rawg.io/api/games/${gameId}/screenshots?key=aeea2e7061b34b6a8f48251822f2b2c0`);
    })
    .then(response => response.json())
    .then(screenshotData => {
      // Verifica se há screenshots disponíveis
      if (screenshotData.results && screenshotData.results.length > 0) {
        const gameScreenshots = document.getElementById('game-screenshots');
        const screenshotsCarousel = document.createElement('div');

        screenshotData.results.forEach(screenshot => {
          const screenshotImg = document.createElement('img');
          screenshotImg.src = screenshot.image;
          screenshotImg.alt = 'Screenshot';
          screenshotsCarousel.appendChild(screenshotImg);
        });

        gameScreenshots.appendChild(screenshotsCarousel);
     
        // Inicializa o carrossel usando a biblioteca Slick
        $(document).ready(function(){
          $(screenshotsCarousel).slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false, // Oculta os botões de navegação
          });
        });
      } else {
        const gameScreenshots = document.getElementById('game-screenshots');
        gameScreenshots.textContent = 'Screenshots não disponíveis';
      }
    })
    .catch(error => console.error('Erro ao buscar dados do jogo:', error));
}

// Chamar a função para obter detalhes do jogo e suas screenshots
const gameId = '906547';
getGameDetailsAndScreenshots(gameId);
