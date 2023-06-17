// Función para generar un número aleatorio entre un rango
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Crear el tablero
  function createBoard() {
    const board = document.getElementById('board');
    for (let i = 0; i < 100; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      board.appendChild(cell);
    }
  }
  
  // Colocar los barcos en posiciones aleatorias
  function placeShips() {
    const cells = document.getElementsByClassName('cell');
    const ships = Array.from(cells).sort(() => Math.random() - 0.5).slice(0, 10);
    ships.forEach(ship => ship.classList.add('ship'));
  }
  
  // Manejar el clic en una celda
  function cellClick() {
    const cell = this;
    if (cell.classList.contains('ship')) {
      cell.classList.add('hit');
    } else {
      cell.classList.add('miss');
    }
  }
  
  // Inicializar el juego
  function initGame() {
    createBoard();
    placeShips();
  
    const cells = document.getElementsByClassName('cell');
    Array.from(cells).forEach(cell => {
      cell.addEventListener('click', cellClick);
    });
  }
  
  // Iniciar el juego cuando se carga la página
  window.addEventListener('load', initGame);
  