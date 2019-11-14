//2.2. Opérations & boucles

/* Un prompt s'affiche avec la question suivante
"De quel nombre veux-tu calculer la factorielle ?"
Utilisateur rentre un nombre (par ex 4)
Dans la console le résultat suivant est affiché
"Le résultat est : 24"*/

//2.2.1 Calculs rapides

let number = prompt("De quel nombre veux-tu calculer la factorielle ?", "_");

let factN = 1

for (let factN = 0 ; factN > 1; factN --)
{
    result *= factN;
}

console.log (`Le résultat est :  ${result}`);
//fin script_2