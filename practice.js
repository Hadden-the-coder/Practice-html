
var firebaseConfig = {
    apiKey: "AIzaSyBkJgDTd7gF3hwPxcTaW0bIHAg8jhLmsGs",
    authDomain: "kwitter-284c4.firebaseapp.com",
    databaseURL: "https://kwitter-284c4-default-rtdb.firebaseio.com",
    projectId: "kwitter-284c4",
    storageBucket: "kwitter-284c4.appspot.com",
    messagingSenderId: "512854831772",
    appId: "1:512854831772:web:44808d59ba3df06506f359"
  };
  
firebase.initializeApp(firebaseConfig);

function adduser(){
    user_name=document.getElementById("username").value;
    firebase.database().raf("/").child(user_name).update({
        purpose: "addinguser"
    });
}