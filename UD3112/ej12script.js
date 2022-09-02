let texto = "";
texto = window.prompt("Introduce la fecha", texto);

let posicio = texto.search(/[0-9]{2}\/[0-9]{2}\/[0-9]{4}/);
if(posicio != -1){
    console.log("Fecha correcta");
} else {
    console.log("Fecha incorrecta");
}

texto = window.prompt("Introduce el email", texto);
posicio = texto.search(/[a-z0-9.-]*@[a-z0-9]*.[a-z]{2,3}/i);
if(posicio != -1){
    console.log("Email correcto");
} else {
    console.log("Email incorrecto");
}

console.log(escapeHTML("<div>\\&</div>)"));
function escapeHTML(text) {
    let resultat = text.replace(/&/,"&amp;");
    resultat = resultat.replace(/\\/,"&quot;");
    resultat = resultat.replace(/</,"&lt;");
    resultat = resultat.replace(/>/,"&gt;");

    return resultat;
}

texto = window.prompt("Introduce nombre y apellidos", texto);
texto = texto.split(/ /);
console.log(texto[1]+", "+texto[0]);

texto = window.prompt("Introduce cadena HTML", texto);
texto = texto.replace(/<script>.*<\/script>/, "");
console.log(texto);
