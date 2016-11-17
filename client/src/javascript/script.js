$(document).ready(() => {
  var app = new Vue({
    el: '#app',
    data: {
      cms:[]
    },
    methods: {
      list: function() {
        axios
          .get('http://localhost:3000/api/cms')
          .then((item) => {
            app.cms = item.data
            console.log(item)})
          .catch((err) => console.log(error))
      }
    }
  }

  app.list();
})
