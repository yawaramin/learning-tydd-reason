/* src/Ch05/Ch05_CrmPerson.re */
type education = Ch05_Variants.education =
| School
| College
| Postgrad
| Other;

type t = {id: int, name: string, education}; /* (1) */

/* (2) */
let bob = {id: 1, name: "Bob", education: College};
let jim = {id: 2, name: "Jim", education: Other};
