// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

// Funcion para redireccionar al login
function goToLogin() {
    window.location = ""; // Colocar URL a direccionar
}

// Funcion para redireccionar al dashboard
function goToDashboard(){
    window.location = ""; // Colocar URL a direccionar
}  

// Función para registar nuevos usuarios
function register() {
    // var email = document.getElementById('email').nodeValue;
    // var pass = document.getElementById('pass').nodeValue;

    firebase.auth().createUserWithEmailAndPassword(email, pass)
        .then((user) => {
            // Signed in
            var $contentAlert = "<div id='divAlerta' class='alert alert-success alert-dismissible fade show' role='alert'><strong> Usuario registrado correctamente </strong> En un momento será redireccionado al login en 5 segundos <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button></div>";
            var $divNotification = document.getElementById('divNotification');
            $divNotification.innerHTML = $contentAlert;
            //Regresar el login
            setTimeout(goToLogin(), 5000);
        })
        .catch((error) => {
            // Capturar el mensaje de error 
            var errorCode = error.code;
            var errorMessage = error.message;
            // Mostar alerta
            var $contentAlert = "<div id='divAlerta' class='alert alert-danger alert-dismissible fade show' role='alert'><strong>" + errorCode + "</strong>" + errorMessage + "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button></div>";
            var $divNotification = document.getElementById('divNotification');
            $divNotification.innerHTML = $contentAlert;
        });
}

// Función para login
function start() {
    // console.log('Función login');
    var email = document.getElementById('email').nodeValue;
    var pass = document.getElementById('pass').nodeValue;

    firebase.auth().signInWithEmailAndPassword(email, pass)
        .then((user) => {
            // Signed in
            var $contentAlert = "<div id='divAlerta' class='alert alert-danger alert-dismissible fade show' role='alert'><strong>Ok</strong>En un momento será redireccionado<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button></div>";
            var $divNotification = document.getElementById('divNotification');
            $divNotification.innerHTML = $contentAlert;
            setTimeout(goToDashboard(), 2000);        
        })
        .catch((error) => {
            // Capturar el mensaje de error 
            var errorCode = error.code;
            var errorMessage = error.message;
            // Mostar alerta
            var $contentAlert = "<div id='divAlerta' class='alert alert-danger alert-dismissible fade show' role='alert'><strong>" + errorCode + "</strong>" + errorMessage + "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button></div>";
            var $divNotification = document.getElementById('divNotification');
            $divNotification.innerHTML = $contentAlert;
        });
}

// Función del observador
function observer() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log('Existe un usuario activo'); // DELETE BEFORE
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;

            // Redireccionar al dashboard
            setTimeout(goToDashboard(), 2000);
        } else {
            console.log('No existe un usuario activo'); // DELETE BEFORE
            // Redireccionar al login
            setTimeout(goToLogin(), 2000);
        }
    });
}
observer();

// toastr["success"]("Mensaje", "Titulo");
