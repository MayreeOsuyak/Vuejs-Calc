// new Vue ({
//     el: "#calculator",
//     data: {
//         total: '',
        
//     },
//     methods: {
//         clear() {
//             this.total = '';
//         },
//         append(number) {
//             this.total = '';
//         }
//     }
// })
new Vue ({
    el: "#calculator",
    data: {
        total: '',
        operators: null,
    },
    methods: {
        clear: function(number) {
           return this.total =''
        },
        append(number) {
            this.total = `${this.total}${number}`;
        },
        divide() {
           this.total += "/";
        },
        times(){
            this.total += "*";
        },
        minus() {
            this.total += "-";
        },
        add() {
            this.total += "+";
        },
        equal: function() {
            let equal = this.total;
            return this.total = eval(equal)

        }
    }
})