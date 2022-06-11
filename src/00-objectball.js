function gameObject(){
    const gameObj = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    "Number": 0,
                    "Shoe": 16,
                    "Points": 22,
                    "Rebounds": 12,
                    "Assists": 12,
                    "Steals": 3,
                    "Blcoks": 1,
                    "Slam Dunks": 1
                },
                "Reggie Evans": {
                    "Number": 30,
                    "Shoe": 14,
                    "Points": 12,
                    "Rebounds": 12,
                    "Assists": 12,
                    "Steals": 12,
                    "Blcoks": 12,
                    "Slam Dunks": 7
                },
                "Brook Lopez": {
                    "Number": 11,
                    "Shoe": 17,
                    "Points": 17,
                    "Rebounds": 19,
                    "Assists": 10,
                    "Steals": 3,
                    "Blcoks": 1,
                    "Slam Dunks": 15
                },
                "Plumlee": {
                    "Number": 1,
                    "Shoe": 19,
                    "Points": 26,
                    "Rebounds": 12,
                    "Assists": 6,
                    "Steals": 3,
                    "Blcoks": 8,
                    "Slam Dunks": 5
                },
                "Terry": {
                    "Number": 31,
                    "Shoe": 15,
                    "Points": 19,
                    "Rebounds": 2,
                    "Assists": 1,
                    "Steals": 4,
                    "Blcoks": 11,
                    "Slam Dunks": 1
                },
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    "Number": 4,
                    "Shoe": 18,
                    "Points": 10,
                    "Rebounds": 1,
                    "Assists": 1,
                    "Steals": 2,
                    "Blcoks": 1,
                    "Slam Dunks": 7
                },
                "Bismak Biyombo": {
                    "Number": 0,
                    "Shoe": 16,
                    "Points": 12,
                    "Rebounds": 4,
                    "Assists": 7,
                    "Steals": 7,
                    "Blcoks": 15,
                    "Slam Dunks": 10
                },
                "DeSagna Diop": {
                    "Number": 2,
                    "Shoe": 14,
                    "Points": 24,
                    "Rebounds": 12,
                    "Assists": 12,
                    "Steals": 4,
                    "Blcoks": 5,
                    "Slam Dunks": 5
                },
                "Ben Gordon": {
                    "Number": 8,
                    "Shoe": 15,
                    "Points": 33,
                    "Rebounds": 3,
                    "Assists": 2,
                    "Steals": 1,
                    "Blcoks": 1,
                    "Slam Dunks": 0
                },
                "Brendan Haywood": {
                    "Number": 33,
                    "Shoe": 15,
                    "Points": 6,
                    "Rebounds": 12,
                    "Assists": 12,
                    "Steals": 22,
                    "Blcoks": 5,
                    "Slam Dunks": 12
                },
            }
        }
    }
    return gameObj;
}

// function numPointsScored(playerName){
//     let game = gameObject();
//     for(let gameKey in game){
//         debugger;
//         let teamObj = game[gameKey];
//         console.log(teamObj);
//         for(let teamKey in teamObj){
//             debugger;
//             let playerObj = teamObj.players;
//             console.log(playerObj);
//             for(let playerKey in playerObj){
//                 debugger;
//                 if(playerKey === playerName){
//                     return playerObj[playerName]["Points"];
//                 }
//             }
//         }
//     }
// }

// function showSize(playerName){
//     let game = gameObject();
//     for(let gameKey in game){
//         debugger;
//         let teamObj = game[gameKey];
        //console.log(teamObj);
        // for(let teamKey in teamObj){
        //     debugger;
        //     let playerObj = teamObj.players;
            //console.log(playerObj);
//             for(let playerKey in playerObj){
//                 debugger;
//                 if(playerKey === playerName){
//                     return playerObj[playerName]["Shoe"];
//                 }
//             }
//         }
//     }
// }

// function teamColors(nameTeam){
//     let game = gameObject();
//     if(game["home"]["teamName"] === nameTeam) {
//         return game["home"]["colors"];
//     } else if(game["away"]["teamName"] === nameTeam) {
//         return game["away"]["colors"];
//     } else {
//         console.log("Sorry, not available.");
//     }
// }

// function teamNames(){
//     let game = gameObject();
//     let teamArray = [];
//     for(let gameKey in game){
//         debugger;
//         let teamObj = game[gameKey];
//         teamArray.push(teamObj["teamName"]);
//     }
//     return teamArray;
// }

// function playerNumbers(nameTeam){
//     let game = gameObject();
//     let numberArray = [];
//     if(game["home"]["teamName"] === nameTeam){
//         debugger;
//         let homeObj = game.home;
//         let playersObj = homeObj.players;
//         for(let playerName in playersObj){
//             debugger;
//             numberArray.push(playersObj[playerName]["Number"]);
//         }
//     } else if (game["away"]["teamName"] === nameTeam){
//         debugger;
//         let awayObj = game.away;
//         let playersObj = awayObj.players;
//         for(let playerName in playersObj){
//             debugger;
//             numberArray.push(playersObj[playerName]["Number"]);
//         }
//     } else{
//         numberArray.push("Sorry, team not available.");
//     }
//     return numberArray;
// }

// function playerStats(namePlayer){
//     let game = gameObject();
//     for(let gameKey in game){
//         debugger;
//         let teamObj = game[gameKey];
        //console.log(teamObj);
        // for(let teamKey in teamObj){
        //     debugger;
        //     let playersObj = teamObj.players;
            //console.log(playersObj);
//             for(let playersKey in playersObj){
//                 debugger;
//                 if(playersKey === namePlayer){
//                     return playersObj[namePlayer];
//                 }
//             }
//         }
//     }
// }

// function bigShoeRebounds(){
//     let game = gameObject();
//         for(let gameKey in game){
//             debugger;
//             let teamObj = game[gameKey];
//             for(let teamKeys in teamObj){
//             debugger;
//             let playerObj = teamObj.players;
//             for(let playerKey in playerObj){
//                 debugger;
//                 if(playerKey === "Plumlee"){
//                     return playerObj[playerKey]["Rebounds"];
//                 }
//             }
//         }
//     }
// }

// function mostPointsScored(){
//     let game = gameObject();
//         for(let gameKey in game){
//             debugger;
//             let teamObj = game[gameKey];
//             for(let teamKeys in teamObj){
//             debugger;
//             let playerObj = teamObj.players;
//             for(let playerKey in playerObj){
//                 debugger;
//                 let statKey = playerObj[playerKey];
//                 if(statKey["Points"] === 33){
//                     return playerKey;
//                 }
//             }
//         }
//     }
// }

//function winningTeam(){
//    let game = gameObject()
//    let homePoints = game["home"]["players"]["Alan Anderson"]["Points"] + game["home"]["players"]["Reggie Evans"]["Points"] + game["home"]["players"]["Brook Lopez"]["Points"] + game["home"]["players"]["Plumlee"]["Points"] + game["home"]["players"]["Terry"]["Points"];
//    let awayPoints = game["away"]["players"]["Jeff Adrien"]["Points"] + game["away"]["players"]["Bismak Biyombo"]["Points"] + game["away"]["players"]["DeSagna Diop"]["Points"] + game["away"]["players"]["Ben Gordon"]["Points"] + game["away"]["players"]["Brendan Haywood"]["Points"];
//    if(homePoints > awayPoints){
//        return game["home"]["teamName"];
//    } else if(homePoints < awayPoints){
//        return game["away"]["teamName"];
//    } else{
//        return console.log("N/A");
//    }
//}

// function winningTeam(){
//     let game = gameObject();
//     let homeTeamPoints = [];
//     let awayTeamPoints = [];
//     let homePlayerObj = game.home.players;
//     let awayPlayerObj = game.away.players;

//     for(let homePlayerKey in homePlayerObj){
//         debugger; 

//         let dataObj = homePlayerObj[homePlayerKey];
//         for(let dataKey in dataObj){
//             debugger;

//             if(dataKey === "Points"){
//                 homeTeamPoints.push(dataObj["Points"]);
//             }
//         }
//     }
 
//     for(let awayPlayerKey in awayPlayerObj){
//         debugger; 

//         let dataObj = awayPlayerObj[awayPlayerKey];
//         for(let dataKey in dataObj){
//             debugger;

//             if(dataKey === "Points"){
//                 awayTeamPoints.push(dataObj["Points"]);
//             }
//         }
//     }

//     const homeTeamTotalPoints = homeTeamPoints.reduce(function(addition, element){return element + addition}, 0);

//     const awayTeamTotalPoints = awayTeamPoints.reduce(function(addition, element){return element + addition}, 0);

//     if(homeTeamTotalPoints > awayTeamTotalPoints){
//         return game.home.teamName;
//     } else if(homeTeamTotalPoints < awayTeamTotalPoints){
//         return game.away.teamName;
//     } else{
//         let results = "N/A";
//         return results;
//     }

// }

// function playerWithLongestName(){
//     let game = gameObject()
//     let homeArray = Object.keys(game.home.players);
//     let awayArray = Object.keys(game.away.players);
//     let teamArray = homeArray.concat(awayArray);
//     let longestName = teamArray.filter(function(element){
//         if(element.length >= 15){
//             return element;
//         }
//     });
//     return longestName;
// }

// function doesLongNameStealATon(){
    
// }

//console.log(numPointsScored("Plumlee"));
//console.log(showSize("Bismak Biyombo"));
//console.log(teamColors("Charlotte Hornets"));
//console.log(teamNames());
//console.log(playerNumbers("Brooklyn Nets"));
//console.log(playerStats("Ben Gordon"));
//console.log(bigShoeRebounds());
//console.log(mostPointsScored());
//console.log(winningTeam());
//console.log(playerWithLongestName());
//console.log(doesLongNameStealATon());

///////////////////////////////////////////////////////////////////////////

function homeTeam(){
   return gameObject().home
}

function awayTeam(){
   return gameObject().away
}

function teamName(team){
   return team.teamName
}

function teamColor(team){
   return team.colors
}

function teamPlayers(team){
   return team.players
}

function players(homeTeam, awayTeam){
   let homePlayers = Object.entries(homeTeam.players)
   let awayPlayers = Object.entries(awayTeam.players)
   let players = homePlayers.concat(awayPlayers)

   return players
}

//////////////////////////////////////////////////////////////////////////

function numPointsScored(player){
   let allPlayers = players(homeTeam(), awayTeam())

   let foundPlayer = allPlayers.find(function(f){
       if(player === f[0]){

           return f
       }

   })

   return foundPlayer[1].Points
}

function shoeSize(player){
   let allPlayers = players(homeTeam(), awayTeam())

   let foundPlayer = allPlayers.find(function(f){
       if(player === f[0]){

           return f
       }

   })

   return foundPlayer[1].Shoe
}

function teamColors(team){
   if(teamName(homeTeam()) === team){
       return teamColor(homeTeam())

   } else if(teamName(awayTeam()) === team){
       return teamColor(awayTeam())

   } else {
       return "Sorry, not available."
   }

}

function teamNames(){
    let teams =[]

   let home = teamName(homeTeam())
   let away = teamName(awayTeam())

   teams.push(home);
   teams.push(away);

   return teams
}

function playerNumbers(team){
  let jerseyNumbers = []

   if(teamName(homeTeam()) === team){
       let players = Object.entries(teamPlayers(homeTeam()))

       players.forEach(Element => jerseyNumbers.push(Element[1].Number))

   }else if(teamName(awayTeam()) === team){
       let players = Object.entries(teamPlayers(awayTeam()))

       players.forEach(Element => jerseyNumbers.push(Element[1].Number))

   }else{
       return "Sorry, team not available."

   }

   return jerseyNumbers
}

function playerStats(player){
   let allPlayers = players(homeTeam(), awayTeam())

   let foundPlayer = allPlayers.find(function(f){
       if(player === f[0]){

           return f
       }

   })

   return foundPlayer[1]
}

function bigShoeRebounds(){
    let allPlayers = players(homeTeam(), awayTeam())

    let foundPlayer = allPlayers.find(function(f){
        if(f[1].Shoe > 18){
            return f
        }
    })

    return foundPlayer[1].Rebounds
}

function mostPointsScored(){
    let allPlayers = players(homeTeam(), awayTeam())

    let foundPlayer = allPlayers.find(function(f){
        if(f[1].Points > 32){
            return f
        }
    })

    return foundPlayer[0]
}

function winningTeam(){
    let homePoints = []
    let awayPoints = []

    let homePlayers = Object.entries(teamPlayers(homeTeam()))

    homePlayers.forEach(Element => homePoints.push(Element[1].Points))

    let homePointsTotal = homePoints.reduce((p, c) => p + c, 0)

    let awayPlayers = Object.entries(teamPlayers(awayTeam()))

    awayPlayers.forEach(Element => awayPoints.push(Element[1].Points))

    let awayPointsTotal = awayPoints.reduce((p, c) => p + c, 0)

    if(homePointsTotal > awayPointsTotal){
        return teamName(homeTeam())

    } else if(homePointsTotal < awayPointsTotal){
        return teamName(awayTeam())

    } else{
        return `N/A`

    }
}

function playerWithLongestName(){
    let allPlayers = players(homeTeam(), awayTeam())

    let longestName = allPlayers.filter(function(a){
        if(a[0].length > 14){
            return a

        }

    })

    return longestName[0][0]
}

function doesLongNameStealATon(){
    let allPlayers = players(homeTeam(), awayTeam())

    let longestName = allPlayers.filter(function(a){
        if(a[0].length > 14){
            return a

        }

    })

    let longestNameSteals = longestName[0][1].Steals

    let playerSteals = allPlayers.map(function(a){
        return a[1].Steals
    })

    let answer = playerSteals.map(function(p){
        if(p <= longestNameSteals){
            return true
        } else {
            return false
        }
    })

    return answer[0]
}