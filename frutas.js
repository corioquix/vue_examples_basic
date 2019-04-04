var app = new Vue({
    el:'#main',
    data:{
        frutas:[
            {name: 'Josue', count: 12}, 
            {name: 'Mariana', count: 54}, 
            {name: 'Karla', count: 0}
        ],
        name:'',
        total: 0
    },
    
    methods:{
        addFruta: function(){
            this.frutas.push({name: this.name, count: 0});
            this.name = '';
        },

        addCantidad: function(item){
            item.count ++;
        }
    },

    computed: {
        sumFrutas: function(){
            let sumtotal = 0;
            for (let frutas of this.frutas) {
                sumtotal += frutas.count;
            }

            this.total = sumtotal;
            return this.total;
        }   
    }
});