<template>
    <div>
        <h2>Ingresar un número n para mostrar el n-ésimo número de la serie de fibonacci</h2>
        <button type="button" v-on:click="sayHi">Mensaje Secreto</button>
        <hr>
        <input type="number" v-model="numero">
        <br>
        <button type="button" v-on:click="calc">Calcular</button>
        <h3>{{ resultado }}</h3>
    </div>
</template>

<script>
export default {
    data () {
        return {
            numero: 3,
            resultado: -1
        }
    },
    methods: {
        calc () {
            this.resultado = this.fib(this.numero)
        },
        fib (n) {
            if (n <= 0 || n % 1 != 0){
                return 0
            } else if(n === 1) {
                return 1
            } else {
                return this.fib(n - 1) + this.fib(n - 2)
            }
        },
        cuadrado (numero) {
            this.resultado = numero * numero
        },
        sayHi () {
           alert('Shh es un secreto')
        }
    }
}
</script>

<style scoped>

</style>
