# BankAccount

## Table des Matières pour le BACKEND LARAVEL

- [À propos]
- [Prérequis]
- [Installation]
- [Configuration]
- [Migration de la base de données]
- [Démarrage du serveur de développement]
- [Authentification avec Laravel Sanctum](#authentification-avec-laravel-sanctum)
- [Génération de la documentation API avec Swagger](#génération-de-la-documentation-api-avec-swagger)

## À propos

//Ceci c'est une application MVP (Produit Minimum Viable) pour gerer ses propre finances en utilisan une API en Laravel (framework PHP) et en creant pour chaque route son propre SWAGGER.

## Prérequis

Avant de commencer, assurez-vous d'avoir les outils suivants installés sur votre machine :

- [PHP 8.x](https://www.php.net/downloads)
- [Composer](https://getcomposer.org/download/)
- [MySQL](https://dev.mysql.com/downloads/) ou un autre système de gestion de base de données compatible
- [Git](https://git-scm.com/downloads)

## Installation

1. Clonez le dépôt Git :

   ```terminal
   git clone git@github.com:SalahTazoukanit/BankAccount.git
   cd app-bank-account
   ```

2. Installer composer :

   ```terminal
   composer install
   ```

## Migration de la base de données

1. Lancer la migration de la base de données :

   ```terminal
    php artisan migrate
   ```

2. Lancer le seeder :

````terminal
  php artisan db:seed
  ```

## D2marage du server

1. Commande pour lancer le server :

```terminal
  php artisan serve
  ```

## Génération de la documentation API avec Swagger

1. Commande pour lancer la génération du swagger

```terminal
php artisan l5-swagger:generate
````

# Projet React JS avec Tailwind CSS

Bienvenue dans ce projet React JS qui utilise Tailwind CSS pour la conception de l'interface utilisateur.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants sur votre machine :

- [Node.js](https://nodejs.org/) (version 14 ou supérieure)
- [npm](https://www.npmjs.com/) (généralement installé avec Node.js)
- [Git](https://git-scm.com/) (pour cloner le projet)

## Installation

Suivez les étapes ci-dessous pour installer et exécuter le projet localement.

### 1. Cloner le dépôt

```terminal
git clone https://github.com/ton-username/ton-repo.git
cd ton-repo

```
