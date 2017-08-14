var app = new Vue ({
    el: "#app",
    data: {
        message1 : "Navid is sorta kinda cool too",
        message2 : "Jasmine is sorta kinda cool sometimes too",
        message3 : "This is a loaded program" + new Date(),
        message4: 'Hello Vue.js!',
    todos : [
        { text: 'This actually is working guys!'},
        { text: 'Learn Vue.js'},
        { text : 'Think about scholarships too guys! They are important.'}
     ],
    methods: {
        reverseMessage4: function () {
        this.message4 = this.message4.split('').reverse().join('')
     }
    }
   }
});