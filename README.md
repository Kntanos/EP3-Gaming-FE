# 'Life of Bernard'

'Life of Bernard' is a simple game that was buillt in 2 weeks as the final team project during the 16-week Software Development Bootcamp at [Makers Academy](https://makers.tech/).

This repository contains the front-end of the project. See [here](https://github.com/Kntanos/EP3-Gaming-BEE) for the back-end.

### Project Team:
- <b>[AJOsmaston](https://github.com/AJOsmaston)</b>
- <b>[Bernardleanse](https://github.com/bernardleanse)</b>
- <b>[Jtc27](https://github.com/jtc27)</b>
- <b>[Kntanos](https://github.com/Kntanos)</b>
- <b>[Marazzo](https://github.com/marazzo)</b>
- <b>[Serenabertozzi](https://github.com/serenabertozzi)</b>

<br>Deployed at [https://life-of-bernard.herokuapp.com/](https://life-of-bernard.herokuapp.com/) 

## Approach
We decided to use the **MERN stack** (MongoDB, Express Js, React, Node Js) for the development of the project, even though it is not necessariy an obvious choice. None of us had prior experience with the technologies involved, so the primamry objective was to learn and implement at the same time. 

The front-end of the application is developed with React.
The styling was done using MaterialUI.
The front-end makes calls to the back-end API that holds the logic of the game and saves user accounts and scores to the database.

Throughout the project we followed Agile practices, morning standups, evening retros and assigned a rotating scrum master. We managed communication with a Trello board and PRs required at least 2 reviews, before approval and merging. 

## The Game
Bernard is embarking on his quest to become a junior software developer and has to fight against the 'monsters' he encounters.

Users have to register with a unique username and password, so the table of highscores can be maintained.

The game requires fast reflexes.The aim is to attack the monster as many times as possible before the timer counts down to zero or Bernard loses all his HP points. The more hits Bernard lands the higher the score. However, occasionally a sign 'Don't Attack' appears between Bernard and the monster, during which time, the player must stop attacking or otherwise Bernards HP suffers heavy loses.

<img src="LoB.gif" width="400px">
