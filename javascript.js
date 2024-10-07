document.getElementById('upload-btn').addEventListener('click', () => {
    const fileInput = document.getElementById('screenshot');
    if (fileInput.files.length === 0) {
        alert('Please select an image to upload.');
    } else {
        alert('Image uploaded: ' + fileInput.files[0].name);
        // Here you can add the functionality to send the image to the server
    }
});
