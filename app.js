async function loadGames() {
  const main = document.getElementById("main");
  main.innerHTML = "";

  const response = await fetch("retro_games.json");
  const data = await response.json();

  for (const consoleName in data) {
    const consoleDiv = document.createElement("div");
    consoleDiv.className = "console";

    const title = document.createElement("h2");
    title.textContent = consoleName;
    consoleDiv.appendChild(title);

    data[consoleName].forEach(game => {
      const gameDiv = document.createElement("div");
      gameDiv.className = "game";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = game.owned;
      checkbox.onchange = () => game.owned = checkbox.checked;

      const img = document.createElement("img");
      img.src = game.img;
      img.onerror = () => img.style.display = "none";

      const label = document.createElement("label");
      label.textContent = game.name;

      gameDiv.appendChild(checkbox);
      gameDiv.appendChild(img);
      gameDiv.appendChild(label);

      consoleDiv.appendChild(gameDiv);
    });

    main.appendChild(consoleDiv);
  }
}

loadGames();
