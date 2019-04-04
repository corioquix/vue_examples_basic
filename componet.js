Vue.component('saludo', {
    template: `
    <div>
        <!-- 
        name="dato quemado"
        :name vue bind = data()
        @nombreEmit="nombredata = $event0"
        -->
        <h1>Componete saludo</h1>
        <h3>Hola: {{saludo}} </h3>
        <small>{{nombre}}</small>
        <saludo_hijo :name="saludo" @nombreHijo="nombre = $event"></saludo_hijo>
    </div>`,
    data: function(){
        return{
            saludo: 'Corioquix',
            nombre: '',
        }
    }
});

Vue.component('saludo_hijo', {
    template: `
    <div class="bg-danger text-white">
        <h1>Page sus deudas: {{name}}</h1>
    </div>`,

    props:['name'], //recibe del padre
    data: function(){
        return{
            nombre: 'Nombre de contacto'
        };
    },

    mounted() {
        this.$emit('nombreHijo', this.nombre);   
        //emite al padre
    }
});


var app = new Vue({
    el:'#app',
    data:{}
});