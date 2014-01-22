'use strict';
exports.name = 'foo'
exports.description = 'Example Foo Action'
exports.run = function(apx,req,res,next){
  res.set('status','alive')
  next()
  //fire the hello job
  apx.jobs.create('hello',{title: 'Needs to say hi'})
    .delay(5000)
    .priority('low')
    .save()
}