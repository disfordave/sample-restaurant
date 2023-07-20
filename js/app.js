var vw  = document.documentElement.clientWidth;

console.log(vw)

function checkWindowSize() {
    vw  = document.documentElement.clientWidth;
    if(vw <= 650 ) {
        document.getElementById("mobile-menu-button").style.display = "inline";
        document.getElementById("mobile-menu-close-button").style.display = "none";
    } else {
        DisableMobileButton();
    }
}

function DisableMobileButton() {
    document.getElementById("mobile-menu-button").style.display = "none";
    document.getElementById("mobile-menu-close-button").style.display = "none";
}

function MobileMenu() {
    document.getElementById("mobile-menu").style.display = "block";
    document.getElementById("mobile-menu-button").style.display = "none";
    document.getElementById("mobile-menu-close-button").style.display = "inline";
    document.getElementById("logo").style.color = "black";
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0); // Scroll to the top of the page
}

function MobileMenuClose() {
    document.getElementById("mobile-menu").style.display = "none";
    document.getElementById("mobile-menu-button").style.display = "inline";
    document.getElementById("mobile-menu-close-button").style.display = "none";
    document.getElementById("logo").style.color = "aliceblue";
    document.body.style.overflow = "auto";
}

// Call checkWindowSize function whenever the window is resized
window.addEventListener('resize', checkWindowSize);

// Check window size initially when the script loads
checkWindowSize();
