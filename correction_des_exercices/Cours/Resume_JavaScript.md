# Résumé JavaScript - Guide de Révision

## 1. Variables et Types de Données

### Déclaration de variables
```javascript
let nom = "Ali";        // Utiliser let (moderne)
const age = 27;         // Constante (ne peut pas être changée)
var ancien = 10;        // Ancien (à éviter)
```

### 7 Types de données
```javascript
let texte = "Bonjour";           // String (texte)
let nombre = 42;                 // Number (entier ou décimal)
let decimal = 3.14;              // Number
let verifie = true;              // Boolean (true/false)
let vide = null;                 // Null (absence de valeur)
let nonDefini = undefined;       // Undefined (valeur manquante)
let objet = { nom: "Ali" };      // Object
```

### Vérifier le type
```javascript
console.log(typeof texte);       // "string"
console.log(typeof nombre);      // "number"
console.log(typeof verifie);     // "boolean"
```

---

## 2. Opérateurs

### Arithmétiques
```javascript
let a = 10;
console.log(a + 5);              // 15 (addition)
console.log(a - 3);              // 7 (soustraction)
console.log(a * 2);              // 20 (multiplication)
console.log(a / 2);              // 5 (division)
console.log(a % 3);              // 1 (modulo - reste)
console.log(a ** 2);             // 100 (exposant)
```

### Comparaison
```javascript
console.log(5 == "5");           // true (égalité en valeur)
console.log(5 === "5");          // false (égalité stricte - type aussi)
console.log(5 != "5");           // false
console.log(5 !== "5");          // true
console.log(5 > 3);              // true
console.log(5 >= 5);             // true
```

### Logiques
```javascript
console.log(true && false);      // false (ET logique)
console.log(true || false);      // true (OU logique)
console.log(!true);              // false (NON logique)
```

### Incrémentation/Décrémentation
```javascript
let i = 5;
console.log(i++);                // 5 (puis i devient 6)
console.log(++i);                // 7 (d'abord i devient 7)
console.log(i--);                // 7 (puis i devient 6)
```

### Opérateur ternaire
```javascript
let age = 20;
let statut = age >= 18 ? "Adulte" : "Mineur";
console.log(statut);             // "Adulte"
```

---

## 3. Tableaux (Arrays)

### Créer un tableau
```javascript
let fruits = ["pomme", "banane", "orange"];
let nombres = [1, 2, 3, 4, 5];
let mixte = [1, "texte", true, null];
```

### Accéder aux éléments
```javascript
console.log(fruits[0]);          // "pomme"
console.log(fruits[1]);          // "banane"
console.log(fruits.length);      // 3
```

### Méthodes du tableau
```javascript
fruits.push("mangue");           // Ajouter à la fin
fruits.pop();                    // Supprimer le dernier
fruits.shift();                  // Supprimer le premier
fruits.unshift("raisin");        // Ajouter au début
fruits.join(", ");               // "raisin, pomme, banane"

// Boucler sur le tableau
fruits.forEach(fruit => {
    console.log(fruit);
});

// Créer un nouveau tableau transformé
let majuscule = fruits.map(f => f.toUpperCase());

// Filtrer les éléments
let long = fruits.filter(f => f.length > 5);
```

---

## 4. Conditions

### if / else if / else
```javascript
let note = 15;

if (note >= 16) {
    console.log("Très bien");
} else if (note >= 12) {
    console.log("Bien");
} else if (note >= 10) {
    console.log("Passable");
} else {
    console.log("Raté");
}
```

### switch
```javascript
let jour = 3;

switch (jour) {
    case 1:
        console.log("Lundi");
        break;
    case 2:
        console.log("Mardi");
        break;
    case 3:
        console.log("Mercredi");
        break;
    default:
        console.log("Jour invalide");
}
```

---

## 5. Boucles

### Boucle for
```javascript
// Compter de 0 à 4
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Parcourir un tableau
let couleurs = ["rouge", "vert", "bleu"];
for (let i = 0; i < couleurs.length; i++) {
    console.log(couleurs[i]);
}
```

### Boucle for...of (pour tableaux)
```javascript
let fruits = ["pomme", "banane", "orange"];

for (let fruit of fruits) {
    console.log(fruit);
}
```

### Boucle while
```javascript
let compteur = 0;

while (compteur < 5) {
    console.log(compteur);
    compteur++;
}
```

### break et continue
```javascript
// break : quitter la boucle
for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log(i);  // 0,1,2,3,4
}

// continue : passer à l'itération suivante
for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log(i);  // 0,1,3,4
}
```

---

## 6. Objets

### Créer un objet
```javascript
let personne = {
    nom: "Ali",
    age: 27,
    ville: "Casablanca",
    saluer: function() {
        console.log("Bonjour, je suis " + this.nom);
    }
};
```

### Accéder aux propriétés
```javascript
console.log(personne.nom);       // "Ali"
console.log(personne["age"]);    // 27
personne.saluer();               // "Bonjour, je suis Ali"
```

### Modifier un objet
```javascript
personne.age = 28;               // Modifier
personne.email = "ali@email.com"; // Ajouter
delete personne.ville;           // Supprimer
```

---

## 7. Fonctions

### Déclarer une fonction
```javascript
function dire(nom) {
    console.log("Bonjour " + nom);
}

dire("Ali");  // "Bonjour Ali"
```

### Fonction avec retour
```javascript
function additionner(a, b) {
    return a + b;
}

let resultat = additionner(5, 3);
console.log(resultat);  // 8
```

### Fonction fléchée (arrow function)
```javascript
const multiplier = (a, b) => a * b;
console.log(multiplier(4, 5));  // 20

const saluer = (nom) => {
    return "Bonjour " + nom;
};
```

### Fonction avec paramètre par défaut
```javascript
function accueillir(nom = "Visiteur") {
    console.log("Bienvenue " + nom);
}

accueillir();          // "Bienvenue Visiteur"
accueillir("Ahmed");   // "Bienvenue Ahmed"
```

---

## 8. Manipulation du DOM

### Sélectionner un élément
```javascript
// Par id
let element = document.getElementById("mon-id");

// Par classe
let elements = document.getElementsByClassName("ma-classe");

// Par sélecteur CSS (moderne)
let para = document.querySelector("p");
let tous = document.querySelectorAll(".classe");
```

### Modifier le contenu
```javascript
let elem = document.getElementById("titre");

elem.textContent = "Nouveau texte";        // Texte simple
elem.innerHTML = "<strong>Gras</strong>";  // HTML
```

### Modifier le style
```javascript
elem.style.color = "red";
elem.style.backgroundColor = "yellow";
elem.style.fontSize = "20px";
```

### Ajouter une classe CSS
```javascript
elem.classList.add("active");     // Ajouter
elem.classList.remove("active");  // Supprimer
```

### Créer et ajouter un élément
```javascript
let newDiv = document.createElement("div");
newDiv.textContent = "Contenu";
newDiv.id = "mon-div";

document.body.appendChild(newDiv);  // Ajouter à la fin
document.body.prepend(newDiv);      // Ajouter au début
```

### Supprimer un élément
```javascript
let elem = document.getElementById("a-supprimer");
elem.remove();
```

---

## 9. Événements

### Ajouter un écouteur d'événement
```javascript
let bouton = document.getElementById("mon-bouton");

bouton.addEventListener("click", function() {
    console.log("Bouton cliqué!");
});

// Avec fonction fléchée
bouton.addEventListener("click", () => {
    console.log("Bouton cliqué!");
});
```

### Événements courants
```javascript
// click : clic souris
// mouseover : survol
// mouseout : quitter le survol
// change : modification d'un input
// submit : soumission du formulaire
// keydown : touche enfoncée
// load : page chargée
```

### Exemple complet
```javascript
let formulaire = document.getElementById("mon-form");

formulaire.addEventListener("submit", (event) => {
    event.preventDefault();  // Empêcher l'envoi
    console.log("Formulaire soumis!");
});
```

---

## 10. Validation de formulaire

### Récupérer les valeurs d'un formulaire
```javascript
let input = document.getElementById("nom");
let valeur = input.value;

console.log(valeur);  // La valeur saisie
```

### Exemple : Valider avant d'envoyer
```javascript
let form = document.getElementById("mon-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let email = document.getElementById("email").value;
    
    if (email === "") {
        console.log("L'email est vide!");
        return;
    }
    
    if (!email.includes("@")) {
        console.log("Email invalide!");
        return;
    }
    
    console.log("Email valide!");
    // Envoyer le formulaire
});
```

---

## 11. Chaînes de caractères - Méthodes utiles

```javascript
let texte = "Bonjour le monde";

console.log(texte.length);              // 16 (longueur)
console.log(texte.toUpperCase());       // "BONJOUR LE MONDE"
console.log(texte.toLowerCase());       // "bonjour le monde"
console.log(texte.charAt(0));           // "B"
console.log(texte.indexOf("le"));       // 9
console.log(texte.substring(0, 7));     // "Bonjour"
console.log(texte.split(" "));          // ["Bonjour", "le", "monde"]
console.log(texte.replace("le", "LA")); // "Bonjour LA monde"
console.log(texte.includes("monde"));   // true
console.log(texte.trim());              // Supprimer les espaces
```

---

## 12. Portée des variables

```javascript
// Portée globale
let global = "Je suis global";

function test() {
    // Portée locale
    let local = "Je suis local";
    console.log(global);  // ✓ Fonctionne
    console.log(local);   // ✓ Fonctionne
}

console.log(global);      // ✓ Fonctionne
console.log(local);       // ✗ Erreur! Local n'existe que dans la fonction
```

---

## 13. Template Literals

```javascript
let nom = "Ali";
let age = 27;

// Au lieu de : "Je m'appelle " + nom + " et j'ai " + age + " ans"
// Utiliser :
console.log(`Je m'appelle ${nom} et j'ai ${age} ans`);
```

---

## Conseils pour réviser

✓ **Testez chaque exemple** dans la console du navigateur (F12)  
✓ **Écrivez le code vous-même** au lieu de copier-coller  
✓ **Pratiquez les exercices TP** du cours  
✓ **Combinez plusieurs concepts** dans vos projets  
✓ **Consultez la console** pour les erreurs (F12 → Console)