const email = 'a.kuralbayev@innopolis.university' 
const getIdBtn = document.getElementById('getId')
const myId = document.getElementById('myId')    
const myImg = document.getElementById('myImg')  
const imgTitle = document.getElementById('imgTitle')  
const imgAlt = document.getElementById('imgAlt')  
const imgDate = document.getElementById('imgDate')

function fetchId() {
    const params = new URLSearchParams();
    return fetch('https://fwd.innopolis.app/api/hw2?email=' + email + params.toString()).then(r => r.json());
}

function fetchImage(id) {
    const params = new URLSearchParams();
    return fetch('https://getxkcd.vercel.app/api/comic?num=' + id.toString() + params.toString()).then(r => r.json());
}

getIdBtn.addEventListener('click', async function (e) {
    const id = await fetchId()
    myId.textContent = id
    const image = await fetchImage(id)
    myImg.setAttribute('src', image.img)
    myImg.setAttribute('alt', image.alt)
    imgTitle.textContent = 'Title: ' + image.title
    imgAlt.textContent = 'Alt: ' + image.alt
    const date = new Date(Date.UTC(image.year, image.month, image.day)).toLocaleDateString();
    imgDate.textContent = 'Date: ' + date
});