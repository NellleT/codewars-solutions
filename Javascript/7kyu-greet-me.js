// Codewars: Greet Me
// 7 kyu: https://www.codewars.com/kata/535474308bb336c9980006f2

var greet = function(name) {
    return `Hello ${name.charAt(0).toUpperCase() + name.toLowerCase().slice(1)}!`
  };