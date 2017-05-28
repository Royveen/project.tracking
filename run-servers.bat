ECHO OFF
start mongod --journal --dbpath C:/data/
cd /d %~dp0
start npm start
