// Inserez la balise script au bon endroit dans votre index.html
// ok

// Créez un script permettant d'ouvrir une box alert au click sur un bouton, n'oubliez pas de créer la balise bouton dans votre index.html
document.getElementById("btn").addEventListener("click", function btnAlert() {
  window.alert("Hello");
});

// A l'aide de la propriété textContent modifiez le contenu text de votre index.html: d'abord créez un paragraphe avec l'ID de votre choix, puis dans votre fichier script.js modifiez le contenu texte de cette balise
document.getElementById("modif").textContent = "Je suis modifié";

// Affichez dans une box alert le résultat de la méthode math random, dont l'entier à ne pas dépassé est 16
let randomNumber = Math.floor(Math.floor(16) * Math.random());
window.alert(randomNumber);

// A l'aide de la méthode fetch(), contactez cette API via cette url: https://type.fit/api/quotes, aidez vous de l'exemple donné dans la théorie. D'abord traitez la réponse en utilisant la méthode .json(), ensuite affichez le contenu de la réponse dans un console.log
fetch("https://type.fit/api/quotes")
  .then(response => {
    return response.json();
  })
  .then(response => {
    console.log(response);
  });