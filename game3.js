let selected = 0;

function selectCharacter(index) {
  selected = index;

  document.querySelectorAll('.card').forEach(c => {
    c.classList.remove('selected');
  });

  document.querySelectorAll('.card')[index].classList.add('selected');
}

function startGame() {
  // Send to Unity
  if (typeof unityInstance !== "undefined") {
    unityInstance.SendMessage("GameManager", "SetCharacter", selected);
  }
}