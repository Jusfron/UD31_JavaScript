let dado1 = lanzarDados();
let dado2 = lanzarDados();
let sumaDados = dado1+dado2;
let apariciones = [
[0,0,0,0,0,0],
[0,0,0,0,0,0],
[0,0,0,0,0,0],
[0,0,0,0,0,0],
[0,0,0,0,0,0],
[0,0,0,0,0,0],
];

for(let i = 0; i < 36000; i++) {
    dado1 = lanzarDados();
    dado2 = lanzarDados();
    apariciones[dado1-1][dado2-1]++;
}

for(let i = 0; i < 6; i++){
    for(let j = 0; j < 6; j++){
        console.log("Dado1: "+(i+1)+" dado2: "+(j+1)+" apariciones: "+apariciones[i][j] );
    }
}

function lanzarDados() {
    return Math.floor(Math.random()*6+1);
}