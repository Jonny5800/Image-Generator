/*first 2 constants are for getting access to the search box (ID=input) and the container for the images*/
const input = document.getElementById("input");
const grid = document.getElementsByClassName("grid");

[0];


window.addEventListener("load", dayNightMode)
    //??when the page LOADs, whatever is after the comma (dayightMode) will automatically be executed?? 

/*This function - Eventlistener so the user can use the enter key ("keydown")
input in HTML is changed - */
input.addEventListener("keydown", function(event) {
    /*checks if the user used the enter key
    - if they did then the function loadImg is run*/
    /*The loadImg(function) loads the images onto the screen*/


    if (event.key === "Enter") {
        loadImg();
    }
})

function loadImg() {
    //When loadImg is called, removeImages function is run first before going on to load any further images
    removeImages();
    //This is the URL that is having a request made to it
    //To find out more about how this works go to unspalsh API documentation
    const url = "https://api.unsplash.com/search/photos/?query=" + input.value + "&per_page=9&client_id=nY7de0lIT7S-Go5boXlUf3H4qxi_DOPcsiBsU2XBddc" /*After "client_id="ENTER INDUVITDAL unspash API key here*/
        //Above - "input" comes from the user

    // ** ** ** ** ** ** ** ** * API KEY IS NEEDED ** ** ** ** ** ** ** * 19:48 what is looks like

    //fetch can be used to make a request to a URL 19:54
    fetch(url)
        // then is a "promise"

    .then(response => {
        //console.log(RESPONSE); On the console this shows if there is a response from the user using the ENTER KEY. 
        //'(ok:true)' is what should show 
        if (response.ok)
            return response.json();
        else
            alert(response.status)
            // The status will say why the respose as unsuccessful
    })

    .then

}




//As the name suggests, this function will remove images from the screen because GRID is set to an empty string
//BUT why inner HTML instead of get element
function removeImages() {
    grid.innerHTML = "";
}



/*DAY-NIGHT-MODE function checks to see if it is night or day time locally and then alters the color theme accordingly*/
function dayNightMode() {
    //Have to start by getting the date (UsING THE DaTE CLASS)
    //Next get the hour by using the "getHours" built in JS function
    const date = new Date();
    const hour = date.getHours()

    if (hour >= 7 && hour <= 19) {
        //This acceses the styling of the HTML similar to CSS
        document.body.style.backgroundColor = "whitesmoke";
        document.body.style.color = "black";
    } else {
        //This acceses the styling of the HTML similar to CSS
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
}