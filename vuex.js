Vue.component('padre', {
    template: `<div>
    <h2>{{txt}}</h2>
    <h3>Numero {{ $store.state.count }}</h3>
    <hijo></hijo>
    <hijo_sub></hijo_sub>
    </div>`,

    computed: {
        ...Vuex.mapState(['txt'])
        //...hacer merge del obj retornado
        //ayuda a abreviar las vars del store
    },
});

Vue.component('hijo', {
    template: `<div><button class="btn btn-info" @click="$store.commit('increment')" > + </button></div>`
});

Vue.component('hijo_sub', {
    template: `<div><button class="btn btn-danger" @click="decrement(2)" > - </button>
    <hr>
    <button class="btn btn-success" @click="getDatabase" > Obtener </button>
    </hr>
    <ul v-for="item of database">
        <li>{{item.nombre}}</li>
    </ul>
    </div>
    `,
    computed: {
        ...Vuex.mapState(['database'])
    },
    methods: {
        ...Vuex.mapMutations(['decrement'])  ,
        ...Vuex.mapActions(['getDatabase'])  
    }
});

const store = new Vuex.Store({
    state: {
      count: 0,
      txt: 'Hola mundo',
      database: []
    },
    mutations: {
      increment (state) {
        state.count++;
      },
      decrement (state, n) {
        state.count -= n;
      },

      fillDatabase: function(state, data){
        state.database = data;
        console.log(state)
      }
    },

    actions: {
        getDatabase: async function({commit}){
            let data = await fetch('assets/database.json');
            let json = await data.json();
            commit('fillDatabase', json);
        }
    }
});

var app = new Vue({
    el:'#app',
    store: store //se puede solo store
});

