const middleware = {}

middleware['ApiService'] = require('..\\middleware\\ApiService.js')
middleware['ApiService'] = middleware['ApiService'].default || middleware['ApiService']

middleware['dist/ApiService.dev'] = require('..\\middleware\\dist\\ApiService.dev.js')
middleware['dist/ApiService.dev'] = middleware['dist/ApiService.dev'].default || middleware['dist/ApiService.dev']

export default middleware
