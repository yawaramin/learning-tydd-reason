// Generated by BUCKLESCRIPT VERSION 2.2.2, PLEASE EDIT WITH CARE
'use strict';

var Ch05_CrmPerson$LearningTyddReason = require("./Ch05_CrmPerson.bs.js");

var people_001 = /* Node */[
  Ch05_CrmPerson$LearningTyddReason.jim,
  /* Empty */0
];

var people = /* Node */[
  Ch05_CrmPerson$LearningTyddReason.bob,
  people_001
];

function greet(_t) {
  while(true) {
    var t = _t;
    if (t) {
      console.log("Hello, " + (t[0][/* name */1] + "!"));
      _t = t[1];
      continue ;
      
    } else {
      return /* () */0;
    }
  };
}

exports.people = people;
exports.greet = greet;
/* No side effect */