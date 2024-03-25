function superbowlWin(superbowls) {
    const winningGame = superbowls.find(game => game.result === "W");
   
    if (winningGame) {
        return winningGame.year;
    } else {
     
        return undefined;
    }
}


const superbowls = [
    { year: 1999, result: "W" },
    { year: 2003, result: "L" },
    { year: 2007, result: "L" },
    { year: 2011, result: "W" }
];

console.log(superbowlWin(superbowls)); 











