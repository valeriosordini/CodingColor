console.log("inizio esecuzione");
let d = new Date();
console.log(d);
document.getElementById("saluto").innerHTML=d;

let colori = [];
function elabora(){
  let numero = document.getElementById("inNumber").value;

  //verifica se numero inserito è valido
  if (numero >=0 && numero <= 255) {
    //inserisce numero nell'array
    colori.push(numero);
    //visualizza il numero dentro il div output
    document.getElementById("outText").innerHTML ="Hai inserito il numero " + numero;
    //visualizza numeri inseriti del colore scelto
    document.getElementById("outText").innerHTML += "<br> I colori inseriti sono: " + colori;
    console.log(colori);
    if (colori.length==3){
      document.getElementById("outText").style.color=`rgb(${colori[0]},${colori[1]},${colori[2]})`;
    } 
  }
  else {
    //messaggio di errore dentro il div error
    document.getElementById("error").innerHTML ="Il numero non è valido. Inserirne uno tra 0 e 255";
  }
}
   
function reset() {
    colori = [];
    document.getElementById("inNumber").value = "";
    document.getElementById("outText").innerHTML = "-";
    document.getElementById("outText").style.color = white;
    document.getElementById("error").innerHTML = "";
}
