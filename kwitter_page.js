var firebaseConfig = {
  apiKey: "AIzaSyCRfozAkhXNeWIQGSKzf7Z5HDw5YThF_SU",
  authDomain: "project94-53c15.firebaseapp.com",
  databaseURL: "https://project94-53c15-default-rtdb.firebaseio.com",
  projectId: "project94-53c15",
  storageBucket: "project94-53c15.appspot.com",
  messagingSenderId: "987430953857",
  appId: "1:987430953857:web:aabcc4fe8cb3d65161be80"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
    });
    document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
function logout() {
localStorage.removeItem("Username");
localStorage.removeItem("Roomname");
window.location = "index.html";
}