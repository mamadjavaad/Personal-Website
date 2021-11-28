
var page_container = new Vue({
    el: '.page-container',
    data: {
        show_home:true,
        show_aboutMe: false,
        show_Skills: false,
        show_portofilo: false,
        btn_home: true,
        btn_aboutMe: false,
        btn_Skills: false,
        btn_portofilo: false
        
    },
    methods: {
        select_home: function () {
            this.show_home=true,
            this.show_aboutMe= false,
            this.show_Skills= false,
            this.show_portofilo= false,
            this.btn_home= true,
            this.btn_aboutMe= false,
            this.btn_Skills=false,
            this.btn_portofilo= false
        },
        select_aboutMe: function () {
            this.show_home=false,
            this.show_aboutMe= true,
            this.show_Skills= false,
            this.show_portofilo= false,
            this.btn_home= false,
            this.btn_aboutMe= true,
            this.btn_Skills=false,
            this.btn_portofilo= false
        },
        select_Skills: function () {
            this.show_home=false,
            this.show_aboutMe= false,
            this.show_Skills= true,
            this.show_portofilo= false,
            this.btn_home= false,
            this.btn_aboutMe= false,
            this.btn_Skills=true,
            this.btn_portofilo= false
        },
        select_portofilo: function () {
            this.show_home=false,
            this.show_aboutMe= false,
            this.show_Skills= false,
            this.show_portofilo= true,
            this.btn_home= false,
            this.btn_aboutMe= false,
            this.btn_Skills=false,
            this.btn_portofilo= true
        }
    },

})
