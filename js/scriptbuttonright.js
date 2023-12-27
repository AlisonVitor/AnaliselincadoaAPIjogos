function hideAllContent() {
    var contents = document.querySelectorAll('.content');
    contents.forEach(function(content) {
      content.style.display = 'none';
    });
  }

  function hideGameDetails() {
    var gameDetails = document.querySelector('.game-details');
    gameDetails.style.display = 'none';
  }

  function showContent(contentId) {
    hideAllContent();
    hideGameDetails();
    
    var contentToShow = document.getElementById(contentId);
    contentToShow.style.display = 'block';
  }

  function showGameDetails() {
    hideAllContent();
    var gameDetails = document.querySelector('.game-details');
    gameDetails.style.display = 'block';
  }