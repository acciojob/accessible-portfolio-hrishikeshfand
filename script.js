//your code here
// Welcome message
window.addEventListener("load", function () {
    alert("Welcome to my accessible portfolio!");
});

// Create a back-to-top button dynamically
const topButton = document.createElement("button");
topButton.innerText = "↑ Back to Top";
topButton.id = "topBtn";
topButton.setAttribute("aria-label", "Back to top of the page");
document.body.appendChild(topButton);

// Button styling
topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.padding = "10px 15px";
topButton.style.backgroundColor = "#333";
topButton.style.color = "white";
topButton.style.border = "none";
topButton.style.borderRadius = "5px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";

// Show button when user scrolls down
window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});

// Scroll smoothly to top when button is clicked
topButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
