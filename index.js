const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

// Write a function called superbowlWin() in index.js:

// The function should receive 1 argument, an Array of JavaScript Objects
// Each object has two properties: year and result
// It should use find() to test each Object to see if the result is "W" — a win!
// It should return the year when the win occurred (if it occurred at all!)
// If no win is found, it should return, sadly, undefined

function superbowlWin (record) {
    let theyWon = record.find((element) => element.result ==="W");
    return !!theyWon ? theyWon.year : undefined;
}


// OFFICIAL SOLUTION: 

// // superbowlWin = (record) => {
//   const result = record.find( record => record.result === "W" );
//   return !!result ? result.year : undefined;

// ALINA'S SOLUTION: 

// function superbowlWin(records) {
//     let win = records.find((element) => element.result === “W”);
//     if (win) return win.year;
//     else return undefined;
//   }
//   superbowlWin(record);