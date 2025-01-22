///exercice: Définition de variables

let nom_boutique = "L'Apothicaire"
let nombre_potion_de_soin_en_stock = 12
let prix_potion_de_soin = 5.99
let status_boutique = "fermer"
let choix
let nom_sorcier = "Albus Perceval Wulfric Brian Dumbledore"
let quantiré_potion_de_soin = 50

///exercice: Affichage conditionnel

if (status_boutique == "ouvet"){
    console.log("bienvenue dans la boutique" + nom_boutique + "aventurier !")
}
else if (status_boutique == "fermer"){
    console.log("La boutique " + nom_boutique + " est fermée, revenez plus tard Aventurier ! 😴")
}

///exercice: Affichage conditionnel avec switch

console.log("Bienvenue dans mon humble boutique Aventurier. Que veux-tu savoir ? 🤔")
console.log("1. Le nom de la boutique")
console.log("2. Le nom du Sorcier")
console.log("3. Le prix d'un potion de soi")
console.log("4. La quantité d'une potion de soin\n")
choix = prompt("que souhaitez vous faire ??")
switch (choix) {
    case "1": {
        console.log("le nom de la boutique est: " + nom_boutique);
        break;
    }
    case "2": {
        console.log("le nom du sorcier est: " + nom_sorcier);
        break;
    }
    case "3": {
        console.log("Le prix d'un potion de soi est: " + prix_potion_de_soin);
        break;
    }
    case "4": {
        console.log("La quantité d'une potion de soin est: " + quantiré_potion_de_soin + "cl");
    }
    default: {
        console.log("Mh... Désolé aventurier, je ne comprends pas ce que tu souhaites. Refais ton choix ! 😕")
    }
}