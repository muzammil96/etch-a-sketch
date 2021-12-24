function makeGrid(n = 16) {
  if (!n) {
    n = 16;
  }
  let container = document.querySelector('.container');
  container.innerHTML = '';
  for (let i = 0; i < n; i++) {
    let row = document.createElement('div');
    row.className = 'row';
    for (let j = 0; j < n; j++) {
      let tile = document.createElement('div');
      tile.className = 'tile';
      tile.addEventListener('mouseover', () => {
        tile.classList.add('active');
      });
      row.appendChild(tile);
    }
    container.appendChild(row);
  }
}

function clearTiles() {
  let activeTiles = document.querySelectorAll('.active');
  activeTiles.forEach((tile) => tile.classList.remove('active'));
}

function makeGridForm(e) {
  e.preventDefault();
  let n = document.querySelector('#noOfTiles').value;
  makeGrid(n);
}
