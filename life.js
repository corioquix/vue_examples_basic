var app = new Vue({
    el:'#app',
    data:{
       saludo: 'init saludo'
    },
    
    methods:{
       
    },

    computed: {
         
    },

    beforeCreate() {
        //
        console.log('beforeCreate');
    },

    created(){
        //al crear meotdos, obser, eventos, pero aun no
        //accede al DOM
        console.log('created');
    },

    beforeMount() {
        //antes de insertar al DOM
        console.log('beforeMount');
    },

    mounted() {
        //al insertar al DOM
        console.log('mounted');
    },

    beforeUpdate() {
        //al detectar un cambio
        console.log('beforeUpdate');
    },

    updated() {
        //al realizar cambios
        console.log('updated');
    },

    beforeDestroy() {
        console.log('beforeDestroy');
    },

    destroyed() {
        console.log('destroyed');
    }
});