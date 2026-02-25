const { set } = require("express/lib/application");

function mudarcor() {
    
    if  (document.body.style.backgroundColor == "rgb(134, 0, 0)") {
        document.body.style.backgroundColor = "#000000";
        document.body.style.color = "#00ff80";
        alert("Modo Neon Ativado");
    } else {
        document.body.style.backgroundColor = "rgb(134, 0, 0)";
        document.body.style.color = "#000000";
        alert("Modo Neon Desativado");
    }
}