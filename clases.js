var app = new Vue({
    el:'#app',
    data:{
       color: true
    },
    
    methods:{
        cambiaColor: function(){
            this.color = (this.color) ? false : true;
        }
    },

    computed: {
         
    }
});