var requestHelper = require('./helpers/request_helper.js')

window.addEventListener('DOMContentLoaded', function() {
  requestHelper.getRequest('http://localhost:3000/api/films', function(dogs) {

  })
})
