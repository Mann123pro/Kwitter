var firebaseConfig = {
      apiKey: "AIzaSyAdMDCYp7b6vwyiTFOkNbyd6_6ulywuKR8",
      authDomain: "kwitter-208bf.firebaseapp.com",
      databaseURL: "https://kwitter-208bf-default-rtdb.firebaseio.com",
      projectId: "kwitter-208bf",
      storageBucket: "kwitter-208bf.appspot.com",
      messagingSenderId: "413586816193",
      appId: "1:413586816193:web:893783f95f52267226e840"
    };
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"add room_name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name- "+Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      window.location="index.html";
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
}