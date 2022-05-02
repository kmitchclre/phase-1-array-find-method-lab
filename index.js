const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
]

// function superbowlWin(year, result) {
//     let win = null
//     for(let item of year) {
//         if(result(item) === '2015') {
//             win = item
//             break;
//         }
//     }
//     return win
// }

function superbowlWin(record) {
    const winningYear = record.find(winResult => winResult.result === "W")
    if(winningYear) {
        return winningYear.year
    }
}



// function superbowlWin(record) {
//     const win = record.find(w => {
//         if(w.result === "W") {
//             return w
//         }
//     })
//     if(win) {
//         return win.year
//     } else {
//         return win
//     }
//