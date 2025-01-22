///exercice: Définition de variables

let nom_boutique = "L'Apothicaire"
let nombre_potion_de_soin_en_stock = 12
let prix_potion_de_soin = 5.99
let status_boutique = "fermer"

///exercice: Affichage conditionnel

if (status_boutique == "ouvet"){
    console.log("bienvenue dans la boutique" + nom_boutique + "aventurier !")
}
else if (status_boutique == "fermer"){
    console.log("La boutique " + nom_boutique + " est fermée, revenez plus tard Aventurier ! 😴")
}