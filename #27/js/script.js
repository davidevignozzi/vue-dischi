var app = new Vue({

    el : '#app',

    data: {
        cds : [],
        index : 0,
        genreList: [],
        selected: "All",
    },
    
    methods: {

        // pusho tutti i generi in un array per stamparli nella select
        genreOption() {
            const self = this;
            this.cds.forEach((el) => {
              if (!self.genreList.includes(el.genre)) {
                self.genreList.push(el.genre);
              }
            });
        },

        filtroList: function () {
            this.cds.forEach((element) => {
              if (element.includes(this.selected)) {
                return { ...element};
                }
            });
        },

    },

    mounted(){
        axios
        .get("https://flynn.boolean.careers/exercises/api/array/music")
        .then((resp) => {
          this.cds = resp.data.response;
          this.genreOption();
        });
    },

})
Vue.config.devtools = true