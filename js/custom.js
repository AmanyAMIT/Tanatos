let sideMenu = document.querySelector('.side-menu'),
    mobilebtn = document.querySelector('.click-menu'),
    bodyElements = document.getElementsByTagName('body')[0],
    overlayMenu = document.querySelector('.overlayMenu');

    mobilebtn.addEventListener('click',showMenuOverlay);

    function showMenuOverlay(){
        sideMenu.classList.add('showMenu');
        overlayMenu.classList.add('showOverlayBlock');
        setTimeout(function(){
            overlayMenu.classList.add('showOverlayOpacity');
        }, 100)
    }

    overlayMenu.addEventListener('click',removeMenuOverlay);

    function removeMenuOverlay(){
        sideMenu.classList.remove('showMenu');
        overlayMenu.classList.remove('showOverlayBlock');
        setTimeout(function(){
            overlayMenu.classList.remove('showOverlayOpacity');
        }, 700)
    }