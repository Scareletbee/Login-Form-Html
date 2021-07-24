
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBL52r0tdQm1u9TUCkegs6Dyu-trP6kUrY",
    authDomain: "form-ff5c0.firebaseapp.com",
    projectId: "form-ff5c0",
    storageBucket: "form-ff5c0.appspot.com",
    messagingSenderId: "552168522379",
    appId: "1:552168522379:web:4f81d72a3567c4d0954a8e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function signUp(){
                
    var email = document.getElementById("email");
    var password = document.getElementById("password");
                
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
                
          alert("Signed Up");
        }
        
        
function signIn() {

  var email = document.getElementById("email");
    var password = document.getElementById("password");
                
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
                

    //Take User to a different or home page
 


}

function signOut(){

  auth.signOut();
  alert("Signed Out");


}


auth.onAuthStateChanged(function(user) {

  if(user){

    var email = user.email;
    alert("Active User " + email);

    //is signed in

  }else{

    alert("No Active User");
    //No user is signed in;

  }

});