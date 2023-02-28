function add (){
    let nbr1c = prompt("le premier nombre");
    let nbr1 = parseInt(nbr1c);

    let op = prompt("opérateur");

    let nbr2c = prompt("le deuxieme nombre");
    let nbr2 = parseInt(nbr2c);

    let r = nbr1  + nbr2;
     document.write("resultat"+ (nbr1 + op + nbr2) );

}