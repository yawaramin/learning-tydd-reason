// Generated by BUCKLESCRIPT VERSION 2.2.2, PLEASE EDIT WITH CARE
'use strict';

var Pervasives = require("bs-platform/lib/js/pervasives.js");

var bob = {
  id: 1,
  name: "Bob"
};

function greet(person) {
  return "Hello, " + (person.name + (" with ID " + Pervasives.string_of_int(person.id)));
}

var jim = {
  id: 2,
  name: "Jim",
  age: 29
};

console.log(greet(jim));

exports.bob = bob;
exports.greet = greet;
exports.jim = jim;
/*  Not a pure module */
