//Exo 2.2. Opérations & boucles

/* Un prompt s'affiche avec la question suivante
"De quel nombre veux-tu calculer la factorielle ?"
Utilisateur rentre un nombre (par ex 4)
Dans la console le résultat suivant est affiché
"Le résultat est : 24"*/

//2.2.1 Calculs rapides

var number = prompt("De quel nombre veux-tu calculer la factorielle ?"," ");
n = Number(number);
function factoriel(x)
{
    if(x<0)
    {
    console.log("Erreur. Seulement des entiers positifs STP !");
    }
    if(x<=1) return 1;
    else return x*factoriel(x-1);
}
//block of code to try

try {
    R=factoriel(n); 
    console.log("Le résultat factoriel est : " +R);
}

/* block to handle errors
if there's an error
output error
write the error in console
https://htmlcheatsheet.com/js/ */

catch(e) {
    if (e instanceof Error) { 
        console.log(e.name + " : " + e.message);
    }
}
//fin script_2