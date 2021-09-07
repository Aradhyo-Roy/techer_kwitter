
 var firebaseConfig = {
      apiKey: "AIzaSyAkapWbhtXGTaX0BqNXkBwA_sXI83wq8m0",
      authDomain: "quitter-8ad10.firebaseapp.com",
      databaseURL: "https://quitter-8ad10-default-rtdb.firebaseio.com",
      projectId: "quitter-8ad10",
      storageBucket: "quitter-8ad10.appspot.com",
      messagingSenderId: "944768631579",
      appId: "1:944768631579:web:ff8195426d7f8f2dc809be"
    };
    firebase.initializeApp(firebaseConfig);

    document.getElementById("welcome").innerHTML="Welcome"+" "+localStorage.getItem("User name");
function getData() {
      firebase.database().ref("/").on('value', function(snapshot) 
      {document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) 
      {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name-"+Room_names);
      row="<div class='room_name' id="+Room_names+"onclick=redirectToRoomName(this.id)>"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function addroom(){
      room_name=document.getElementById("roomname").value;
      firebase.database().ref("/").child(room_name).update({
           Purpose:room_name 
      });
      localStorage.setItem("Room name", room_name);
      window.location="kwitter_page.html";
}
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room name", name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name")
      window.location="index.html";
}