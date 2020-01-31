// Inicializar la base de datos
var config = {
    apiKey: "AIzaSyCJBQBZr8lsxCOSe18-SOUw5VUI3n4x2-A",
    authDomain: "confisalud-3e382.firebaseapp.com",
    databaseURL: "https://confisalud-3e382.firebaseio.com",
    projectId: "confisalud-3e382",
    storageBucket: "confisalud-3e382.appspot.com",
    messagingSenderId: "629122550546",
    appId: "1:629122550546:web:0dad7ee8026377517c01cb",
    measurementId: "G-PDTVJKVZ5H"
};

firebase.initializeApp(config);

function exito() {
    $("#spinner").html("");
    location.assign('index.html');
}

$(function() {
    $("#botonLogin").click(function() {
        $("#spinner").html("<img src='img/spinner.gif' style='width:25px; height:25px;'/>");
        var email = $("#email").val();
        var password = $("#password").val();

        firebase.auth().signInWithEmailAndPassword(email, password).then(exito).catch(function(error) {
            $("#spinner").html("");
            //console.log(error);
            alert("Error detectado:\n\n" + error.message);
        });
    });

    $("#botonRegistro").click(function() {
        location.assign('registro.html');
    });


    $("#botonCancelar").click(function() {
        location.assign('index.html');
    });

});
