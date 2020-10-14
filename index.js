import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

//Task 1
//Prepare
const finalTwentyFourteen = fifaData.filter(match => match.Stage === "Final" && match.Year === 2014
)

//a
console.log(finalTwentyFourteen[0]['Home Team Name']);

//b

console.log(finalTwentyFourteen[0]['Away Team Name']);

//c
console.log(finalTwentyFourteen[0]['Home Team Goals']);

//d
console.log(finalTwentyFourteen[0]['Away Team Goals']);

//e
console.log(finalTwentyFourteen[0]["Win conditions"]);



/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {    
    const finalsArray = data.filter(function(match) {
        return match.Stage === "Final"
    })
    return finalsArray;
};

console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears (cb, data){
    const yearsArr = cb(data).map(function(final){
        return final.Year;
    })
    return yearsArr;
}
console.log(getYears(getFinals, fifaData));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(cb, data) {
    const winnersArr = cb(data).map(
        function(final){
            if( final["Home Team Goals"]>final["Away Team Goals"]){
                return final["Home Team Name"]
            }else{
                return final["Away Team Name"]
            }
        }
    )
    return winnersArr;
}

console.log(getWinners(getFinals, fifaData));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(cb1, cb2, data) {
   const Arr3 = getFinals(data);
    for (let i =0; i<Arr3.length; i++) {
        console.log(`In ${cb1(getFinals,fifaData)[i]} ${cb2(getFinals, fifaData)[i]} won the world cup!`);
    };


    // const yearsArr = getYears(getFinals, fifaData)
    // const winnerArr = getWinners(getFinals, fifaData);
    // //Create an object with year and winner
    // console.log(yearsArr);
    // console.log(winnerArr);
    
};

getWinnersByYear(getYears, getWinners, fifaData);

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    const numOfMatches = data.length
    console.log (numOfMatches);
    const totalHomeGoals = data.reduce(function(acc, item){
        return acc + item["Home Team Goals"]}, 0)
    console.log(totalHomeGoals)
    const avHomeGoals = totalHomeGoals/numOfMatches;
    console.log(avHomeGoals);
    const totalAwayGoals = data.reduce(function(acc, item){
        return acc + item["Away Team Goals"]}, 0)
    console.log(totalAwayGoals)
    const avAwayGoals = totalAwayGoals/numOfMatches;
    console.log(avAwayGoals);
};

getAverageGoals(fifaData);

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
