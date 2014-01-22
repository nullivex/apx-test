'use strict';
exports.name = 'hello'
exports.description = 'Just says hi'
exports.run = function(apx,req,next){
  apx.log.info('HI GUYS')
  next()
}