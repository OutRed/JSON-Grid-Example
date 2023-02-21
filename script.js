fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const gamesContainer = document.querySelector('.games');

    data.forEach(item => {
      const game = document.createElement('div');
      game.classList.add('game');
      game.innerHTML = `<img src="${item.image}" alt="${item.title}"><h2>${item.title}</h2>`;
      gamesContainer.appendChild(game);
    });
  });
