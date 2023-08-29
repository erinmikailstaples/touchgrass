

async function fetchGrassImage() {
    const clientId = process.env.UNSPLASH_CLIENT_ID;
    const response = await fetch(`https://api.unsplash.com/photos/random?query=grass&client_id=${clientId}`);
    const data = await response.json();
    const imageUrl = data.urls.small;
    
    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;
    
    const container = document.getElementById('image-container');
    container.innerHTML = '';
    container.appendChild(imgElement);
}

fetchGrassImage();
