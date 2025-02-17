# R312: Développement Frontend et Intégration

Ce dépôt contient les exercices réalisés pour se familiariser avec l'utilisation de **SASS** et **Tailwind CSS**, deux outils permettant d'optimiser la gestion des styles dans les projets web.

## Technologies utilisées

- **SASS** : Un préprocesseur CSS pour rendre l'écriture du CSS plus dynamique et modulaire.
- **Tailwind CSS** : Un framework CSS utilitaire permettant de styliser directement dans le HTML via des classes prédéfinies.

## Installation

### SASS
1. Installez **SASS** en tant que dépendance de développement :
    ```bash
    npm install sass --save-dev
    ```

2. Pour compiler le fichier SASS, utilisez la commande suivante :
    ```bash
    npm run sass:w
    ```

### Tailwind CSS
1. Installez **Tailwind CSS** en tant que dépendance de développement :
    ```bash
    npm install --save-dev tailwindcss
    ```

2. Pour générer le fichier CSS final, exécutez la commande suivante :
    ```bash
    npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
    ```

## Utilisation

- **SASS** : Le fichier SASS est compilé automatiquement grâce à la commande `npm run sass:w`, ce qui permet de suivre les modifications en temps réel.
- **Tailwind CSS** : Vous pouvez personnaliser vos classes utilitaires directement dans le fichier `input.css`. Le fichier CSS final sera généré dans `dist/output.css`.

---
