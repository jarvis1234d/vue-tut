

const app =Vue.createApp({
    data(){
        return{
            message: "Hover to read",
            hover: "you hove",
            groceryList: [],
            site: "google",
            counter: 0
        }
    },
    mounted(){
        for(let i =  1; i< 11; i++){
            this.groceryList.push(i*2)
        }
    },
    computed:{
        url: function(){
            return 'https://www.' + this.site + '.com'
        },
    },
    methods:{
        date(){
            return new Date()
        },
        
    }
})