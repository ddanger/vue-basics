var connect = require('connect')
var static = require('serve-static')

var server = connect()

// Serve the HTML
server.use(static(__dirname + '/client'))
// Serve Vue from node_modules
server.use(static(__dirname + '/node_modules/vue/dist/'))

var port = 3080
server.listen(port)
console.log('Listening on port: ', port)

var livereload = require('livereload')
var server = livereload.createServer()
server.watch(__dirname + '/client')
