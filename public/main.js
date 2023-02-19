$("#header").load('/header.html');
$("#footer").load('/footer.html', function () {
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
        setTimeout(function(){wrapper.remove();}, 2000);
    }

    const alertTrigger = document.getElementById('liveAlertBtn')
    if (alertTrigger) {
        alertTrigger.addEventListener('click', () => {
            alert('Who tf use whatsapp)', 'success')
        })
    }
    
    // Display Active Tab
    if (document.querySelector("my-name").getAttribute('class') == 'About')
        Array.from(document.querySelectorAll('.nav-link')).find(el => el.textContent === 'About').classList.add('active')
    else if (document.querySelector("my-name").getAttribute('class') == 'Home')
        Array.from(document.querySelectorAll('.nav-link')).find(el => el.textContent === 'Home').classList.add('active')
    else if (document.querySelector("my-name").getAttribute('class').includes('Projects'))
    {
        Array.from(document.querySelectorAll('.nav-link')).find(el => el.textContent === 'Projects').classList.add('active')
        Array.from(document.querySelectorAll('.nav-link')).find(el => el.textContent === document.querySelector("my-name").getAttribute('class').split(' ')[1]).classList.add('active')
    }
    else if (document.querySelector("my-name").getAttribute('class') == '2-week')
        Array.from(document.querySelectorAll('.nav-link')).find(el => el.textContent === '2 week Assignment').classList.add('active')
});