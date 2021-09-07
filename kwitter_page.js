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
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      })
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+" onclick='updateLike(this.id)>'";
span_with_a_tag="<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>";

row=name_with_tag+message_with_tag+like_button+span_with_a_tag;
document.getElementById("output").innerHTML=row;
//End code
      } });  }); }
getData();
function updateLike(message_id){
      console.log("Click on the like button"+message_id);
      button_id=message_id;
      like=document.getElementById(button_id).value;
      updatelike=Number(like)+1;
      console.log(updatelike);

      firebase.database().ref(room_name).child(message_id).update({
            like:updatelike
      });
}
function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location.replace("index.html");
}