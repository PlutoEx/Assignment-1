export default function () {

    console.log('HERE')

    const email = 'a.kuralbayev@innopolis.university'
    const myId = document.getElementById('myId')
    const getRandomBtn = document.getElementById('getId')
    const myRandomId = document.getElementById('myRandomId')
    const myImg = document.getElementById('myImg')
    const imgTitle = document.getElementById('imgTitle')
    const imgAlt = document.getElementById('imgAlt')
    const imgDate = document.getElementById('imgDate')

    function fetchId() {
        return fetch('https://fwd.innopolis.app/api/hw2?email=' + email).then(r => r.json());
    }

    function fetchImage(id) {
        return fetch('https://getxkcd.vercel.app/api/comic?num=' + id.toString()).then(r => r.json());
    }

// document.addEventListener('DOMContentLoaded', async function () {
    $(document).ready(async function () {
        const id = await fetchId()
        myId.textContent = id
        const image = await fetchImage(id)
        myImg.setAttribute('src', image.img)
        myImg.setAttribute('alt', image.alt)
        imgTitle.textContent = 'Title: ' + image.title
        imgAlt.textContent = 'Alt: ' + image.alt
        const date = new Date(image.year, parseInt(image.month) - 1, image.day).toLocaleDateString();
        imgDate.textContent = 'Date: ' + date
    })

    getRandomBtn.addEventListener('click', async function (e) {
        const id = Math.floor(Math.random() * 1000)
        myRandomId.textContent = id
        const image = await fetchImage(id)
        myImg.setAttribute('src', image.img)
        myImg.setAttribute('alt', image.alt)
        imgTitle.textContent = 'Title: ' + image.title
        imgAlt.textContent = 'Alt: ' + image.alt
        const date = new Date(image.year, parseInt(image.month) - 1, image.day).toLocaleDateString();
        imgDate.textContent = 'Date: ' + date
    });

}