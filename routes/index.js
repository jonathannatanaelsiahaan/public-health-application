exports.index = function(req, res){
  	res.sendfile('public/index.html');
};

exports.partials = function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
};