// 1 )
// Créez un tableau comprenant 9 prénoms, la variable doit se nommer "tabPrenoms"
// let tabPrenoms = ["André", "Kadir", "Youssef", "Younes", "L'Autre", "Violette", "Martin", "Rayane", "Bryan"];

// // Récuperez la longueur de se tableau et stockez la dans une variable du nom de "tabLength" et affichez là en suite via un console.log()
// let tabLength = tabPrenoms.length;
// console.log(tabLength);

// // Affichez dans la console chaque prénom précédé de "Bonjour " exemple
// // Bonjour Nicolas
// console.log(`Bonjour, ${tabPrenoms[0]}`);
// console.log(`Bonjour, ${tabPrenoms[1]}`);
// console.log(`Bonjour, ${tabPrenoms[2]}`);
// console.log(`Bonjour, ${tabPrenoms[3]}`);
// console.log(`Bonjour, ${tabPrenoms[4]}`);
// console.log(`Bonjour, ${tabPrenoms[5]}`);
// console.log(`Bonjour, ${tabPrenoms[6]}`);
// console.log(`Bonjour, ${tabPrenoms[7]}`);
// console.log(`Bonjour, ${tabPrenoms[8]}`);
//########################################################################################

// 2 )
 
// Créez une variable qui comprend un chiffre aléatoire entre 1 et 10
// let random = Math.round(Math.random() * (10 - 1) + 1);
// // Posez la question a l'utilisateur, demandez lui d'entrer un chiffre entre 1 et 10
// let reponse = parseInt(prompt("Entrez un chiffre entre 1 et 10: "));

// // Si le nombre entré par l'utilisateur est différent du nombre aléatoire généré alors répétez la question
// if (reponse != random) {
//     reponse = parseInt(prompt("Reponse incorrecte, Entrez un autre chiffre entre 1 et 10: "));
//     if (reponse != random){
//         reponse = parseInt(prompt("Reponse incorrecte, Entrez un autre chiffre entre 1 et 10: "))
//         if (reponse != random){
//             alert(`T'as raté 3x. la reponse est ${random}`);
//         } else {
//             alert("Reponse correcte! ");
//         };
//     } else {
//         alert("Reponse correcte! ");
//     };
// } else {
//     alert("Reponse correcte! ");
// };

// Sinon félicitez l'utilisateur d'avoir trouvé le bon nombre !
//###############################################################

// 3 ) Bonus : Le QCM
// Créez un QCM avec 3 questions,les bonnes réponses seront stocké dans un tableau.
// Astuce : 
// - Il faudra faire une condition
// - Il y aura 3 tableaux : 
//   - Un tableau avec les 3 questions
//   - Un tableau avec les 3 réponses
//   - Un tableau avec les questions + la réponses aux quelles ont à correctement répondu
// - Et plein d'autres choses bonne chance.

// let tabQuestions = ["2 + 3 = ", "5 + 7 = ", "10 + 32 = "];
// let tabReponses = ["5", "12", "42"];
// let tabQuestRepo = [];

// let reponse = parseInt(prompt(`${tabQuestions[0]} ?`));
// if(reponse != tabReponses[0]) {
//     reponse = parseInt(prompt(`${tabQuestions[0]} ?`));
//     if(reponse != tabReponses[0]) {
//         reponse = parseInt(prompt(`${tabQuestions[0]} ?`));
//         if(reponse != tabReponses[0]) {
//             alert(`T'as raté 3x, la reponse est ${tabReponses[0]}`);
//         } else {
//             alert("Reponse correcte");
//             tabQuestRepo.push(`${tabQuestions[0]} ${reponse}`);
//         }
//     } else {
//         alert("Reponse correcte");
//         tabQuestRepo.push(`${tabQuestions[0]} ${reponse}`);
//     };
// } else {
//     alert("Reponse correcte");
//     tabQuestRepo.push(`${tabQuestions[0]} ${reponse}`);
// };
// console.log(tabQuestRepo);

// reponse = parseInt(prompt(`${tabQuestions[1]} ?`));

// if(reponse != tabReponses[1]) {
//     reponse = parseInt(prompt(`${tabQuestions[1]} ?`));
//     if(reponse != tabReponses[1]) {
//         reponse = parseInt(prompt(`${tabQuestions[1]} ?`));
//         if(reponse != tabReponses[1]) {
//             alert(`T'as raté 3x, la reponse est ${tabReponses[1]}`);
//         } else {
//             alert("Reponse correcte");
//             tabQuestRepo.push(`${tabQuestions[1]} ${reponse}`);
//         }
//     } else {
//         alert("Reponse correcte");
//         tabQuestRepo.push(`${tabQuestions[1]} ${reponse}`);
//     };
// } else {
//     alert("Reponse correcte");
//     tabQuestRepo.push(`${tabQuestions[1]} ${reponse}`);
// };
// console.log(tabQuestRepo);

// reponse = parseInt(prompt(`${tabQuestions[2]} ?`));

// if(reponse != tabReponses[2]) {
//     reponse = parseInt(prompt(`${tabQuestions[2]} ?`));
//     if(reponse != tabReponses[2]) {
//         reponse = parseInt(prompt(`${tabQuestions[2]} ?`));
//         if(reponse != tabReponses[2]) {
//             alert(`T'as raté 3x, la reponse est ${tabReponses[2]}`);
//         } else {
//             alert("Reponse correcte");
//             tabQuestRepo.push(`${tabQuestions[2]} ${reponse}`);
//         }
//     } else {
//         alert("Reponse correcte");
//         tabQuestRepo.push(`${tabQuestions[2]} ${reponse}`);
//     };
// } else {}