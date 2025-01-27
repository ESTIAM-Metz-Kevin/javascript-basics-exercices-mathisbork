let bourse_aventurier = 100
let bourse_vendeur = 0
let stock = [
    {nom: "Potion de soin", quantité: 1, prix: 40},
    {nom: "Potion d'endurance", quantité: 1, prix: 20},
    {nom: "Potion de mana", quantité: 2, prix: 20}
]
let inventaire_aventurier = []
do {
    stock.filter(item => item.quantité > 0)
    stock.sort((a, b) => b.quantité - a.quantité);
    console.log("Que souhaitez vous faire?")
    console.log("1.Acheter une potion")
    console.log("2.vendre une potion")
    console.log("3.quitter")
    let choix_primaire = prompt()
    switch (choix_primaire) {
        case "1":
            console.log("Quel potion veux tu acheter?")
            for (i in stock) {
                console.log(i + ".Nom: " + stock[i].nom + ", Quantité: " + stock[i].quantité + ", Prix: " + stock[i].prix)
            }
            let choix_achat_potion = prompt()
            switch (choix_achat_potion) {
                case "1":{
                    
                    break
                }
                case "2":{
                    break
                }
                case "3":{
                    break
                }
            }
            break
        case "2":
            break
        case "3":
            console.log("Tu ne peut pas hehe 😈")
            break
        default:
            console.log("choix invalide")
            break;
    }
}while (bourse_aventurier >= 20)
console.log("Nous avons gagner: " + bourse_vendeur + "🪙")