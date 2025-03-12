const jugador = {
    nombre: "Alex",
    Experiencia: 15,
    inventario: {
        herramienta: "Hacha de hierro",
        comida: "Patatas",
        bloques: 64
    }
};

const { nombre, inventario: { herramienta } } = jugador;

console.log(nombre);
console.log(herramienta);

//SpreadOperator

const nuevoObjeto = "Antorcha";

const nuevoInventario = {
    ...jugador.inventario,
    antorcha: nuevoObjeto
};

console.log(nuevoInventario);


