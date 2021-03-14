/*
An arcade game player wants to climb to the top of the leaderboard and track their ranking. The game uses Dense Ranking, so its leaderboard works like this:

The player with the highest score is ranked number 1 on the leaderboard.
Players who have equal scores receive the same ranking number, and the next player(s) receive the immediately following ranking number.
Example

ranked = [100, 90, 90, 80]
player = [70, 80, 105]

The ranked players will have ranks 1, 2, 2, and 3, respectively. If the player's scores are 70, 80 and 105, their rankings after each game are 4th, 3th and 1st. Return [4, 3, 1].

Input:
7
100 100 50 40 40 20 10
4
5 25 50 120

Output:
6
4
2
1
*/

const ranked = [100, 100, 50, 40, 40, 20, 10];
const player = [5, 25, 50, 120, 3]; // [6, 4, 2, 1, 6]

// const ranked = [100, 90, 90, 80];
// const player = [70, 80, 105]; // [4, 3, 1]

// const ranked = [100, 90, 90, 80, 75, 60];
// const player = [50, 65, 77, 90, 102]; // [6, 5, 4, 2, 1]

console.log(climbingLeaderboard(ranked, player));

function climbingLeaderboard(ranked, player) {
    let trackedRanking = [];
    let uniqueRanked = [...new Set(ranked)];

    player.forEach(element => {
        let indexElement = uniqueRanked.findIndex((a) => element === a)

        if (indexElement < 0) {
            uniqueRanked.push(element);
            uniqueRanked.sort((a, b) => a - b).reverse();
            indexElement = uniqueRanked.findIndex((a) => element === a)
            trackedRanking.push(indexElement + 1);
            uniqueRanked.splice(indexElement,1);
        }else{
            trackedRanking.push(indexElement + 1);
        }
    });

    return trackedRanking;
}