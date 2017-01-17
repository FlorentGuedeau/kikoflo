@echo off

echo Bienvenue dans kikoflo !

REM Initialisation de l'environnement
CALL nodevars

REM Installation ou màj des node_modules
CALL npm update

REM Lancement de la compilation et du watch
CALL grunt
