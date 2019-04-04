var app = new Vue({
    el:'#app',
    data:{
        texto: '',
        count: 0
    },
    
    methods:{
        addCount(){

        }
    },

    computed: {
        revert: function(){
           return this.texto.split(' ').reverse().join(' ');
        },

        colorBar: function(){

            return {
                'bg-danger': (this.count < 25),
                'bg-warning': (this.count >= 25 && this.count < 50),
                'bg-success': (this.count >= 50)
            };
        }
    }
});