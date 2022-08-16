
//  =========> Question <=========
//  Baseball Game
//  You are keeping score for a baseball game with strange rules. The game consists of several rounds, 
// where the scores of past rounds may affect future rounds' scores.
// At the beginning of the game, you start with an empty record. You are given a list ops, where ops[i] is the ith operation , you must apply to the record and is one of the following:
//  0 An integer x -Record a new score of x.
//  0. "i" -Record a new score that is the sum of previous two scores. it is guaranteed there will always be two previous scores.
//  0. "d" -Record a new score that doubles the previous score. it is guaranteed there will always be a previous scores.
//  0. "c" -Invalidate the previous score, removing it from the previous score. it is guaranteed there will always be a previous score.
//  Return the sum of all the scores on the record
//  Example 1:
//  Input: ops = ["5","2","C","D","i"]
//  Output: 30
// Solve:
//  1. Create a record array, record = [0]
//  2. Loop through ops array
//  3. If ops[i] is an integer, push it to record array
//  4. If ops[i] is "i", push the sum of the last two elements of record array to record array
//  5. If ops[i] is "d", push the last element of record array to record array twice
//  6. If ops[i] is "c", pop the last element of record array
//  7. Return the sum of all the elements of record array
//  8. If ops is empty, return 0
//  9. If ops is not an array, return 0
//  10. If ops is not an array of strings, return 0


//  =========> Solution <=========
function baseballGame(ops) {
    let record = [];
    for (op of ops) {
        console.log(op);
        if(op === '+'){
            console.log(record[Number(record.length) - 1] + record[Number(record.length) - 2]);
        // add the last two elements of record array
        record.push(record[record.length - 1] + record[record.length - 2]);
        }else if (op === "C"){
        // pop the last element of record array
        record.pop();
        } else if (op === "D"){
        // push the last element of record array twice
        record.push(record[record.length - 1] * 2);
        }else {
        // push the ops[i] to record array
        record.push(op);
        }
    }
    console.log(record);
    // return the sum of all the elements of record array
    return record.reduce((a, b) => a + b, 0);
}

//  =========> Test <=========
console.log(baseballGame(["5", "2", "C", "D", "+"])); // 30

