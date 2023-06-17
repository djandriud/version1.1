// Matriz para almacenar los jugadores registrados
let players = [];

// Función para registrar un jugador
function registerPlayer() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const nickname = document.getElementById('nickname').value;

  // Validar que se ingresen los campos requeridos
  if (name && email && nickname) {
    const player = {
      name: name,
      email: email,
      nickname: nickname
    };

    players.push(player);

    // Limpiar los campos del formulario después del registro
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('nickname').value = '';

    // Ocultar el formulario de registro
    document.getElementById('register-form').style.display = 'none';

    // Iniciar el juego
    initGame();
  }
}

// Función para crear el tablero de batalla naval
function createBoard() {
  const board = document.getElementById('board');
  for (let i = 0; i < 100; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    board.appendChild(cell);
  }
}

// Resto de la lógica del juego...
// ...

