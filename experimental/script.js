fetch('/experimental/data.json')
  .then(response => response.json())
  .then(data => {
    const gamesContainer = document.querySelector('.games');
    const searchInput = document.querySelector('.search-input');

    // Render the initial grid of images
    renderGrid(data);

    // Add an event listener to the search input that filters the grid as the user types
    searchInput.addEventListener('input', event => {
      const searchQuery = event.target.value.toLowerCase();
      const filteredData = data.filter(item => item.title.toLowerCase().includes(searchQuery));
      renderGrid(filteredData);
    });

    function renderGrid(items) {
      // Clear the current contents of the games container
      gamesContainer.innerHTML = '';

      // Render the grid of images
      items.forEach(item => {
        const game = document.createElement('div');
        game.classList.add('game');
        game.innerHTML = `<a href="${item.link}" target="_blank"><img src="${item.image}" alt="${item.title}"></a><h2><a href="${item.link}" target="_blank">${item.title}</a></h2>`;
        gamesContainer.appendChild(game);
      });
    }
  });
