//Exo 2.3.2. Bibliothécaire

const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
];
 
// 1- Est-ce que tous les livres ont été au moins empruntés une fois ?

console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");
var count = 0 ; 
for (let index in books)
{
    let book = books[index];
    if (book.rented == 0)
    {
        count +=1;
    }
}      
  
if (count > 0)
{
    console.log(`>>> ${count} livre(s) n'ont jamais été emprunté(s)`); 
}
else
{
    console.log(">>> Oui, tous les livres ont été empruntés au moins une fois");
}    


//2 -Quel est livre le plus emprunté ?

console.log("Quel est livre le plus emprunté ?");

let rentalsArray = [];
for (let index in books)
{
    rentalsArray.push(books[index].rented);
}
let max = Math.max(...rentalsArray);
let foundMax = books.find(element => element.rented === max);

console.log(foundMax);
      

//3 - Quel est le livre le moins emprunté ?:

console.log("Quel est le livre le moins emprunté ?");
let min = Math.min(...rentalsArray);
let foundMin = books.find(element => element.rented === min);

console.log(foundMin);
    

//4 -trouve le livre avec l'ID: 873495:

console.log("Trouve le livre avec l'ID: 873495");
console.log(books.find(element => element.id === 873495));
  

//5 - Supprime le livre avec l'ID: 133712:
console.log("Supprime le livre avec l'ID: 133712");
for (let index in books)
{
    if (books[index].id == 133712)
    {
        var a = index ;
    }
}

books.splice(a,1);
console.log(`Il reste  ${books.length} livres`);


//6 - Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).

console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)");
  
function compare(a, b)
{
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();
    let comparison = 0;
    if (titleA > titleB) 
    {
        comparison = 1;
    }
    else if (titleA < titleB)
    {
        comparison = -1;
    }
    return comparison;
}
  
console.log(books.sort(compare));
//fin script_5