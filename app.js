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
        window.matchMedia('(prefers-color-scheme: dark)');
        theme.classList.toggle("fa-sun");
        theme.classList.remove("fa-moon");
    }
    else{
        theme.classList.toggle("fa-moon");
        theme.classList.remove("fa-sun")
    }
    
})