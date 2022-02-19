const theme = document.getElementById("theme");
const icons = document.getElementsByClassName("icon");

(function checkTheme(){
    if ((window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) || (localStorage.getItem("mode") == "dark") ) 
        displayDarkMode();
    else
        displayLightMode();
})();

// Monitor theme change
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    switchImages();
    if(event.matches.valueOf("dark")){
        displayDarkMode();
    }else{
        displayLightMode();
    }
});


theme.addEventListener("click", () => {
    if(theme.classList.contains("fa-moon") && document.documentElement.classList.contains("light")){
        displayDarkMode();
    }
    else
        displayLightMode();
});

function displayDarkMode() {
    theme.classList.add("fa-sun");
    theme.classList.remove("fa-moon");
    
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");

    switchImages();

    localStorage.setItem("mode", "dark");
}

function displayLightMode(){
    theme.classList.add("fa-moon");
    theme.classList.remove("fa-sun")

    document.documentElement.classList.add("light");
    document.documentElement.classList.remove("dark");

    switchImages();

    localStorage.setItem("mode", "light");
}

function switchImages(){
    if (!(theme.classList.contains("fa-moon") && document.documentElement.classList.contains("light"))) {
        icons[1].src = "./img/cc-dark.png";
        icons[3].src = "./img/git-dark.png";
        icons[4].src = "./img/java-dark.png";
        icons[6].src = "./img/node-dark.png";
    }else{
        icons[1].src = "./img/css.jpg";
        icons[3].src = "./img/git2 (2).png";
        icons[4].src = "./img/java.jpeg";
        icons[6].src = "./img/node.png";
    }
}