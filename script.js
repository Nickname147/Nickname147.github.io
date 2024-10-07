const player1Container = document.getElementById('player1-container');
const player2Container = document.getElementById('player2-container');
const resultDiv = document.getElementById('result');

// Define cards (rank + suit)
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const suits = ['♠', '♥', '♦', '♣'];

let player1Cards = [];
let player2Cards = [];

// Generate card elements
function generateCards(container) {
    ranks.forEach(rank => {
        suits.forEach(suit => {
            const cardDiv = document.createElement('div');
            cardDiv.classList.add('card');
            cardDiv.textContent = `${rank}${suit}`;
            cardDiv.onclick = () => selectCard(container, cardDiv);
            container.appendChild(cardDiv);
        });
    });
}

// Select or deselect a card
function selectCard(container, cardDiv) {
    const selectedCards = container === player1Container ? player1Cards : player2Cards;

    cardDiv.classList.toggle('selected');

    const cardValue = cardDiv.textContent;
    if (selectedCards.includes(cardValue)) {
        selectedCards.splice(selectedCards.indexOf(cardValue), 1);
    } else if (selectedCards.length < 2) { // Limit to 2 cards per player
        selectedCards.push(cardValue);
    }

    console.log(selectedCards); // Debugging
}

// Calculate odds (simplified example)
function calculateOdds() {
    if (player1Cards.length !== 2 || player2Cards.length !== 2) {
        resultDiv.textContent = 'Please select exactly 2 cards for each player.';
        return;
    }

    // Placeholder for odds calculation
    const player1Odds = Math.random(); // Replace this with real odds calculation logic
    const player2Odds = Math.random(); // Replace this with real odds calculation logic

    resultDiv.textContent = `Player 1 selected: ${player1Cards.join(', ')}. Estimated odds: ${(player1Odds * 100).toFixed(2)}% vs. Player 2 selected: ${player2Cards.join(', ')}. Estimated odds: ${(player2Odds * 100).toFixed(2)}%`;
}

// Event listener for the calculate button
document.getElementById('calculate-btn').addEventListener('click', calculateOdds);

// Initialize cards for both players
generateCards(player1Container);
generateCards(player2Container);
