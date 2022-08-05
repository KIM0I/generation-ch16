/* There are three people waiting for the bank. Their names, in order, are Sofia, David, and Juan. */
let fila = ["Sofía", "David", "Juan"];
console.log(fila);

/* Two more people get added to the back of the line - Sara and Augustin. The first person in line is called to the teller. What does the queue look like? */

fila.push("Sara", "Agustín");
fila.shift();
console.log(fila);
/* It turns out David was saving a spot for his friend Renata. She shows up and goes behind him in the line. One more person (Elena) shows up and goes to the end of the line. What does the queue look like? */

fila.splice(1, 0, "Renata");
fila.push("Elena");
console.log(fila);
