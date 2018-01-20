function playVideo() {
    var myVideo = document.getElementById("myVideo");
    myVideo.play();
}


function changeColor() {
    var myColor = document.getElementById("myColor");
    var content = document.getElementById("content");
    var color = myColor.value;
    content.style.backgroundColor = color;
}
function showUserLocation() {
    navigator.geolocation.getCurrentPosition(showLocation); //function inside function
}

function showLocation(location) {
    var latitude = location.coords.latitude;
    var longitude = location.coords.longitude;
    alert(latitude + " , " + longitude);
}

//function saveData() {
//    var myEmail = document.getElementById("myEmail");
//    var email = myEmail.value;
//    localStorage.setItem("userEmail", email);
//}

//function loadData() {
//    var myEmail = document.getElementById("myEmail");
//    var email = localStorage.getItem("userEmail");
//    myEmail.value = email;
//    }