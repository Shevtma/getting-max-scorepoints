const players = [
     {
        id: 1,
        name: "Ivan",
        scorePoints: 4500
     },
    {
        id: 2,
        name: "Petr",
        scorePoints: 3600
    },
    {
        id: 3,
        name: "Vadim",
        scorePoints: 3433
    },
    {
        id: 4,
        name: "Olga",
        scorePoints: 2356
    }
];

let scorePointsArray = players.map((player) => player.scorePoints)
// аналогом является запись:
// let scorePointsArray = []
//for (let player of players){
//    scorePointsArray.push(player.scorePoints)
//}

maxScore = Math.max(...scorePointsArray);
// аналогом является такая запись:
//maxScore = Math.max.apply(null, scorePointsArray)

let playerIndex = players.findIndex((player) => player.scorePoints == maxScore);

console.log(`Найден участник с максимальным количеством баллов: \n${players[playerIndex].id}, ${players[playerIndex].name}, ${players[playerIndex].scorePoints}`)