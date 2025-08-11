let tarotDeck = [];

async function loadTarotData() {
  const response = await fetch('tarotdata.json');
  const data = await response.json();
  tarotDeck = data.cards;
  console.log('Tarot Data Loaded:', tarotDeck);  // <---- Add this line to confirm data
}

function drawRandomCards(deck, count) {
  const shuffled = [...deck].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

function displayDrawnCards(cards) {
  const readingArea = document.getElementById('reading');
  readingArea.innerHTML = '';

  cards.forEach(card => {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.innerHTML = `
      <h3>${card.title}</h3>
      <p>${card.description}</p>
      <blockquote>"${card.phrase}"</blockquote>
      <div class="keywords"><strong>Keywords:</strong> ${card.keywords.join(', ')}</div>
    `;
    readingArea.appendChild(cardDiv);
  });
}

function setupButtons() {
  document.getElementById('draw3').addEventListener('click', () => {
    const drawnCards = drawRandomCards(tarotDeck, 3);
    displayDrawnCards(drawnCards);
  });

  document.getElementById('draw6').addEventListener('click', () => {
    const drawnCards = drawRandomCards(tarotDeck, 6);
    displayDrawnCards(drawnCards);
  });

  document.getElementById('drawCustom').addEventListener('click', () => {
    const drawnCards = drawRandomCards(tarotDeck, 8);
    displayDrawnCards(drawnCards);
  });

  document.getElementById('drawMain').addEventListener('click', () => {
    const drawnCards = drawRandomCards(tarotDeck, 1);
    displayDrawnCards(drawnCards);
  });
}

window.addEventListener('DOMContentLoaded', async () => {
  await loadTarotData();
  setupButtons();
});
  