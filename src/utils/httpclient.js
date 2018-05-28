export default {
  GET: function ($this, url) {
    $this.$http.get(url).then(response => {
      console.log(response.data)
    }, response => {
      console.log('error')
    })
  },
  POST: function ($this, url, body) {
    $this.$http.post(url, body).then(response => {
      console.log(response.data)
    }, response => {
      console.log('error')
    })
  }
}
