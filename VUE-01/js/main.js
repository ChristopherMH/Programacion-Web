// Instancia de Vue

const app = Vue.createApp({
    data() {
        return {
            titulo: "Título de mi página con Vue",
            frutas: ['Manzana', 'Fresa', 'Naranja'],
            frutas2: [ 
                {nombre: 'Manzana', cantidad: 7},
                {nombre: 'Fresa', cantidad: 5},
                {nombre: 'Naranja', cantidad: 8}
            ],
            nuevaFruta: ""
        }
    },
    methods: {
        agregarFruta() {
           // console.log("nueva fruta", this.nuevaFruta)
           this.frutas.push(this.nuevaFruta);
           this.frutas2.push({
               nombre: this.nuevaFruta,
               cantidad: 0
           })
           this.nuevaFruta = "";
        }
    },
    computed: {
        sumarFruta() {
            return this.frutas2.reduce((sum, f) => (sum + f.cantidad), 0);
        },
        colorCantidad() {
            return this.sumarFruta > 20 ? 'text-success' : 'text-danger';
        }
    }
});