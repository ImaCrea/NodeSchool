var fs = require('fs')
var path = require('path')

module.exports = function (err,dir,extent) {
	if (err) throw err

	fs.readdir(dir,function(err,files){
		if (err) throw err

		files.forEach(function(file){
			if (path.extname(file) === ("."+extent)) console.log(file)
		})
	})	

}
