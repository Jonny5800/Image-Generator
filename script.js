/*first 2 constants are for getting access to the search box (ID=input) and the container for the images*/
const input = document.getElementById("input");
const grid = document.getElementsByClassName("grid")

[0];

/*This function
input in HTML is changed - */
input.addEventListener("keydown", function(event) {
    if (event.key === "enter") {
        loadImg();
    }
})