exports.name = 'foo'
exports.description = 'Example Foo Action'
exports.run = function(apx,req,res,next){
  res.set('status','alive')
  next()
}