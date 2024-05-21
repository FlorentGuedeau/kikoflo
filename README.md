# kikoflo
Outils utiles pour commencer un nouveau projet web avec Grunt (Node.js) :
* Compilation Sass : https://github.com/gruntjs/grunt-contrib-sass
* Auto prefixer : https://github.com/postcss/autoprefixer
* Minifier de CSS :  https://github.com/gruntjs/grunt-contrib-cssmin
* Minifier d'images : https://github.com/gruntjs/grunt-contrib-imagemin
* Réordination automatique des déclarations CSS : https://github.com/csscomb/grunt-csscomb
* Conversion des REM en PX : https://github.com/lohmander/grunt-rem-to-px
* Auto compilation : https://github.com/gruntjs/grunt-contrib-watch


## Installation
Utiliser le fichier batch `kikogo.bat` ou directement les lignes de commande :  

    npm install      
    nodevars 
    grunt
    
   
Pour vérifier si les node_modules sont à jour : https://www.npmjs.com/package/npm-check/

    npm-check -u


## @include Sass
* Compass : http://compass-style.org/
* normalize-scss : https://github.com/JohnAlbin/normalize-scss
* breakpoint : https://github.com/lolmaus/breakpoint-slicer
* _[option]_ toolkit : https://github.com/at-import/toolkit

* gem install normalize-scss breakpoint breakpoint-slicer


## A faire
- [ ] Une page html type : headings, liste, citation, tableau, formulaire, etc.
- [ ] Mettre en place un réseau local pour le LiveReload
- [x] Une installation et un lancement automatique => kikogo.bat


## ATTENTION, pour fonctionner il faut les versions suivantes de :
* SASS : 3.4.25
* Compass : 1.0.3

gem install sass -v 3.4.25
