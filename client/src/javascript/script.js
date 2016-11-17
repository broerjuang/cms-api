$(document).ready(() => {
  var app = new Vue({
    el: '#app',
    data: {
      cms:[],
      letter:'',
      frequency: '',
      coming:'',
      message: '',
      searching: []
    },
    methods: {
      list: function() {
        axios
          .get('http://localhost:3000/api/cms')
          .then((item) => {
            app.cms = item.data})
          .catch((err) => console.log(err))
      },
      postCms: function() {
        axios
          .post('http://localhost:3000/api/cms', {
            letter: app.letter,
            frequency: app.frequency,
            coming: app.coming
          })
          .then((result) => {
            app.cms.unshift(result)
            app.list()
          })
          .catch((err) => {console.log(err)})
      },
      deleteCms: function(id) {
        console.log(id)
        axios
          .delete('http://localhost:3000/api/cms/'+id)
          .then((result) => {
            alert("it has been deleted")
            app.list()
          })
          .catch((err) => console.log(err))

      },
      searchCms: function(id) {
        axios
          .get('http://localhost:3000/api/cms'+id)
          .then((result) => {
            app.searching = result.data
            console.log(result)
          })
      }
    }
  })

  app.list();
})
