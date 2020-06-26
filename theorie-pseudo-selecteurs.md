# Les pseudo sélecteurs

Vous avez peut-être déjà vu certains mot-clé derrière des sélecteurs en CSS (hover, link, visisted, active, first-child,...). Ce sont les pseudo sélecteurs, on en distingue de deux types: les **pseudo-elements** et les **pseudo-class**.

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

### Pseudo-class et CSS Class

Il est tout à fait possible de combiner les classes CSS et les pseudo-classes.

```css
a.important:hover{
  color:red;
}
```

### First-child

La pseudo-class `:first-child` permet de sélectioner spécifiquement le premier élément d'un autre élément.

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

#### Sélectionner le premier \<i> élément dans tous les \<p>

```html
<style>
  p i:first-child{
    color:red;
  }
</style>
<p>Je suis une phrase, <i>moi je serai en rouge</i> et <i>moi, comme je suis le deuxième, je ne le serai pas</i></p>
```

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