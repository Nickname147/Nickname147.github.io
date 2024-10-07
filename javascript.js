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
