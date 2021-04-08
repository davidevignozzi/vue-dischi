var app = new Vue({

    el : '#app',

    data: {
      cds : [],
      index : 0,
    },
    
    methods: {
        // methods
    },

    mounted(){
      const self = this;
        axios.get('https://flynn.boolean.careers/exercises/api/array/music').
          then(function(resp){
            self.cds = resp.data.response;
          })
      console.log(self.cds);
    },

  })
  
  Vue.config.devtools = true