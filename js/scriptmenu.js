// Seletor para o ícone do menu
const menuIcon = document.querySelector('.menu-icon');
// Seletor para a lista de itens do menu
const menuItems = document.querySelector('nav ul');

// Evento de clique no ícone do menu
menuIcon.addEventListener('click', () => {
  // Adiciona ou remove a classe 'active' para mostrar ou esconder o menu
  menuItems.classList.toggle('active');
});
