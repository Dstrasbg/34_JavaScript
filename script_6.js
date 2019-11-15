/* 2.4.1. Code la vie
C'est le fameux code génétique dont voici un extrait ci-dessous :

UCU ou UCC ou UCA ou UCG ou AGU ou AGC => Sérine
CCU ou CCC ou CCA ou CCG => Proline
UUA ou UUG => Leucine
UUU ou UUC => Phénylalanine
CGU ou CGC ou CGA ou CGG ou AGA ou AGG => Arginine
UAU ou UAC => Tyrosine*/

console.log(ARNtoProteins('CCGUCGUUGCGCUACAGC'))
console.log(ARNtoProteins('CCUCGCCGGUACUUCUCG'))

function ARNtoProteins(arn) {
	var ARNArray = stringToArray(arn);
	var proteinsArray = []
    for (let index in ARNArray)
    {
		let protein = transform(ARNArray[index]) ;
		proteinsArray.push(protein);
	}
	return proteinsArray.join(" - ")
}

function stringToArray(arn) {
	return arn.match(/.{1,3}/g);
}

function transform (string)
{
    if (string === "UCU" || string === "UCC" || string === "UCA" || string === "UCG" || string === "AGU" || string === "AGC")
    {
		return "Sérine";
    }
    else if (string === "CCU" || string === "CCC" || string === "CCA" || string === "CCG")
    {
		return "Proline";
    } 
    else if (string === "UUA" || string === "UUG")
    {
		return "Leucine";
    }
    else if (string === "UUU" || string === "UUC")
    {
		return "Phénylalanine";
    }
    else if (string === "CGU" || string === "CGC" || string === "CGA" || string === "CGG" || string === "AGA" || string === "AGG")
    {
		return "Arginine";
    } 
    else if (string === "UAU" || string === "UAC")
    {
		return "Tyrosine";
    } else
    {
		return "Erreur. Acidé aminé non défini"
	}
}
//fin srcipt_6