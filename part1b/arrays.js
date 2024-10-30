const t = [1, -1, 3];

t.push(5);

console.log(t.length); // Se imprime 4
console.log(t[1]);     // Se imprime -1

t.forEach(value => {
    console.log(value);  // Se imprimen los números 1, -1, 3, 5, cada uno en su propia línea
});
