let vw  = document.documentElement.clientWidth;


console.log(vw)

function checkWindowSize() {
    vw  = document.documentElement.clientWidth;
    if(vw <= 650) {
        // media width: mobile
        document.getElementsByClassName("nav-a")[0].style.display = "none"
        document.getElementsByClassName("nav-a")[1].style.display = "none"
        document.getElementsByClassName("nav-a")[2].style.display = "none"
        // document.getElementById("mobile-menu-button").style.display = "inline";
        // document.getElementById("mobile-menu-close-button").style.display = "none";
        if(document.getElementById("mobile-menu").style.display === "block") {
            // When the mobile menu is enabled
            document.getElementById("mobile-menu-button").style.display = "none";
            document.getElementById("mobile-menu-close-button").style.display = "inline";
        } else {
            // When the mobile menu is disabled
            document.getElementById("mobile-menu-button").style.display = "inline";
            document.getElementById("mobile-menu-close-button").style.display = "none";
        }
    } else {
        // media width: desktop
        if(document.getElementById("mobile-menu").style.display === "block") {
            // When the mobile menu is enabled
            document.getElementById("mobile-menu-button").style.display = "none";
            document.getElementById("mobile-menu-close-button").style.display = "inline";
            document.getElementsByClassName("nav-a")[0].style.display = "none"
            document.getElementsByClassName("nav-a")[1].style.display = "none"
            document.getElementsByClassName("nav-a")[2].style.display = "none"
        } else {
            // When the mobile menu is disabled
            DisableMobileButton();
            document.getElementsByClassName("nav-a")[0].style.display = "inline"
            document.getElementsByClassName("nav-a")[1].style.display = "inline"
            document.getElementsByClassName("nav-a")[2].style.display = "inline"
        }
        
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
    // window.scrollTo(0, 0); // Scroll to the top of the page
}

function MobileMenuClose() {
    document.getElementById("mobile-menu").style.display = "none";
    document.getElementById("mobile-menu-button").style.display = "inline";
    document.getElementById("mobile-menu-close-button").style.display = "none";
    if (document.documentElement.scrollTop > 50) {
        document.getElementById("logo").style.color = "black";
    } else {
        document.getElementById("logo").style.color = "aliceblue";
    }
    document.body.style.overflow = "auto";
    checkWindowSize();
}

// Call checkWindowSize function whenever the window is resized
window.addEventListener('resize', checkWindowSize);

// Check window size initially when the script loads
checkWindowSize();

/*window.scrollY > 50*/
window.onscroll = function() {onWindowScroll()};

function onWindowScroll() {
    if (document.documentElement.scrollTop > 50) {
        document.getElementById("header").style.backgroundColor = "aliceblue";
        document.getElementById("logo").style.color = "black";
        document.getElementsByClassName("nav-a")[0].style.color = "black"
        document.getElementsByClassName("nav-a")[1].style.color = "black"
        document.getElementsByClassName("nav-a")[2].style.color = "black"
        document.getElementsByClassName("nav-a")[3].style.color = "black"
        
    } else {
        document.getElementById("header").style.backgroundColor = "transparent";
        document.getElementById("logo").style.color = "aliceblue";
        document.getElementsByClassName("nav-a")[0].style.color = "aliceblue"
        document.getElementsByClassName("nav-a")[1].style.color = "aliceblue"
        document.getElementsByClassName("nav-a")[2].style.color = "aliceblue"
        document.getElementsByClassName("nav-a")[3].style.color = "aliceblue"
        
    }
}

// window.addEventListener('scroll', onWindowScroll);




