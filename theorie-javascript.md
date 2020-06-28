# Javascript Semaine 4

## Introduction

Bonjour à tous, et bienvenue pour cette nouvelle semaine au sein de la SiriusSchool!
Cette semaine nous allons passer la deuxième vitesse et embrayer directement vers la modification et la génération d'HTML via la méthode innerHTML.
Nous aurons l'occasion d'aborder les fichiers JSON, les eventListener.
Pour finir vous aurez l'occasion de créer votre première requête d'API, pour cela nous aborderons la méthode fetch et le principe de programation asynchrone.

## Table des matières

1. Introduction au fichier JSON
2. Manipuler le DOM: textContent
3. EventListener
4. Math.random() et Math.floor()
5. La méthode Fetch, introduction à la programmation asynchrone 

## Introduction au fichier JSON

Le format JSON ou Javascript Object Notation, permet de représenter des données basiquement sous la forme d'un objet Javascript au sein d'un fichier pouvant être lu et interprêté par un large éventail de langage en dehors du Javascript. Vous serez souvent amenés à travailler avec ce type de fichier, il est donc important de savoir comment les manipuler. 

Il permet d'**envoyer** et de **recevoir** des données de la part d'un serveur. Les balises de données structurées schema.org permettent de reconnaître et comprendre leur contenu, leur utilisation est un standard google.

Les données du JSON se présentent sous un **format chaîne de caractère**. Facile à écrire pour nous, facile à interprêter pour l'ordinateur. 

Son arborescence proche de celle d'un objet la rend facile à lire / parcourir pour l'oeil humain mais également pour la machine. Cette facilité le rend évidemment très populaire. 

En voici un exemple:

```js
      {
    "text": "Difficulties increase the nearer we get to the goal.",
    "author": "Johann Wolfgang von Goethe"
  }
```

L'objet se constitue d'une paire **"clé" : "valeur"** . La clé permet de pointer vers la valeur et de l'afficher.

Par exemple pour afficher uniquement le texte à l'écran je peux procéder de cette manière: 

```js 
    data.text
```

De la même manière que lorsque nous avons vu la façon de parcourir les objets javascript.
Cependant, si vous l'avez remarqué, le JSON exige pour être valide d'avoir sa clé et sa valeur introduite toute deux sous forme de chaîne de caractère.
L'objet suivant est un objet valide en Javascript, mais pas en JSON:
```js
      {
    text: "Difficulties increase the nearer we get to the goal.",
    author: "Johann Wolfgang von Goethe"
  }
```
En effet comme cité plus haut, la clé et la valeur doivent être écrites sous forme de chaîne de caractère, cependant **un objet JSON accepte également les types de données suivant:** 

- Booléen
- Chiffre
- Tableaux
- Autre objet
- Null

Qui plus est, pour être validée en tant que chaîne de caractère, le format JSON n'acceptera uniquement que l'utilisation des guillemets et pas d'apostrophe comme ça peut être le cas pour une simple variable de type chaîne de caractère.

Contrairement aux autres objets javascript, l'objet JSON ne peut pas être attribué à des méthodes, il ne peut que contenir du texte et ne rendre que du texte également.

Comme dans un objet JS il est possible **d'imbriquer** des valeurs sous forme de tableaux ou de tableaux d'objet.


```js
[
  {
    "name": "Molecule Man",
    "age": 29,
    "secretIdentity": "Dan Jukes",
    "powers": [
      "Radiation resistance",
      "Turning tiny",
      "Radiation blast"
    ]
  },
  {
    "name": "Madame Uppercut",
    "age": 39,
    "secretIdentity": "Jane Wilson",
    "powers": [
      "Million tonne punch",
      "Damage resistance",
      "Superhuman reflexes"
    ]
  }
]
```

Dans l'exemple ci dessus, la clé powers possède un tableau de valeurs.
Comment pointeriez vous vers le pouvoir "million tonne puch" de Madame Uppercute?

### E**n résumé**

Un fichier JSON peut être sous forme d'un tableau d'objets, dont les clés sont toujours des chaînes de caractères, et les valeurs pouvant être un autre objet, un tableau, une chaîne de caractère, null, ou un chiffre.

Les fichiers JSON servent à stocker les données de votre application, permettent d'en ajouter, supprimer, modifier.
Il est très populaire et reconnu par la plupart des langage / base de donnée.
Il se comporte comme un objet en javascript, ce qui rend les données faciles à atteindre.

## Manipuler le DOM: textContent

textContent est une propriété des éléments HTML permettant de modifier le texte contenu au sein de cet élément.

Pour ce faire il faut d'abord pointer l'élément, puis choisir sa propriété textContent et enfin la réattribuer à sa nouvelle valeur de type chaîne de caractère.

```js
document.getElementById("text").textContent = "Salut";
```

## EventListener

Vous l'avez déjà vu à plusieurs reprises lors de vos exercices, la méthode "addEventListener" qui permet d'ajouter une "écoute" des évènements sur un élément HTML.

```js
document.getElementById("btn").addEventListener("click", function maFonction(){
    console.log("ma fonction")
})
```
L'exemple ci dessus montre que la méthode addEventListener a été ajoutée sur l'élément dont l'ID est "btn" (un bouton en l'occurence). On demande à la méthode d'écouter tout les clicks sur cet élément et pour chaque click de lancer la fonction "maFonction" qui elle même lance un console.log.

Dans d'autres termes, l'eventListener va observer / écouter les évènements tels que le click, le survol de la souris, et réaliser une fonction que vous aurez programmé lorsque l'utilisateur va clicker ou survoler (par exemple) l'élément HTML avec sa souris.

Ce que l'on appelle "gestionnaire d'évenement" ou "handleEvent" est simplement le bloc de code appellé lors de la détection de cet évennement. Dans l'exemple ci dessus il s'agit d'un simple console.log. On peut traduir le handleEvent par "que faire si l'utilisateur click sur le bouton".

Par exemple il peut s'agir de l'ouverture d'une boite de dialogue,s comme dans votre exercice calculatrice de la semaine dernière.

Des évènements peuvent par exemple se déclencher au chargement de la page, au click, au double click, au survol de la souris, lors du chargement de nouvelles données, à la redimension d'une page, ou à sa fermeture, lorsque l'utilisateur appuie sur une touche de son clavier.

### **L'attribut onClick**

Vous avez peut être déjà vu dans vos exercices l'attribut html:
```html 
<button onclick="maFonctionJs()">Click</button>
```
Cette façon d'appeller une fonction au click sur un bouton est considéré comme **une mauvaise pratique** et déconseillé par la MDN!
Cette méthode permet d'injecter directement du javascript dans votre page HTML, ce qui est déconseillé.

### **La balise script**

La balise script permet d'injecter du contenu Javascript dans votre page HTML ou de lier un fichier script à votre page.
Tout comme l'attribut **onclick** nous préfererons **lier** un fichier **script.js** plutôt que d'insérer du code en javascript directement dans cette balise.

**Pour rendre fonctionnel votre eventListener** il faut insérer la balise script non pas dans les méta donnée mais après la fermeture de la balise body dans votre index.html:

```html
</body>
<script src="script.js"></script>
</html>
```
**Pourquoi?** Car de cette façon le navigateur pourra d'abord charger l'ensemble des balises html avant de passer au fichier script, si l'ensemble des balises sont chargées alors la récupération de l'élément HTML au sein du fichier script est assurée, si ce n'était pas le cas vous pourriez obtenir un "undefined" à la place de pointer vers l'élément désiré.

## Math.Random() et Math.Floor()

L'objet Math permet de recevoir plusieurs méthodes. 
Pour un apperçu des méthodes possibles voici un lien vers la MDN:

https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math

**Celles qui nous intéressent cette semaine sont les méthodes random() et floor().**

**Math.floor()** 

Renvoit un entier qui est plus petit ou égal au nombre passé en paramètre.
Par exemple:
```js
let floorNumber= Math.floor(14.32);
//valeur de floorNumber: 14
```

**Math.random()**

Renvoit un nombre "flottant" ,c'est à dire qu'il est très probable d'obtenir un chiffre avec une décimale, compris entre 0 et le chiffre donné en paramètre
Par exemple:

```js
let randomNumber= Math.random(18);
// valeur de randomNumber: 9.15
```

**Utilisation de Math.floor et de Math.Random**

Comme nous l'avons vu précédement un simple Math.Random peut poser problème si on désire obtenir un chiffre aléatoire qui soit un **entier**.

Pour obtenir un chiffre aléatoire entier il suffit de passer le math.random en paramètre d'un math.floor
Par exemple:

```js
let randomNumber= Math.floor(Math.floor() * Math.random(55));
// La valeur de randomNumber sera un entier compris entre 0 et 55, par exemple 33, n'hésitez pas à essayer par vous même en faisant un console.log(randomNumber) et en modifiant le paramètre pré-établi à 55.
```
On pourrait utiliser un chiffre aléatoire pour générer une couleur aléatoire en remplaçant les valeur RGB par la valeur d'un random.
On peut également l'utiliser pour pointer aléatoirement un index dans un tableau
Par exemple:

```js
console.log(myArray.length);
// On commence par trouver la longueur du tableau sur lequel on désir pointer un index aléatoire. Dans ce cas ci imaginons un tableau de 12 éléments.

let randomNumber = Math.floor(Math.floor() * Math.random(11))

// On défini la limite du random à 11, si un tableau est long de 12 éléments il possède 11 index étant donné que le premier index est initialisé à 0.

console.log(myArray[randomNumber]);

// On affiche ensuite l'élément du tableau qui correspond à la valeur du random contenu dans la variable randomNumber
```
## La méthode Fetch()

La méthode Fetch() permet de contacter un serveur afin d'y récupérer/modifier/ajouter/supprimer des données.

Pour cette semaine nous nous contenterons de l'utiliser dans le cadre de la récupération d'informations provenant d'une base de donnée.

Vous serez régulièrement amené à utiliser ce type de méthode (il existe différentes librairies qui possèdent leur propres méthodes) il est donc important de bien comprendre son fonctionnement.

Lorsque le navigateur lis et interprête votre code, il le fait de ligne en ligne mais pas que.
Il peut passer d'une opération à la suivante avant la fin de l'exécution de la première. Il s'agit de programmation "asynchrone". 
C'est ce qui arrive dans le cas d'une requête envoyée vers un serveur, le navigateur n'attend pas la réponse à cette requête avant d'exécuter la suite de votre code.

Si vous aviez prévu d'utiliser les données renvoyées par le serveur il faut donc spécifier au navigateur qu'il attend qu'un bout de code (la requête) soit exécutée avant d'utiliser ces données. Si vous ne l'indiquez pas, il est probable que la variable prévue pour stocker les nouvelles données reste vide aux yeux de votre navigateur.

Heureusement la méthode Fetch est exactement construite afin de palier à ce problème:

```js
fetch("http://l-url-de-la-requete.com/")
  .then(response => {
    console.log(response)
    return response.json();
  })
  .then(response => {
    let data = response
   document.getElementById("text").textContent = data.text
  });
```
Dans l'exemple ci dessus, on demande à la méthode de contacter un serveur via son url.

Ensuite le .then intervient (.then = ensuite). Grâce à lui, le navigateur va attendre qu'il ai reçu la réponse pour executer le bout de code qui le suit.

Lorsque ma réponse arrive, dans un premier temps je l'affiche dans ma console, et ensuite je la traite afin de retourner un format json grâce à la méthode .json().

Un second .then intervient, c'est alors que je crée une variable "data" à laquelle j'attribue comme valeur, ma réponse.

Pour finir j'utilise une clé/valeur de la réponse de l'API afin de modifier du contenu HTML.

Sans le .then, le navigateur n'aurait pas attendu l'arrivée de la réponse et aurait tenté d'exécuter les bouts de codes. Ce qui aurait renvoyé une erreur.

## Conclusion

Nous en avons fini pour cette semaine déjà bien chargée.

Gardez à l'esprit que l'introduction à la méthode fetch() n'est qu'une introduction, destinée à vous guider pour l'exercice principal de cette semaine.

Bon travail!

