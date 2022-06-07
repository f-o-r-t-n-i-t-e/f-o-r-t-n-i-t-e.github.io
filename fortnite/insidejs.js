let App = {
    data() {//функція, де ми оголошуємо усі змінні
        return {
            title: 'Заметки',
            myHolder: 'Введіть совет',
            notesArr: [],
            note: '',
        }
    },
    methods: {//тут мають бути усі функції
        readInput(event) {
            this.note = event.target.value;
        },
        addNote(){
            if(this.note != '' && this.note != ' ' && this.note != '  ' ){
                this.notesArr.push(this.note);
            }
            localStorage.setItem('myNote', JSON.stringify(this.notesArr))
            this.note='';
        },
        delNote(i){
            this.notesArr.splice( i , 1);
            localStorage.setItem('myNote', JSON.stringify(this.notesArr))
        },
    },
    mounted(){
        if (localStorage.getItem('myNote') != null){
            this.notesArr = JSON.parse(localStorage.getItem('myNote'));
        }
    },
}
Vue.createApp(App).mount('#main-container');//підключення до html
