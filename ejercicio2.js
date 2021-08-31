function obtener_datos(){
    let nombre =localStorage.getItem( "nombre");
    console.log( nombre);
}

function guardar_ya(){
    let persona ={
        cedula: "1350721518",
        apellidos: "LUCAS MERO",
        nombres: "LEIXER STEEVEN",
        direccion: "10 de enero",
        semestre: "6",
        paralelo: "A",
        correo:"leixer@hotmail.com"
    }
};
let nombre = "leixer";
localStorage.setItem("nombre", nombre);