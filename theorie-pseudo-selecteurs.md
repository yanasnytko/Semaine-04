<!-- omit in toc -->
# Les pseudo sélecteurs

Vous avez peut-être déjà vu certains mot-clé derrière des sélecteurs en CSS (hover, link, visisted, active, first-child,...). Ce sont les pseudo sélecteurs, on en distingue de deux types: les **pseudo-elements** et les **pseudo-class**.

- [Pseudo-class](#pseudo-class)
  - [Les liens](#les-liens)
  - [Focus](#focus)
  - [Pseudo-class et CSS Class](#pseudo-class-et-css-class)
  - [First-child](#first-child)
  - [Last-child](#last-child)
  - [First-of-type](#first-of-type)
  - [Last-of-type](#last-of-type)
  - [Nth-child](#nth-child)
  - [Nth-last-child](#nth-last-child)
  - [Toutes les pseudo-class](#toutes-les-pseudo-class)
- [Pseudo-Element](#pseudo-element)
  - [After & Before](#after--before)
  - [First-letter & First-line](#first-letter--first-line)
  - [Selection](#selection)
  - [Tous les pseudo-element](#tous-les-pseudo-element)

## Pseudo-class

Les pseudo-class permet de définir l'état d'un élement. Par exemple: 

* Le style d'un élément quand on le survol avec le curseur de la souris
* Le style d'un lient visité et non-visité
* Le style d'un élément quand il est "focus"

### Les liens

```css
 /* lien non-visité */
a:link {color: #FF0000;}

/* lien visisté */
a:visited {color: #00FF00;}

/* survol avec le souris */
a:hover {color: #FF00FF;}

/* lien sélectionné */
a:active {color: #0000FF;} 
```

Ces propriétés CSS vont permettre de modifier le comportement par défaut des styles des liens sur votre page.

* **link**: permet de gérer le style des liens tant qu'il n'ont pas été cliqué. Mettre une couleur différente de votre couleur de texte est récommandé pour attirer le visiteur à cliquer sur le lien.
* **visisted**: permet de gérer le style des liens quand le visiteur à déjà cliqué dessus.
* **hover**: permet de gérer le style des liens lorsqu'on survole ce dernier avec le curseur de la souris.
* **active**: permet de gérer le style des liens quand ils sont cliqués.

### Focus

La pseudo-class `:focus` permet de définir le comportement d'un élément sélectionné par l'utilisateur généralement dans un formulaire.

```css
input:focus {
  background-color: yellow;
}
```

### Pseudo-class et CSS Class

Il est tout à fait possible de combiner les classes CSS et les pseudo-classes.

```css
a.important:hover{
  color:red;
}
```

### First-child

La pseudo-class `:first-child` permet de sélectionner spécifiquement le premier élément d'un groupe d'élément semblable.

```css
p:first-child{
  color:red;
}
```

```html
<p>Je serai en rouge</p>
<p>Je n'aurai pas de couleur spécifique</p>
<p>Je n'aurai pas de couleur spécifique</p>
```
<!-- omit in toc -->
#### Sélectionner le premier \<i> élément dans tous les \<p>

```html
<style>
  p i:first-child{
    color:red;
  }
</style>
<p>Je suis une phrase, <i>moi je serai en rouge</i> et <i>moi, comme je suis le deuxième, je ne le serai pas</i></p>
```
<!-- omit in toc -->
#### Sélectionner tous les \<i> dans le "first-child" \<p>

```html
<style>
  p:first-child i{
    color: red;
  }
</style>
<p>Salut <i>je serai en rouge</i> et <i>moi aussi</i></p>
<p>Salut <i>je serai PAS en rouge</i> et <i>moi NON PLUS</i></p>
```

### Last-child

Fonctionne comme pour `:first-child` mais au lieu de sélectionner le premier enfant de l'élément, il sélectionnera le dernier.

### First-of-type

La pseudo-class `:first-of-type` va sélectionner tous les éléments dont c'est leur première apparition.

```html
<style>
  article :first-of-type{
    background-color: red;
  }
</style>
<article>
  <div>Je suis la première div</div>
  <div>Je suis le premier <span>span</span></div>
  <p>Je suis le premier paragraphe</p>
  <div>Et moi je suis la dernière div</div>
</article>
```

### Last-of-type

Fonctionne comme `:first-of-type` mais sélectionnera le dernier élément qui apparaît.

### Nth-child

Permet de sélectionner un élément par rapport à sa position dans un groupe d'élément semblable.

```css
a:nth-child(2){
  color:orange;
}
```

> Dans cet exemple on va sélectionner le deuxième lien (a) disponible

Ce sélecteur prend un paramètre supplémentaire entre parenthèse. Il peut s'agir des mots-clés: `odd` (impair) ou `even` (pair). Il est également possible d'y introduire des formules.

```css
a:nth-child(2n+1){
  color:orange
}
```

Voilà comment est interprété la formule:

> (2 x 0) + 1 = 1 = 1st Element
> 
> (2 x 1) + 1 = 3 = 3rd Element
> 
> (2 x 2) + 1 = 5 = 5th Element

Cela revient pareil à indiquer `odd`, mais il est possible d'utiliser des formules différentes pour d'autres sélections, par exemple:

```css
a:nth-child(3n+3){
  color: green;
}
```

> (3 x 0) + 3 = 3rd Element
> 
> (3 x 1) + 3 = 6th Element
>
> (3 x 2) + 3 = 9th Element

> :bulb: Il est possible de raccourcir cette formule par `3n` pour sélectionner, du coup, tous les 3 éléments.

> ✅ Le + dans la formule permet de démarrer le compte à commençant par le chiffre qui suit. Par exemple: 3n+5 va sélectionner tous les 3 éléments en commençant par le cinquième.

[En apprendre plus sur les formules](https://css-tricks.com/how-nth-child-works/)

### Nth-last-child

Fonctionne comme `:nth-child` mais compte en commençant par la fin.

### Toutes les pseudo-class

Il y a évidement énormément d'autres pseudo-class qui ont chacune leurs utilités. Nous venons d'en voir quelques unes qui seront celle que vous utiliserez le plus fréquemment dans vos travaux. 

Voici [un lien vers la MDN et toutes les pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)

## Pseudo-Element

Les pseudo-element sont des mots-clés que l'on rajoute à la fin d'un sélecteur pour sélectionner une partie précise de l'élement. 

### After & Before

Permet de sélectionner le début (before) our la fin (after) d'un élément. Cela sert notamment à ajouter un style à un élément grâce à la propriété `content`

```css
a::before{
  content:"This is a link -> "
}
a::after{
  content:" <- Click on me";
}
```

> :bulb: Le contenu ajouté sera en `inline` dans le bloc

### First-letter & First-line

Permet de sélectionner la première lettre ou ligne d'un élement.

```css
p::first-letter {
  font-size: 130%;
}
p::first-line {
  color: red;
}
```

### Selection

Permet de styliser la sélection d'un élément par l'utilisateur.

```css
::selection {
  color: red;
  background: yellow;
}
```

>:bulb: Tous les éléments sélectionnés ici seront en rouge et sur fond jaune. 

### Tous les pseudo-element

Il existe encore quelques autres pseudo-element, mais rien de bien utile dans le cadre de ce cours, voici tout de même [un lien vers la doc.](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)