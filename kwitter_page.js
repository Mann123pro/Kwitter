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
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    function send(){
      msg=document.getElementById("message").value;
      firebase.database().ref(room_name).push({
            name:user_name,message:msg,like:0
            
      });
      document.getElementById("message").value="";
      
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
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='update_like(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;

//End code
      } });  }); }
getData();
function update_like(message_id){
      console.log("click on like button- "+message_id);
      button_id=message_id;
      likes = document.getElementById(button_id).value; 
      updated_likes = Number(likes) + 1; 
      console.log(updated_likes); 
      firebase.database().ref(room_name).child(message_id).update({ like : updated_likes });
}     
function logout(){
      window.location="index.html";
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
}
      

