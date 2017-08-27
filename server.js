var express = require('express')
var app = express()

app.get("/", function (request, response) {
  response.json({
    ipaddress: request.headers['x-forwarded-for'].split(',')[0],
    language: request.headers['accept-language'].split(',')[0],
    software: request.headers['user-agent'].split(') ')[0].split(' (')[1],
  })
})

var listener = app.listen(process.env.PORT, function () {
  console.log('Listening on port ' + listener.address().port)
})
