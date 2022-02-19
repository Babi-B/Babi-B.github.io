// document.body.style.overflow = 'hidden';

const theme = document.getElementById("theme");

(function checkTheme(){
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        theme.classList.add("fa-sun");
        theme.classList.remove("fa-moon");
    }
    else{
        theme.classList.add("fa-moon");
        theme.classList.remove("fa-sun")
    }
})();

// Monitor theme change
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if(event.matches.valueOf("dark")){
        theme.classList.add("fa-sun");
        theme.classList.remove("fa-moon");
    }else{
        theme.classList.add("fa-moon");
        theme.classList.remove("fa-sun")
    }
});


theme.addEventListener("click", () => {
    if(theme.classList.contains("fa-moon")){
        console.log(theme.classList)
        theme.classList.toggle("fa-sun");
        theme.classList.remove("fa-moon");
        // document.documentElement.style.setProperty("--mainColor", "#181818")
        // document.documentElement.style.setProperty("--secondaryColor", "#404040")
        // document.documentElement.style.setProperty("--mainText", "#fff")
        // document.documentElement.style.setProperty("--secondaryText", "rgb(233, 232, 232)")
    }
    else{
        console.log(theme.classList)
        theme.classList.toggle("fa-moon");
        theme.classList.remove("fa-sun")
    }
    
})