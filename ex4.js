const d1  = '1997-10-20';
const d2    = '2024-09-07';

const difmes   = new Date(d2) - new Date(d1)
const difdia = difmes / (1000 * 60 * 60 * 24);

console.log("Carlos viveu " + difdia + " dias");
console.log("Carlos nasceu em 20 de outubro de 1997");
console.log("Carlos está vivo há 26 anos, 10 meses e 19 dias");