
let tabla;
let hasta;
let form_submit = document.getElementById("form_submit");
let multiplicacion = document.getElementById("multiplicacion");

form_submit.addEventListener("click", () => {

    multiplicacion.innerHTML="";

    tabla = document.getElementById("tabla").value;
    hasta = document.getElementById("hasta").value;

        for(let i=0; i<=hasta; i++){
            multiplicacion.innerHTML+=`${tabla} x ${i} = ${tabla*i}<br />`;
    }
});




