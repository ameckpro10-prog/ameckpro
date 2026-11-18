
// AMECKPRO WEBSITE JAVASCRIPT

// Karibu kwa wageni
console.log("Welcome to AMECKPRO!");

// Ujumbe wa software
function showSoftwareMessage(name) {
    alert("Karibu kwenye " + name + " ya AMECKPRO!");
}

// Ujumbe wa tutorials
function showTutorialMessage(name) {
    alert("Karibu kwenye somo la " + name + "!");
}

// Mwaka wa sasa kwenye footer
document.addEventListener("DOMContentLoaded", function () {
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});
