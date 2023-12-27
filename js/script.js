const apiKey = 'aeea2e7061b34b6a8f48251822f2b2c0';
const gamesContainer = document.getElementById('games-carousel');

fetch(`https://api.rawg.io/api/games?key=${apiKey}&page_size=20&dates=2023-01-01,2023-12-31&ordering=-released`)
  .then(response => response.json())
  .then(data => {
    console.log(data);

    if (data.results && data.results.length > 0) {
      data.results.forEach(game => {
        const gameDiv = document.createElement('div');
        gameDiv.classList.add('game-container');
        gameDiv.style.backgroundImage = `url('${game.background_image}')`;

        const gameTitle = document.createElement('h4');
        gameTitle.textContent = game.name;
        gameTitle.style.backgroundColor = '#027fe9'; // Altere para a cor desejada
        gameTitle.style.width = '100%';

        const releaseDate = document.createElement('p');
        releaseDate.textContent = `Released: ${game.released}`;
        releaseDate.style.fontSize = '16px';
        releaseDate.style.color = 'white';
        releaseDate.style.backgroundColor = '#027fe9';
        gameDiv.appendChild(gameTitle);
        gameDiv.appendChild(releaseDate);
        gamesContainer.appendChild(gameDiv);
      });

      // Configuração do carrossel usando a biblioteca Slick
      $(document).ready(function(){
        $('#games-carousel').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 2000,
        });
      });
    } else {
      console.log('Nenhum jogo encontrado');
    }
  })
  .catch(error => console.error('Erro ao buscar dados dos jogos:', error));
