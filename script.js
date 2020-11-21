//helper function to set attribute in DOM
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

let imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');
let photosArray = [];

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;


//Unsplash API
const count = 30;
const apiKey = `1TLyUVtODmqFGOb8ykFfBFmlETx9MwonlE1J0-PRYss`;
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;


// check if the image was loaded 
function imageLoaded() {
    console.log('image loaded');
    imagesLoaded++;
    if (imagesLoaded === totalImages) {
        ready = true;
        loader.hidden = true;
        console.log('ready =', ready);
    }
}

//Create elements for links and photos, add to DOM
function displayPhotos(arrayofItems) {
    imagesLoaded = 0;
    //Run function for each object in array
    totalImages = arrayofItems.length;
    console.log('totalImages =', totalImages);
    arrayofItems.forEach((photo) => {
        // Create a to link unsplash
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
        // check if the image was loaded 
        img.addEventListener('load', imageLoaded());
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

window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight -1000 && ready){
        ready = false;
        getPhotos();
    }
});
// on load
getPhotos();