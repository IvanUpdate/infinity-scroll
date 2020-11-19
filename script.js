const count = 10;
const apiKey = `1TLyUVtODmqFGOb8ykFfBFmlETx9MwonlE1J0-PRYss`;
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

//Get photos from Unsplash API
async function getPhotos() {
    try {
        const responce = await fetch(apiUrl);
        const data = await responce.json();
        console.log(data);
    } catch(error) {

    }
}

// on load
getPhotos();