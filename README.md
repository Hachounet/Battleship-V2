# Template

This repo serve as Battleship Project for The Odin Project. 
This is finished project even if a lot of work could be done as refactoring and adding new features like 2 human players. 

This app is made with a MVC look-a-like model where Controller is App brain. Not perfect but still viable, could have been probably optimized.

To keep it simple, here is the architecture of this app : 
index.js call Controller
Controller call Player, Render, General-Render 
Player call Gameboard, AI
Gameboard call Ships and Randomize-Helper
AI call Randomize-Helper

Packages installed are :
Jest
ESLint
Prettier
Prettier-ESLint-Config
Webpack
Webpack Dev Serv
