

const app =Vue.createApp({
    data(){
        return{
            firstName: 'Foo',
            lastName: 'Bar'
        }
    },
    computed:{
        fullName(){
            return this.firstName + ' ' + this.lastName
        }
    }
})