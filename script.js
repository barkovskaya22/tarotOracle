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
  console.log(cards);

  cards.forEach(card => {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.innerHTML = `
      <h3>${card.title}</h3>
      <img src="${card.image}" alt="${card.title}" class="tarot-image">
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

        // Add floating particles
        function createParticle() {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.width = particle.style.height = Math.random() * 4 + 2 + 'px';
            particle.style.animationDuration = Math.random() * 3 + 3 + 's';
            particle.style.animationDelay = Math.random() * 2 + 's';
            document.body.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 6000);
        }

        // Create particles periodically
        setInterval(createParticle, 3000);

        // Button interactions
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // Card hover effects
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Receive card button effect
        document.querySelector('.receive-card-btn').addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
  