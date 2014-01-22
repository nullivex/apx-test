'use strict';
exports.name = 'raw'
exports.description = 'Example Action that outputs raw data'
exports.run = function(apx,req,res,next){
  res.add('we are alive')
  next()
}