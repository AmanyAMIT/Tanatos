let sideMenu = document.querySelector('.side-menu'),
    mobilebtn = document.querySelector('.click-menu'),
    overlayMenu = document.querySelector('.overlayMenu'),
    showmore = document.querySelector('.showhide'),
    input = document.querySelector(".input"),
    txt = document.querySelector(".txt"),
    showless = document.querySelector('.show-less');


function showMore() {
    var x = document.getElementsByClassName("serviceBox2")
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].classList.toggle("hide");
        showmore.classList.add("hide");
        showless.classList.remove("hide");
    }
}

showless.addEventListener('click', hideShowLess);

function hideShowLess() {
    showless.classList.add("hide");
    showmore.classList.remove("hide")
}

mobilebtn.addEventListener('click', showMenuOverlay);


function showMenuOverlay() {
    sideMenu.classList.add('showMenu');
    overlayMenu.classList.add('showOverlayBlock');
    setTimeout(function () {
        overlayMenu.classList.add('showOverlayOpacity');
    }, 100);
}

overlayMenu.addEventListener('click', removeMenuOverlay);

function removeMenuOverlay() {
    sideMenu.classList.remove('showMenu');
    overlayMenu.classList.remove('showOverlayBlock');
    setTimeout(function () {
        overlayMenu.classList.remove('showOverlayOpacity');
    }, 700);
}


txt.disabled = true;
input.addEventListener("change", stateHandle);

function stateHandle() {
    if (document.querySelector(".input").value === "") {
        txt.disabled = true;
    } else {
        txt.disabled = false;
    }
}