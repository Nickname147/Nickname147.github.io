document.getElementById('upload-btn').addEventListener('click', async () => {
    const fileInput = document.getElementById('screenshot');
    if (fileInput.files.length === 0) {
        alert('Please select an image to upload.');
        return;
    }
    
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = async (event) => {
        const img = new Image();
        img.src = event.target.result;

        img.onload = async () => {
            // Use Tesseract.js to recognize text in the image
            const { data: { text } } = await Tesseract.recognize(img, 'eng', {
                logger: info => console.log(info) // Log progress
            });

            // Display the extracted text
            document.getElementById('result').innerText = `Extracted Text: ${text}`;
            // Here you can parse the text and calculate odds
            // Example: parseTextAndCalculateOdds(text);
        };
    };

    reader.readAsDataURL(file);
});



function parseTextAndCalculateOdds(text) {
    // Simple regex to extract player hands and community cards
    const playerRegex = /Player \d+: ([\w\s]+)/g;
    const communityRegex = /Community Cards: ([\w\s]+)/;

    let playerHands = [];
    let communityCards = null;

    let match;
    while ((match = playerRegex.exec(text)) !== null) {
        playerHands.push(match[1].trim());
    }

    const communityMatch = communityRegex.exec(text);
    if (communityMatch) {
        communityCards = communityMatch[1].trim();
    }

    console.log('Player Hands:', playerHands);
    console.log('Community Cards:', communityCards);
    // Call your odds calculation logic here
    // const odds = calculateOdds(playerHands, communityCards);
}
