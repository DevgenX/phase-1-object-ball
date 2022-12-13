const gameObject = () => {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "Desagna Diop ": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
};

console.log(gameObject());

const homeTeamName = () => {
  let object = gameObject();
  return object.home.teamName;
};

console.log(homeTeamName());

const numPointsScored = (player) => {
  //console.log(player)
  let object = gameObject();
  for (let gameKey in object) {
    let teamObj = object[gameKey];
    // console.log(teamObj)
    for (let teamKey in teamObj) {
      let data = teamObj.players;
      //console.log(data)
      for (let key in data) {
        // let points = data.points // get the points but not working
        if (key === player) {
          return data[player].points;
        }
      }
    }
  }
};

const shoeSize = (player) => {
  let object = gameObject();
  for (let gameKey in object) {
    let teamObj = object[gameKey];
    // console.log(teamObj)
    for (let teamKey in teamObj) {
      let data = teamObj.players;
      //console.log(data)
      for (let key in data) {
        // let points = data.points // get the points but not working
        if (key === player) {
          return data[player].shoe;
        }
      }
    }
  }
};

const teamColors = (team) => {
  // console.log(teams)
  let object = gameObject();
  for (let gameKey in object) {
    let teamObj = object[gameKey];
    //console.log(teamObj)
    for (let teamKey in teamObj) {
      let data = teamObj.teamName;
      if (data === team) {
        return teamObj.colors;
      }
    }
  }
};

console.log(teamColors("Charlotte Hornets"));

const teamNames = () => {
  let teamArray = [];
  let object = gameObject();

  for (let game in object) {
    let properties = object[game].teamName;
    teamArray.push(properties);
  }
  return teamArray;
};

console.log(teamNames());

const playerNumbers = (team) => {
  let numArray = [];
  let object = gameObject();

  for (let game in object) {
    let teamObj = object[game];
    for (let teamKey in teamObj) {
      let teamProfile = teamObj.players;
      //console.log(teamObj.teamName)
      for (let key in teamProfile) {
        let jerseyNum = teamProfile[key].number;
        if (teamObj.teamName === team) numArray.push(jerseyNum);
      }
      return numArray;
    }
  }
};

console.log(playerNumbers("Brooklyn Nets"));

const playerStats = (player) => {
  //console.log(player)
  let object = gameObject();
  for (let gameKey in object) {
    let teamObj = object[gameKey];
    // console.log(teamObj)
    for (let teamKey in teamObj) {
      let data = teamObj.players;
      for (let key in data) {
        // console.log(key)
        // let points = data.points // get the points but not working
        if (key === player) {
          return data[player];
        }
      }
    }
  }
};
console.log(playerStats("Mason Plumlee"));
