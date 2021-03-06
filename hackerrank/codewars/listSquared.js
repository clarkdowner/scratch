// Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42. 
// These divisors squared are: 1, 4, 9, 36, 49, 196, 441, 1764. 
// The sum of the squared divisors is 2500 which is 50 * 50, a square!

// Given two integers m, n (1 <= m <= n) we want to find all integers 
// between m and n whose sum of squared divisors is itself a square. 
// 42 is such a number.

// The result will be an array of arrays(in C an array of Pair), 
// each subarray having two elements, first the number whose squared 
// divisors is a square and then the sum of the squared divisors.


// Examples:
// list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
// list_squared(42, 250) --> [[42, 2500], [246, 84100]]

function listSquared(m, n) {
  var pairs = [];

  function isPair(num) {
    if (num === 1) {
      return 1;
    }

    var sqRoot = Math.sqrt(num);
    var divisors = [1, num];

    if (Math.floor(sqRoot) === sqRoot) {
      divisors.push(sqRoot);
    }

    for (var i = 2; i < sqRoot; i++) {
      if (num % i === 0) {
        divisors.push(i);
        divisors.push(num / i);
      }
    }

    var divisorSum = 0;
    for (var i = 0; i < divisors.length; i++) {
      divisorSum += Math.pow(divisors[i], 2);
    }

    return Math.floor(Math.sqrt(divisorSum)) === Math.sqrt(divisorSum) ? divisorSum : 0;
  }

  function addPair(a, b) {
    pairs.push([a, b]);
  }

  for (var i = m; i <= n; i++) {
    pairVal = isPair(i);
    if (pairVal !== 0) {
      addPair(i, pairVal);
    }
  }

  return pairs;
}

console.log(listSquared(1,250));