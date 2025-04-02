// const age = 20;
const pays = "US";

// const peutConduireEnFrance = pays === "FR" && age >= 18;
// const peutConduireAuUS = pays === "US" && age >= 16;

// if (peutConduireEnFrance ) {
//   console.log("Vous avez le droit de conduire en France");
// } else if (peutConduireAuUS){
//     console.log("Vous avez le droit de conduire aux Etat Unis");
// } else {
//     console.log("Vous n'avez pas le droit de conduire");
// }

// switch (pays) {
//   case "FR":
//     console.log("Je suis en France");
//     break;
//   case "US":
//     console.log("Je suis aux Etat Unis");
//     break;
//   default:
//     console.log("Je suis dans un autre pays");
//     break;
// }

// moins de 13 ans = Lilo et stitch
// 13 18 = Matrix
// 18 et plus = Evil Dead
// const age = prompt('Quel est votre age ?')

// const stitch = age <= 13;
// const matrix = age <= 18;

// if (stitch) {
//     console.log("Je te conseille le film Lilo & Stitch")
// } else if (matrix) {
//     console.log("Je te conseille le film Matrix")
// } else {
//     console.log("Je te conseille le film Evil Dead")
// }

const a = prompt('Entrez un premier nombre');3
const b = prompt('Entrez un second nombre');
const result = a*b;

if (result > 0) {
    console.log(`${a}x${b} est positif`);
} else {
    console.log(`${a}x${b} est négatif`);
}