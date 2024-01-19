// Mode Button
const darkModeButton = document.querySelector("#dark");
const lightModeButton = document.querySelector("#light");
const root = document.querySelector(":root")

function onDarkClick() {
    darkModeButton.style.display = 'none';
    lightModeButton.style.display = 'inline';
    root.style.setProperty("--background-color", '#FFFFFF');
    root.style.setProperty("--text-color", '#333333');
    root.style.setProperty("--primary-color", '#4682B4');
    console.log("Dark Button Clicked");
}

function onLightClick() {
    lightModeButton.style.display = 'none';
    darkModeButton.style.display = 'inline';
    root.style.setProperty("--background-color", '#333333');
    root.style.setProperty("--text-color", '#FFFFFF');
    root.style.setProperty("--primary-color", '#40E0D0')
    console.log("Light Button Clicked");
}

darkModeButton.addEventListener('click', onDarkClick);
lightModeButton.addEventListener('click', onLightClick);
console.log('ModeButton EventListeners Added');

// Hamburger Button
const hamButton = document.querySelector(".hamburger-button");
const navList = document.querySelector("#nav-list");

function toggleNav() {
    if (navList.style.display === 'none') {
        navList.style.display = 'flex';
    }
    else {
        navList.style.display = 'none';
    }
}

hamButton.addEventListener('click', toggleNav);
console.log('HamburgerButton EventListener Added');