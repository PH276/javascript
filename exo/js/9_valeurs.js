// alert ('hi')
var nb1 = Number(prompt("Entrez nb1 :"));
var nb2 = Number(prompt("Entrez nb2 :"));
var nb3 = Number(prompt("Entrez nb3 :"));

if (nb1 > nb2) {
    nb1 = nb3 * 2;
} else {
    nb1++;
    if (nb2 > nb3) {
        nb1 = nb1 + nb3 * 3;
    } else {
        nb1 = 0;
        nb3 = nb3 * 2 + nb2;
    }
}

// document.write(nb1 + "<br>");
// document.write(nb2 + "<br>");
// document.write(nb3 + "<br>");
nb1_resultat=document.getElementById('nb1');
nb1_resultat.innerText=nb1;
nb2_resultat=document.getElementById('nb2');
nb2_resultat.innerText=nb2;
nb3_resultat=document.getElementById('nb3');
nb3_resultat.innerText=nb3;