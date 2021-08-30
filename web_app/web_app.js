


new Vue({
    el:'#app',
    data:{
        peoples: ['Joe Doe'],
        dates: ['11-02-1983'],
        currentPeoplesName: '',
        currentPeoplesLastName: '',
        currentPeoplesDate: ''
        
    },
    methods: {
        addPeople:function(){
            this.peoples.push(this.currentPeoplesName + " " + this.currentPeoplesLastName);
            this.dates.push(this.currentPeoplesDate);
            this.currentPeoplesName = '';
            this.currentPeoplesLastName = '';
            this.currentPeoplesDate = '';
        },
        deleteItem:function(index){
            this.peoples.splice(index, 1)
            this.dates.splice(index, 1)
        }
    }
})