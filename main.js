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

    // TODO make active page nav
    $(".my-nav-header .nav-link").on("click", function(){
        $(".my-nav-header").find(".active").removeClass("active");
        console.log($(this).innerHTML);
        $(this).addClass("active");
     });
});