export default {
    name: 'test',
    data() {
        return {
            msg: 'this is Vue.js test',
            checked: false,
            message: "",
            checkedNames: []
        }
    },
    methods: {
        greet: function() {
            alert(this.msg);
        },
        inputText: function(event) {
            alert(event.target.value);
        }
    }
}
