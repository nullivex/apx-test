'use strict';
var expect = require('chai').expect
  , apx = require('apx')
  , request = require('restler')
  , io = require('socket.io-client')
describe('APX Test',function(){
  var socket
  before(function(done){
    apx.once('ready',function(){
      socket = io.connect('http://localhost:3000')
      socket.once('connect',done)
    })
    apx.start({
      cwd: __dirname + '/../',
      sysLogLevel: 2,
      config: ['config.js'],
      initializers: [
        'apx-kue',
        'apx-mongoose',
        'apx-winston'
      ],
      middleware: ['apx-session'],
      translators: ['apx-express-socket.io'],
      tasks: 'tasks/*.js',
      express: {
        routes: [
          {get: {path: '/foo', file: 'actions/foo.js'}}
        ]
      },
      'socket-io': {
        config: {
          'log level': 0
        },
        routes: [
          {foo: 'actions/foo.js'}
        ]
      }
    })
  })
  after(function(done){
    apx.once('dead',function(){
      done()

    })
    socket.once('disconnect',function(){
      apx.stop()
    })
    socket.disconnect()
  })
  it('should respond with status and sessionId via http',function(done){
    request.get('http://localhost:3000/foo').on('complete',function(body,res){
      expect(res.statusCode).to.equal(200)
      expect(body.status).to.equal('alive')
      expect(body.$sessionId).to.be.a('string')
      done()
    })
  })
  it('should respond with status and sessionId via socket.io',function(done){
    socket.emit('foo',{},function(res){
      expect(res.status).to.equal('alive')
      expect(res.$sessionId).to.be.a('string')
      done()
    })
  })
  describe('CRUD Requests (With apx-helper-crud and apx-mongoose)',function(){
    it('should be able to create')
    it('should be able to read')
    it('should be able to update')
    it('should be able to delete')
  })
})