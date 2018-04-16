/* src/Ch05/Ch05_PersonList.re */
type t = Node(Ch05_CrmPerson.t, t) | Empty; /* (1) */

let people = Ch05_CrmPerson.(Node(bob, Node(jim, Empty))); /* (2) */

let rec greet(t) = switch (t) { /* (3) */
| Node(person, list) => { /* (4) */
    print_endline("Hello, " ++ person.name ++ "!");
    greet(list)
  }
| Empty => () /* (5) */
};
