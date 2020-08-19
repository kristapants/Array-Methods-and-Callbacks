import { fifaData } from './fifa.js';
// console.log(fifaData);

// console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */


function filterGames(allGames, searchTermPairs) {
    Object.keys(searchTermPairs).forEach(function(key) {
      allGames = allGames.filter(function(oneGame) {
        return oneGame[key] === searchTermPairs[key]
      });
    });
    return allGames;
  }

function answerKey(allGames, searchTermPairs, resultKey) {
    const allFilteredGames = filterGames(allGames, searchTermPairs);
    return allFilteredGames.map(function(item){
       return item[resultKey];
    });
}

function whoWon (allGames, searchTermPairs) {
    const allFilteredGames = filterGames(allGames, searchTermPairs);
    if (allFilteredGames[0]["Home Team Goals"] > allFilteredGames[0]["Away Team Goals"]) {
        return `${allFilteredGames[0]["Home Team Name"]} was the winner`
    } else if (allFilteredGames[0]["Home Team Goals"] < allFilteredGames[0]["Away Team Goals"]) {
        return `${allFilteredGames[0]["Away Team Name"]} was the winner`
    } else {
        return `${allFilteredGames[0]["Win conditions"]}`
    }
}


// /*a*/
// console.log(answerKey(fifaData, {"Year": 2014, "Stage": "Final"}, "Home Team Name"));

// /*b*/
// console.log(answerKey(fifaData, {"Year": 2014, "Stage": "Final"}, "Away Team Name"));

// /*c*/
// console.log(answerKey(fifaData, {"Year": 2014, "Stage": "Final"}, "Home Team Goals"));

// /*d*/
// console.log(answerKey(fifaData, {"Year": 2014, "Stage": "Final"}, "Away Team Goals"));

// /*e*/
// console.log(whoWon(fifaData, {"Year": 2014, "Stage": "Final"}));








/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    const allFinals = data.filter(function(item) {
        return item["Stage"] === "Final";
    });
    return allFinals;
};
//console.log(getFinals(fifaData));





/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(cbFinals, data) {
    let years = cbFinals(data).map(function(x){
        return x["Year"];
    });
    return years;
};
// console.log(getYears(getFinals, fifaData));







/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(cbFinals, data) {
    const finals = cbFinals(data);
    let winners = finals.map(function(item) {
        let winner;
        if (item["Home Team Goals"] > item["Away Team Goals"]) {
            winner = item["Home Team Name"];
        } else if (item["Home Team Goals"] < item["Away Team Goals"]) {
            winner = item["Away Team Name"];
        } else {
            winner = "it was complicated who";
        }
        return winner;
    });
    return winners;
}

// console.log(getWinners(getFinals, fifaData));






/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
//  */

function getWinnersByYear(cbFinals,cbWinners, cbYears, data) {
    let winners = cbWinners(cbFinals,data);
    let years = cbYears(cbFinals,data);
    let winnerStatement = [];
    for (let i = 0; i < winners.length; i++){
        winnerStatement.push(`In ${years[i]}, ${winners[i]} won the world cup!`);
    } 
    return winnerStatement;
}

// console.log(getWinnersByYear(getFinals, getWinners, getYears, fifaData));





/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    const homeGoals = data.reduce(function(accum, item){
        return accum + item["Home Team Goals"];
    },0);
    const awayGoals = data.reduce(function(accum, item){ 
        return accum + item["Away Team Goals"];
    },0);
    return {"Home Goal Average": (homeGoals/data.length), "Away Goal Average": (awayGoals/data.length)};
}

// console.log(getAverageGoals(fifaData));




/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
