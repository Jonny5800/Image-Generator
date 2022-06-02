/*first 2 constants are for getting access to the search box (ID=input) and the container for the images*/
const input = document.getElementById("input");
const grid = document.getElementsByClassName("grid");




window.addEventListener("load", dayNightMode)
    //when the page LOADs, whatever function is after the comma (dayightMode) will automatically be executed

/*This function - Eventlistener so the user can use the enter key ("keydown")
input in HTML is changed - */
input.addEventListener("keydown", function(event) {
    /*checks if the user used the enter key
    - if they did then the function loadImg is run*/
    /*The loadImg(function) loads the images onto the screen*/


    if (event.key === "Enter") {
        //this IF statement checks if "enter" was pressed.
        //when presed "loadImg is executed"
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
        //Above - Client ID - after the equals sign, my unique client ID

    // ** ** ** ** ** ** ** ** * API KEY IS NEEDED ** ** ** ** ** ** ** * 19:48 what is looks like

    /*fetch() - makes a request to a url and downloads the contents
    straight away a PROMISE (in the form of an object) is returned to the server. 
    The returned ojbect is a built in RESPONSE class that can be checked for in the console*/
    // Check for response in console showing "ok:true" under 'headers'
    //**extra info** fetch() - can also come with parameters too
    fetch(url)
        // then is a "promise"

    .then(response => {
        //console.log(RESPONSE); On the console this shows if there is a response from the user using the ENTER KEY. 
        //'(ok:true)' is what should show 
        if (response.ok)
            return response.json();
        //response.json() - returns another promise (which is within the function body??)
        else
            alert(response.status)
            // The status will say why the response as unsuccessful
    })

    // BELOW - another promise ( .then(data=>....)). This returns the data. This will display the data on the screen.
    //FIrstly is will go into the imageNodes Array
    .then(data => {
        const imageNodes = [];
        //If i is less than the length of the array then it will keep looping
        for (let i = 0; i < data.results.length; i++) {
            //document.createElement("div") will create a new element. Each iteration creates a new div
            imageNodes[i] = document.createElement("div");
            //Each of the divs created is given the class name of - img
            imageNodes[i].className = "img";
            //Not sure about this but it brings in the first image into the first div
            imageNodes[i].style.backgroundImage = "url(" + data.results[i].urls.raw + ")";
            //This function opens a new window after a double click
            imageNodes[i].addEventListener("dblclick", function() {
                window.open(data.results[i].links.download, "_blank");
            })
            grid[0].appendChild(imageNodes[i]);
            /*^^^^Uncaught (in promise) TypeError: grid.appendChild is not a function
    at script.js:59:18*/
        }
    })

}
/*image ndes is an array which is being appended to grid*/



/*As the name suggests, this function will remove images from the screen 
because an empty string is set as the value for grid in the HTML via grid.innerHTML*/
//BUT why inner HTML instead of get element
function removeImages() {

    grid.innerHTML = "";
    //accesses the grid variable in HTML
}



/*DAY-NIGHT-MODE function checks to see if it is night or day time locally and then alters the color theme accordingly*/
function dayNightMode() {
    //Have to start by getting the date (UsING THE DaTE CLASS i.e "new Date()" )
    //Next get the hour by using the "getHours" built in JS function
    const date = new Date();
    //new Date() - gives the actual local date and time as a string

    const hour = date.getHours();
    //Whatever variable new Date() is set against - .getHours will give the hours only in 24hr format

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