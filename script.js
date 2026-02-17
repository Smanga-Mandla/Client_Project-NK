// Get the button
let topButton = document.getElementById("topBtn");

// When the user scrolls down 100px from the top, show the button
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
};

// When the user clicks the button, scroll to the top
topButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});