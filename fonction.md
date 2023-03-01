function add (){
    let nbr1c = prompt("le premier nombre");
    let nbr1 = parseInt(nbr1c);

    let op = prompt("opérateur");

    let nbr2c = prompt("le deuxieme nombre");
    let nbr2 = parseInt(nbr2c);

    let r = nbr1  + nbr2;
     document.write("resultat"+ (nbr1 + op + nbr2) );

}
-------------------------------------------------------
function gage(){

    let gage = prompt("bleu, vert rouge, orange ?");
switch(gage){
    case "bleu":
    document.write("aujourd'hui la chance sera avec toi");
    break;

    case "vert":
        document.write("tu tomberas sur quelqu'un de plus grand que toi aujourd'hui");
        break;

        case "rouge":
            document.write("si la somme des lettres de ton premon est premier ne joue pas au loto");
            break;
            case "orange":
                document.write("tu vas rencontrer une personne en sortant de chez toi");
                break;
                default:
                    document.write("je ne sais pas j'ai pas compris");
}
----------------------------------------------------------