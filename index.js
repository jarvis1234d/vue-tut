

const app =Vue.createApp({
    data(){
        return{
            message: "Hover to read",
            hover: "you hove",
            groceryList: []
        }
    },
    mounted(){
        for(let i =  1; i< 11; i++){
            this.groceryList.push(i*2)
        }
    }
    
})