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
            console.log('Image loaded successfully');

            try {
                const { data: { text } } = await Tesseract.recognize(img, 'eng', {
                    logger: info => console.log(info) // Log progress
                });

                // Display the extracted text
                document.getElementById('result').innerText = `Extracted Text: ${text}`;
            } catch (error) {
                console.error('Error during OCR processing:', error);
            }
        };

        img.onerror = (error) => {
            console.error('Error loading image:', error);
        };
    };

    reader.onerror = (error) => {
        console.error('Error reading file:', error);
    };

    reader.readAsDataURL(file);
});

