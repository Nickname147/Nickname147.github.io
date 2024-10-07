const cardContainer = document.getElementById('card-container');
const resultDiv = document.getElementById('result');

// Define cards (rank + suit)
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const suits = ['♠', '♥', '♦', '♣'];

let selectedCards = [];

// Generate card elements
function generateCards() {
    ranks.forEach(rank => {
        suits.forEach(suit => {
            const cardDiv = document.createElement('div');
            cardDiv.classList.add('card');
            cardDiv.textContent = `${rank}${suit}`;
            cardDiv.onclick = () => selectCard(cardDiv);
            cardContainer.appendChild(cardDiv);
        });
    });
}

// Select or deselect a card
function selectCard(cardDiv) {
    cardDiv.classList.toggle('selected');

    const cardValue = cardDiv.textContent;
    if (selectedCards.includes(cardValue)) {
        selectedCards = selectedCards.filter(card => card !== cardValue);
    } else {
        selectedCards.push(cardValue);
    }

    console.log(selectedCards); // Debugging
}

// Calculate odds (simplified example)
function calculateOdds() {
    if (selectedCards.length !== 2) {
        resultDiv.textContent = 'Please select exactly 2 cards.';
        return;
    }

    // Placeholder for odds calculation
    const odds = Math.random(); // Replace this with real odds calculation logic
    resultDiv.textContent = `You selected: ${selectedCards.join(', ')}. Estimated odds: ${(odds * 100).toFixed(2)}%`;
}

// Event listener for the calculate button
document.getElementById('calculate-btn').addEventListener('click', calculateOdds);

// Initialize cards
generateCards();
