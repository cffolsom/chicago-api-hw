const art1_id = document.querySelector('.art1').alt

const getData = async () => {
    const response = await fetch(`https://api.artic.edu/api/v1/artworks/27992`)
    const data = response.json()
    return data
}
getData()
    .then(data => console.log('resolved', data['data']))

function artDesc(artworkInfo) {
    const popup = document.getElementById("myPopup");
    popup.textContent = artworkInfo
    popup.classList.toggle("show")
}

function popUp(art_id) {
    getData(`${art_id}`)
    .then(data => {(
        popupText = data['data']['provenance_text']
    )
    artDesc(popupText)
    })
}
// By manually searching the above console logs, we are able to discern the image string
// In this case, 2d484387-2509-5e8e-2c43-22f9981972eb is the artwork of the title

// Plan to have data['data']['title'] in the popup.


