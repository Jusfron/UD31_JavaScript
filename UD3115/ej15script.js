const fotoGrande = document.getElementById("fotogrande");

function cambiarFoto(foto){
    let url = foto.outerHTML.slice(foto.outerHTML.search("src")+9,foto.outerHTML.search("jpg")+3 );
    fotoGrande.style.backgroundImage="url(img/"+url+")";
}