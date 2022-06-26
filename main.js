const getData = async () => {
    const response = await fetch(`https://api.artic.edu/api/v1/artworks/27992`)
    const data = response.json()
    return data
}
getData()
    .then(data => console.log('resolved', data['data']))

function popUp() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show"); }

// Should be able to pull the images from the API since documentations mention them
// In this case, 2d484387-2509-5e8e-2c43-22f9981972eb is the artwork of the title

// Plan to have data['data']['title'] in the popup

function popUpText() {
    var popText = document.getElementById("myPopup");
    popText
}