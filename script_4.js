/*Exo 2.3. Analyses de données
2.3.1. Startup Nation*/

const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
];
    
//1 - Filtre les entrepreneurs nés dans les années 70:
  
console.log("Filtre les entrepreneurs nés dans les années 70 :")
var list = "Les entrepreneurs qui sont nés dans les 70's sont : "
for (let index in entrepreneurs)
    {
        let person = entrepreneurs[index]
        if (person.year>=1970 && person.year<1980)
        {
            list = list + person.first + " " + person.last + `(${person.year})` + ", "; 
        }
    }
  
console.log(list);
  

//2 - Array qui contient le prénom et le nom des entrepreneurs:
  
console.log("Array qui contient le prénom et le nom :")
let namesArray = []
for (let index in entrepreneurs)
    {
        let person = entrepreneurs[index];
        let entry = person.first + " " + person.last;
        namesArray.push(entry);
    }

    
console.log(namesArray);
  

//3 - Quel âge aurait chaque inventeur aujourd'hui ?:

console.log("Quel âge aurait chaque inventeur aujourd'hui ?")
for (let index in entrepreneurs)
    {
        let person = entrepreneurs[index];
        personAge = 2019 - person.year;
        console.log(`${person.first} ${person.last} aurait ${personAge} ans.`);
    }


//4 - Par ordre alphaphétique : 

console.log("Par ordre alphaphétique")
function compare(a, b)
{
    const lastA = a.last.toUpperCase();
    const lastB = b.last.toUpperCase();
    let comparison = 0;
    if (lastA > lastB)
    {
        comparison = 1;
    }
    else if (lastA < lastB)
    {
        comparison = -1;
    }
    return comparison;
  }
  
  console.log(entrepreneurs.sort(compare));
  //fin script_4