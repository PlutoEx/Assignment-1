async function addHeaderFooter() {
    document.getElementById('header').innerHTML = await (await fetch('/src/view/header.html')).text()
    document.getElementById('footer').innerHTML = await (await fetch('/src/view/footer.html')).text()
}
function alerts() {
    // Enable Display Alerts
    const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
    const alert = (message, type) => {
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
            `<div class="alert alert-${type} alert-dismissible" role="alert">`,
            `   <div>${message}</div>`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
        ].join('')

        alertPlaceholder.append(wrapper)
        setTimeout(function () {
            wrapper.remove();
        }, 2000);
    }

    const alertTrigger = document.getElementById('liveAlertBtn')
    if (alertTrigger) {
        alertTrigger.addEventListener('click', () => {
            alert('Who tf use whatsapp)', 'success')
        })
    }
}

document.addEventListener('DOMContentLoaded', function(){
    addHeaderFooter()
    // activeTab()  // TODO EDIT ALL
    alerts()
    import('/src/router.js')
})