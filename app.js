var apx = require('apx')

apx.once('ready',function(){
  console.log('APX is ready!')
})

//pass options and configure
apx.start({
  cwd: __dirname,
  initializers: ['apx-winston'],
  translators: ['apx-express-socket.io'],
  express: {
    routes: [
      {get: {path: '/foo', file: 'actions/foo.js'}}
    ]
  },
  'socket-io': {
    enabled: false
  },
  winston: {file: 'foo.log'}
})