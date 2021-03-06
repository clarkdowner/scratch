function main() {
  var n = parseInt(readLine());
  var dictionary = {};
  for (var a0 = 0; a0 < n; a0++) {
    var op_temp = readLine().split(' ');
    var op = op_temp[0];
    var contact = op_temp[1];

    if (op === 'add') {
      //add to dictionary
      var min = Math.min(7, contact.length);
      for (var i = 0; i < min; i++) {
        var currWord = contact.slice(0, i + 1);
        dictionary[currWord] === undefined ? dictionary[currWord] = 1 : dictionary[currWord]++;
      }
    } else {
      //search in dictionary
      dictionary[contact] === undefined ? console.log(0) : console.log(dictionary[contact]);
      //console results
    }
  }
}



// function main() {
//   var n = parseInt(readLine());
//   var prefixTree = {};
//   for(var a0 = 0; a0 < n; a0++){
//     var op_temp = readLine().split(' ');
//     var op = op_temp[0];
//     var contact = op_temp[1];
//     var currNode = prefixTree;

//     if (op === 'add') {
//       // add to prefix tree
//       for (var i = 0; i < contact.length; i++) {
//         var char = contact.charAt(i);
//         currNode[char] === undefined ? currNode[char] = [{}, 1] : currNode[char][1]++;
//         currNode = currNode[char];
//       }

//     } else {
//       // search prefix tree
//       for (var i = 0; i < contact.length; i++) {
//         var char = contact.charAt(i);
//         currNode = currNode[char];
//       }
//       // console results
//       currNode === undefined ? console.log(0) : console.log(currNode[1]);
//     }
//   }
// }


// {[h: {[a: {[c: {}, 1]}, 1]}, 1]}