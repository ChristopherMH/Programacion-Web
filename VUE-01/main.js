//instancia de Vue
const app = Vue.createApp({
    data() {
        return {
            titulo: "Título de mi página con Vue",
            frutas: ['Manzana', "Fresa", "Naranja"],
            frutas2: [
                {nombre: 'Manzana', cantidad: 7},
                {nombre: 'Fresa', cantidad: 5},
                {nombre: 'Naranja', cantidad: 8}
            ]
        }
    }
});