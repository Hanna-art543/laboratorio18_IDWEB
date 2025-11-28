const regex = /<\/?[^>]+>/g;

const texto = "<h1>Hola</h1> <h1>Enanos</h1>";
const limpio = texto.replace(regex, "");

console.log(limpio);