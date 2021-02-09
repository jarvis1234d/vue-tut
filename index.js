

const app =Vue.createApp({
    data(){
        return{
            question: '',
            answer: 'Question usually contains a question mark. ;-)',
            url: ''
        }
    },
    
    watch:{
        question(newQuestion){
            if(newQuestion.indexOf('?') > -1){
                this.getAnswer()
            }
        }
    },
    methods:{
        getAnswer(){
            this.answer = 'Thinking....'
            //axios is a http client which makes request to the yesno api which returns 
            //yes or no then we set answer equal to data.answer which we got through the reponse
            //and then we catch errors
            axios.get('https://yesno.wtf/api').then(response => {this.answer = response.data.answer; this.url = response.data.image})
            .catch(error =>{this.answer= 'Error! could not reach api. '+ error})
        }
    }
})