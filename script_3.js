//2.2.2 Pyramide de Mario (encore!)

var floorNumber = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

// L'utilisateur rentre un nombre (par ex 5)
for (let count = 1; count <= floorNumber; count ++)
{
    console.log("".repeat(floorNumber-count) + "#".repeat(count));
}
//fin script_3