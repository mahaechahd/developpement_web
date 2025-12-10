# Guide Complet : GitHub et Git

## Table des matières
1. Créer un compte GitHub
2. Créer un dépôt (repository)
3. Cloner un fichier README existant
4. Installer et configurer Git
5. Les commandes Git essentielles
6. Scénarios pratiques étape par étape

---

## 1. Créer un compte GitHub

GitHub est une plateforme en ligne qui accueille vos projets de code. C'est votre point de départ pour toute collaboration et gestion de versions.

### Étapes pour créer votre compte :

1. Allez sur le site https://github.com
2. Cliquez sur le bouton **Sign up** (en haut à droite)
3. Entrez votre adresse email (de l'emsi)
4. Créez un mot de passe fort (au moins 8 caractères, avec lettres, chiffres et symboles)
5. Choisissez un nom d'utilisateur (ce sera votre identité sur GitHub - rendez-le mémorable !)
6. Sélectionnez si vous êtes étudiant ou travailleur (optionnel)
7. Cliquez sur **Create account**

### Vérification de votre email :

Après la création, GitHub vous envoie un email de confirmation. Vous devez **vérifier votre adresse email** avant de pouvoir créer des dépôts. Allez dans votre boîte mail, trouvez l'email de GitHub, et cliquez sur le lien de vérification.

---

## 2. Créer un dépôt (Repository)

Un dépôt est un dossier en ligne qui contient tous vos fichiers de projet et l'historique de leurs modifications.

### Étapes pour créer un nouveau dépôt :

1. Connectez-vous à votre compte GitHub
2. Dans le coin supérieur droit de la page, cliquez sur le **+** (plus)
3. Sélectionnez **New repository**
4. Remplissez les informations :
   - **Repository name** : Donnez un nom à votre projet (ex: `mon-premier-projet`)
   - **Description** : Décrivez brièvement votre projet (facultatif, mais recommandé)
   - **Public ou Private** : Sélectionnez **Public** pour que tout le monde puisse voir votre projet
5. Cochez la case **Add a README file** - cela crée un fichier README vide
6. Vous pouvez ignorer les options `.gitignore` et license pour l'instant
7. Cliquez sur **Create repository**

**Bravo ! Vous venez de créer votre premier dépôt GitHub !** 🎉

---

## 3. Cloner un fichier README existant

Vous avez deux options : soit cloner un dépôt complet depuis GitHub, soit créer votre README directement en ligne.

### Modifier votre README directement sur GitHub

Si vous avez créé votre dépôt(repository) seul :

1. Allez sur votre dépôt(repository) GitHub
2. Vous devriez voir un fichier `README.md` - cliquez sur le bouton **Edit** (icône de crayon)
3. Copier et coller le contenu du fichier [README_TEMPLATE.md](https://github.com/hm43/developpement_web/blob/G5/projet/README_TEMPLATE.md?plain=1)  dans votre fichier  `README.md`
4. En bas de la page, écrivez un message de commit (ex: "Initialiser le README")
5. Cliquez sur **Commit changes**

---

## 4. Installer et configurer Git

Git est un outil que vous installez sur votre ordinateur pour gérer les fichiers localement et communiquer avec GitHub.

### Installation selon votre système :

#### Windows :
1. Téléchargez Git depuis https://git-scm.com/
2. Double-cliquez sur le fichier `.exe` et suivez l'installation
3. Gardez les paramètres par défaut

#### Mac :
1. Ouvrez le Terminal
2. Copiez-collez cette commande :
   ```
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
3. Attendez la fin de l'installation, puis tapez :
   ```
   brew install git
   ```

#### Linux (Ubuntu/Debian) :
1. Ouvrez un terminal
2. Tapez ces commandes :
   ```
   sudo apt update
   sudo apt install git
   ```

### Configuration de Git avec votre identité :

Après l'installation, vous devez configurer Git avec votre nom et email (ceux de votre compte GitHub).

Ouvrez votre terminal et tapez :

```
git config --global user.name "Votre Nom"
git config --global user.email "votre.email@example.com"
```

Remplacez avec vos informations réelles. Exemple :
```
git config --global user.name "Ahmed Moutaa"
git config --global user.email "ahmed@emsi.ma"
```

### Vérifier que tout est installé :

Tapez cette commande pour vérifier :
```
git --version
```

Si vous voyez un numéro de version, bravo ! Git est bien installé.

---

## 5. Les commandes Git essentielles

Voici les commandes les plus importantes que vous utiliserez régulièrement.

### Commandes de base :

#### `git clone [URL]`
**Qu'est-ce que c'est ?** Télécharge un dépôt complet de GitHub sur votre ordinateur.

**Quand l'utiliser ?** Quand vous voulez travailler sur un projet pour la première fois.

**Exemple :**
```
git clone git@github.com:hm43/developpement_web.git
```

#### `git status`
**Qu'est-ce que c'est ?** Montre les fichiers que vous avez modifiés et ceux qui sont prêts à être envoyés.

**Quand l'utiliser ?** Avant chaque commit, pour voir ce que vous avez changé.

**Exemple :**
```
git status
```

**Résultat possible :**
```
On branch main
Changes not staged for commit:
  modified: README.md
  modified: index.html
```

#### `git add .` ou `git add [nom-du-fichier]` 

**Qu'est-ce que c'est ?** Prépare tous les fichiers (ou un fichier) pour la sauvegarde.

**Quand l'utiliser ?** Après avoir modifié des fichiers et avant de faire un commit.

**Exemples :**
```
git add README.md           # Ajouter un fichier spécifique
git add .                   # Ajouter tous les fichiers modifiés
```

#### `git commit -m "message"`
**Qu'est-ce que c'est ?** Sauvegarde les changements localement avec une description.

**Quand l'utiliser ?** Après avoir ajouté les fichiers avec `git add`.

**Important !** Le message doit être court et descriptif.

**Exemples :**
```
git commit -m "Ajouter le titre au README"
git commit -m "Corriger la fonction de calcul dans index.js"
git commit -m "Mettre à jour les styles CSS"
```

#### `git push`
**Qu'est-ce que c'est ?** Envoie vos changements locaux vers GitHub.

**Quand l'utiliser ?** Après un commit, pour partager votre travail en ligne.

**Exemple :**
```
git push
```

#### `git pull`
**Qu'est-ce que c'est ?** Télécharge les derniers changements depuis GitHub vers votre ordinateur.

**Quand l'utiliser ?** Avant de commencer à travailler, pour synchroniser votre copie locale.

**Exemple :**
```
git pull
```

---

## 6. Scénarios pratiques étape par étape

Voici des situations réelles que vous rencontrerez et comment les gérer.

### Scénario 1 : Démarrer un nouveau projet et envoyer votre code

C'est votre premier projet. Vous l'avez créé sur GitHub, et vous voulez commencer à y ajouter du code.

**Etape 1: Créer un fichier index.html avec VS Code**

Vous allez créer votre premier fichier. C'est important de ne pas modifier le README car vous l'utiliserez plus tard comme fichier de documentation et de suivi pour le contrôle.

**Etape 2: Ouvrez le dossier du projet dans VS Code :**
1. Ouvrez VS Code
2. Cliquez sur **File** → **Open Folder**
3. Sélectionnez le dossier `nom-du-projet` que vous avez cloner
4. Cliquez sur **Select Folder**

**Etape 3: Créez un nouveau fichier :**
1. Dans le panneau Explorer (à gauche), cliquez sur l'icône **New File** (feuille avec un +)
2. Nommez le fichier `index.html` et appuyez sur Entrée

**Etape 4: Ajoutez du contenu HTML :**
Maintenant, tapez ce contenu dans votre fichier `index.html` :

```html
<!DOCTYPE html>
<html>
<head>
    <title>Mon Projet</title>
</head>
<body>
    <h1>Bienvenue sur mon projet !</h1>
    <p>Ceci est mon premier projet avec Git et GitHub.</p>
</body>
</html>
```

Quand vous tapez, vous verrez un **point blanc** à côté du nom du fichier dans l'onglet - cela signifie que le fichier a des changements non sauvegardés.

**Etape 5: Sauvegardez le fichier :**
Appuyez sur **Ctrl+S** (Windows/Linux) ou **Cmd+S** (Mac) pour sauvegarder.

Le point blanc disparaît, et VS Code indique que le fichier est sauvegardé (ou de préference d'utiliser l'auto save).

**Etape 6: Vérifier les changements**

En utilisant le menu principal, vous pouvez ouvrir le `Terminal` en allant dans le menu en haut de la fenêtre de VS Code :

Cliquez sur Terminal dans la barre de menu.

Sélectionnez Nouveau Terminal (ou New Terminal).

```
git status
```

Vous devriez voir `index.html` listé comme "untracked" (non suivi).

**Etape 7: Ajouter les fichiers**

```
git add .
```

Le point `.` signifie "tous les fichiers".

**Etape 8:  Vérifier à nouveau**

```
git status
```

Maintenant, votre fichier devrait être en vert, prêt à être commit.

**Etape 9:  Sauvegarder avec un message**

```
git commit -m "Ajouter la page HTML de démarrage du projet"
```

**Etape 10:  Envoyer sur GitHub**

```
git push
```

## Résultat

Allez sur GitHub.com, rafraîchissez votre page, et vous verrez votre fichier `index.html` en ligne ! 🎉

**Important :** Votre fichier README reste intact pour que vous puissiez l'utiliser ultérieurement comme documentation du projet.

---

## Conseil rapide sur VS Code

- **Explorer** (à gauche) : Voir tous vos fichiers
- **Terminal intégré** (Ctrl+`) : Taper vos commandes Git sans quitter VS Code
- **Source Control** (icône en forme de branche) : Voir vos changements Git directement dans l'interface
- **Ctrl+S** : Sauvegarder rapidement vos fichiers

---

### Scénario 2 : Modifier un fichier et l'envoyer

Vous avez déjà clonné un projet, et maintenant vous voulez y apporter des modifications.

**Étape 1 : Faire un pull pour avoir la dernière version**

```
git pull
```

Ceci télécharge tous les changements récents (si quelqu'un d'autre a modifié le projet).

**Étape 2 : Modifier le fichier**

Ouvrez le fichier avec votre éditeur de texte (VS Code, Sublime Text, etc.) et faites vos changements.

Exemple : Vous modifiez le fichier `main.js` pour ajouter une nouvelle fonction.

**Étape 3 : Vérifier les modifications**

```
git status
```

Vous verrez quelque chose comme :
```
modified: main.js
```

**Étape 4 : Ajouter le fichier**

```
git add main.js
```

Ou si vous avez modifié plusieurs fichiers :
```
git add .
```

**Étape 5 : Commit**

```
git commit -m "Ajouter la fonction de calcul à main.js"
```

**Étape 6 : Push**

```
git push
```

**Résultat :** Votre changement est maintenant sur GitHub. Si vous regardez le fichier en ligne, vous verrez votre modification ! 📝

---

### Scénario 3 : Travailler en équipe avec des changements conflictuels

Vous et un camarade modifiez le même fichier. Git détecte le conflit.

**Étape 1 : Vous faites vos modifications locales**

Vous modifiez le fichier `README.md`.

```
git add README.md
git commit -m "Ajouter mon nom à la liste des auteurs"
```

**Étape 2 : Vous tentez de push**

```
git push
```

**Problème !** GitHub refuse car votre camarade a aussi modifié le même fichier. Le message d'erreur ressemble à :
```
error: failed to push some refs to 'origin'
```

**Étape 3 : Faire un pull**

```
git pull
```

Git télécharge les changements de votre camarade et essaie de les fusionner automatiquement.

**Étape 4 : Résoudre le conflit**

Si Git ne peut pas fusionner automatiquement, vous verrez des sections comme :

```
<<<<<<< HEAD
Mon texte
=======
Le texte de mon camarade
>>>>>>> branche-distante
```

Décidez ensemble quel texte garder, supprimez les marqueurs de conflit, puis :

```
git add README.md
git commit -m "Résoudre le conflit de fusion"
git push
```

**Conseil :** Pour éviter les conflits, communiquez avec vos camarades ! Travaillez sur des fichiers différents si possible.

---

### Scénario 4 : Revoir votre historique de commits

Vous voulez voir tous les changements que vous avez faits précédemment.

```
git log
```

Vous verrez quelque chose comme :
```
commit a1b2c3d4 (HEAD -> main)
Author: Ahmed Moutaouakil <ahmed@example.com>
Date: Mon Dec 8 12:00:00 2025 +0100
    Ajouter la fonction de calcul à main.js

commit e5f6g7h8
Author: Ahmed Moutaouakil <ahmed@example.com>
Date: Sun Dec 7 14:30:00 2025 +0100
    Initialiser le projet avec README et fichiers
```

Chaque ligne montre un changement que vous avez sauvegardé. Le texte `commit a1b2c3d4` est l'identifiant unique de ce changement.

**Pour voir les changements d'un commit spécifique :**
```
git show a1b2c3d4
```

---

## Résumé du flux de travail quotidien

Pour résumer, voici la routine que vous utiliserez chaque jour :

1. **Avant de travailler :** `git pull` (télécharger les derniers changements)
2. **Pendant que vous travaillez :** Modifiez vos fichiers avec votre éditeur
3. **Après avoir modifié :** 
   - `git status` (vérifier ce qui a changé)
   - `git add .` (préparer les fichiers)
   - `git commit -m "Description du changement"` (sauvegarder localement)
   - `git push` (envoyer sur GitHub)

**C'est tout !** Avec ces commandes, vous maîtrisez 95% de ce que vous ferez avec Git et GitHub.

---

## Conseils pour bien démarrer

- **Faites des commits réguliers :** Ne pas attendre d'avoir des centaines de changements. Un commit par petite tâche, c'est mieux !
- **Écrivez des messages clairs :** `"Ajouter la barre de navigation"` est mieux que `"modifs"`.
- **Utilisez `git pull` au début de chaque session :** Cela évite les conflits.
- **En cas d'erreur :** Ne paniquez pas ! Git garde un historique complet. Cherchez l'erreur ou demandez à votre professeur.
- **Consultez GitHub Docs :** https://docs.github.com/ est votre meilleur ami !

---

## Questions fréquentes

**Q : Je dois installer Git une seule fois ?**  
R : Oui, une fois Git est installé sur votre ordinateur, vous le conservez. Vous ne devez configurer votre nom/email qu'une fois aussi (avec `--global`).

**Q : Que faire si j'ai accidentellement committé quelque chose que je ne voulais pas ?**  
R : Utilisez `git log` pour trouver le commit, puis cherchez comment l'annuler (c'est possible !). Demandez à votre professeur pour ne pas vous enfoncer plus.

**Q : GitHub est gratuit ?**  
R : Oui, GitHub est entièrement gratuit pour les dépôts publics et privés !

---

Bonne chance dans votre apprentissage ! 🚀