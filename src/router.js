import randomjoke from '/public/js/random-comic.js'

const route = (event) => {
    event = event || window.event
    event.preventDefault()
    window.history.pushState({}, "", event.target.href)
    handleLocation()
}

const routes = {
    404: {
        'file': '/index.html',
        'title': '404'
    },
    '/': {
        'file': '/index.html',
        'title': 'Home'
    },
    '/about': {
        'file': '/src/view/about.html',
        'css': '/public/css/about.css',
        'title': 'About'
    },
    '/projects/prs': {
        'file': '/src/view/prs.html',
        'js': randomjoke,
        'css': '/public/css/prs.css',
        'title': 'Paper Rock Scissor'
    },
    '/random-comic': {
        'file': '/src/view/random-comic.html',
        'js': '/public/js/random-comic.js',
        'title': 'Random Comic'
    }
}

const handleLocation = async () => {
    const path = window.location.pathname
    const route = routes[path] || routes[404]
    const html = await fetch(route['file']).then((data) => data.text())
    document.getElementById("content").innerHTML = html
    if (typeof route['css'] != 'undefined')
        document.getElementById('my-css').href = route['css']
    if (typeof route['js'] != 'undefined') {
        // TODO Somehow stop previous js NAH I started doing this
        // await import(route['js'])
        // document.getElementById('my-js').src = route['js']
        route['js'].call()
    }
    document.title = route['title']
}

window.onpopstate = handleLocation
window.route = route

handleLocation()