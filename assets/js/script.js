function toggleTheme() {
    let b = document.querySelector("body");
    if (b.classList.contains("dark-mode")) {
        b.classList.remove("dark-mode");
    } else if (!b.classList.contains("dark-mode")) {
        b.classList.add("dark-mode");
    }   
}

let buttonVariable = document.getElementById("lightbulb");
buttonVariable.onclick = toggleTheme;