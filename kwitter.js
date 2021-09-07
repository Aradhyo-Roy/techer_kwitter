function adduser(){
    Name=document.getElementById("User_name").value;
    localStorage.setItem("User name", Name);
    window.location="kwitter_room.html";
}