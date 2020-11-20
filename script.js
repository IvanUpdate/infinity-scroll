//helper function to set attribute in DOM
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

let imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');
let photosArray = [];

//Unsplash API
const count = 10;
const apiKey = `1TLyUVtODmqFGOb8ykFfBFmlETx9MwonlE1J0-PRYss`;
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

//Create elements for links and photos, add to DOM
function displayPhotos(arrayofItems) {
    //Run function for each object in array
    arrayofItems.forEach((photo) => {
        // Create a to link unsplash
        console.log(1);
        const item = document.createElement('a');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank',
        })
        // create img
        const img = document.createElement('img');
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        })       
        //put image inside a
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}




//Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const photosArray = await response.json();
        displayPhotos(photosArray);
    } catch(error) {
        console.log("something goes wrong", error); 
    }
}

// on load
getPhotos();