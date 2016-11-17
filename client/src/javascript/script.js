$(document).ready(() => {
  var app = new Vue({
    el: '#app',
    data: {
      cms:[],
      letter:'',
      frequency: '',
      coming:''
    },
    methods: {
      list: function() {
        axios
          .get('http://localhost:3000/api/cms')
          .then((item) => {
            app.cms = item.data
            console.log(item)})
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
            console.log(result)
          })
          .catch((err) => {console.log(err)})
      }
    }
  })

  app.list();
})
