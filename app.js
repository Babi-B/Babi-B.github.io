const theme = document.getElementById("theme");
const icons = document.getElementsByClassName("icon");

(function checkTheme(){
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        switchImages();
        theme.classList.add("fa-sun");
        theme.classList.remove("fa-moon");
        switchImages();
    }
    else{
        switchImages();
        theme.classList.add("fa-moon");
        theme.classList.remove("fa-sun")
    }
})();

// Monitor theme change
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    switchImages();
    if(event.matches.valueOf("dark")){
        theme.classList.add("fa-sun");
        theme.classList.remove("fa-moon");
    }else{
        switchImages();
        theme.classList.add("fa-moon");
        theme.classList.remove("fa-sun")
    }
});


theme.addEventListener("click", () => toggleDarkMode());

function toggleDarkMode() {
    if (document.documentElement.classList.contains("light")) {
        theme.classList.add("fa-sun");
        theme.classList.remove("fa-moon");

        document.documentElement.classList.remove("light")
        document.documentElement.classList.add("dark")
    } else{
        theme.classList.add("fa-moon");
        theme.classList.remove("fa-sun");

        document.documentElement.classList.remove("dark")
        document.documentElement.classList.add("light")
    }
}

function switchImages(){
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
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

switchImages();